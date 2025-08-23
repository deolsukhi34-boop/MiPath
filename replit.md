# MI Path - Immigration Services PWA

## Overview

MI Path is a Progressive Web Application (PWA) designed for Muskan Immigration, providing comprehensive immigration services and resources. The application serves as a digital platform for Canadian immigration consulting, featuring IRCC updates, visa information, lead capture capabilities, and client engagement tools. Built as a mobile-first PWA, it's designed to eventually be published on app stores via Trusted Web Activity (TWA).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern React features
- **Styling**: Tailwind CSS for utility-first styling with custom brand colors (Deep Navy, Royal Blue, Teal, Coral, Off-White)
- **UI Components**: Shadcn UI library providing consistent, accessible components
- **Typography**: Inter for body text, Poppins for headings
- **PWA Features**: Service Worker for offline functionality and Web App Manifest for app-like experience
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **API Design**: RESTful endpoints with structured error handling
- **Data Storage**: In-memory storage with Drizzle ORM for database operations
- **Form Handling**: Zod for request validation and type-safe schema definitions

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect (configured for future database integration)
- **Schema**: Two main entities - Users and Registrations
- **Validation**: Drizzle-Zod integration for type-safe database operations

### PWA Implementation
- **Offline Support**: Service Worker caches critical resources for offline shell functionality
- **App Manifest**: Configured for standalone app experience with proper icons and theming
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Content Management
- **Static Data**: JSON files for news updates and visa type information
- **Dynamic Forms**: Contact and registration forms with real-time validation
- **File Organization**: Component-based architecture with clear separation of concerns

## External Dependencies

### Third-Party Services
- **Airtable**: Primary integration for lead capture and form submissions, with local fallback storage
- **Microsoft Forms**: External registration portal for comprehensive application intake
- **Email Integration**: Direct mailto links for quick client communication

### Development Tools
- **Vite**: Build tool and development server with HMR support
- **Replit Integration**: Development environment plugins and error handling
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### Font Services
- **Google Fonts**: Inter and Poppins font families loaded via CDN

### Image Services
- **Unsplash**: Stock imagery for hero sections and visual content

### UI/UX Libraries
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants
- **Embla Carousel**: Touch-friendly carousel component

The application is designed to handle immigration consulting workflows, from initial client contact through case management, with a focus on user experience and professional presentation matching the Muskan Immigration brand identity.