import { type Registration, type InsertRegistration, type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Phone?: string;
    Email: string;
    Service?: string;
    Notes?: string;
    Source: string;
    Status: string;
    CreatedAt: string;
  };
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
  submitToAirtable(registration: InsertRegistration): Promise<{ id: string }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private registrations: Map<string, Registration>;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = {
      ...insertRegistration,
      id,
      source: insertRegistration.source || "App",
      status: "New",
      createdAt: new Date(),
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async submitToAirtable(registration: InsertRegistration): Promise<{ id: string }> {
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE;
    const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || "Registrations";

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE) {
      throw new Error("Airtable configuration missing. Please check environment variables.");
    }

    const airtableData: AirtableRecord = {
      id: "",
      fields: {
        Name: registration.name,
        Email: registration.email,
        Phone: registration.phone || "",
        Service: registration.service || "",
        Notes: registration.notes || "",
        Source: registration.source || "App",
        Status: "New",
        CreatedAt: new Date().toISOString(),
      }
    };

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: airtableData.fields
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Airtable API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return { id: result.id };
  }
}

export const storage = new MemStorage();
