# MI Path - Immigration Services PWA

A comprehensive Progressive Web Application for Muskan Immigration providing IRCC updates, visa information, and lead capture capabilities.

## Features

- **Responsive PWA Design**: Mobile-first design optimized for all devices
- **IRCC News Hub**: Latest immigration updates with filtering and search
- **Visa Information**: Comprehensive visa types with requirements and procedures
- **Lead Capture**: Airtable integration for form submissions
- **Offline Support**: Service worker for offline shell functionality
- **Professional UI**: Matching Muskan Immigration brand colors and styling

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: In-memory storage with Airtable integration
- **PWA Features**: Service Worker + Web App Manifest
- **Styling**: Custom brand colors + Shadcn UI components

## Brand Colors

- Deep Navy: `#0B1E2D`
- Royal Blue: `#0F7CFF`
- Teal: `#00C2A8`
- Coral: `#FF6B5A`
- Off-White: `#F7FAFF`

## Environment Variables

Create a `.env` file with the following variables for Airtable integration:

```env
AIRTABLE_TOKEN=your_airtable_api_token
AIRTABLE_BASE=your_airtable_base_id
AIRTABLE_TABLE=Registrations
