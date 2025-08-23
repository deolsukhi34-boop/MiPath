import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertRegistrationSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", async (req, res) => {
    res.json({ ok: true });
  });

  // Registration endpoint for Airtable integration
  app.post("/api/register", async (req, res) => {
    try {
      // Validate request body
      const validationResult = insertRegistrationSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid request data",
          errors: validationResult.error.errors 
        });
      }

      const registrationData = validationResult.data;

      // Try to submit to Airtable
      try {
        const airtableResult = await storage.submitToAirtable(registrationData);
        
        // Also store locally as backup
        const localRegistration = await storage.createRegistration(registrationData);
        
        res.json({ 
          success: true, 
          airtableId: airtableResult.id,
          localId: localRegistration.id,
          message: "Registration submitted successfully" 
        });
      } catch (airtableError) {
        console.error("Airtable submission failed:", airtableError);
        
        // Fall back to local storage only
        const localRegistration = await storage.createRegistration(registrationData);
        
        res.json({ 
          success: true, 
          localId: localRegistration.id,
          message: "Registration saved locally. Airtable sync pending.",
          warning: "External service temporarily unavailable"
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ 
        message: "Internal server error during registration" 
      });
    }
  });

  // Get all registrations (for admin purposes)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Failed to fetch registrations:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
