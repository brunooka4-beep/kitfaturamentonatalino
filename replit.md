# Sobremesas Festivas Landing Page

## Overview

This is a high-conversion landing page for selling a French pâtisserie e-book called "Sobremesas Festivas: Técnicas Francesas" (Festive Desserts: French Techniques). The target audience is Brazilian confectioners who want to profit during Christmas without relying on expensive condensed milk. The page follows French pâtisserie aesthetics with CRO-optimized sales patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom French pâtisserie theme
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: tsx for TypeScript execution, Vite middleware for HMR

### Design System
- **Color Palette**: Cream Beige (#F5F0E6) background, Charcoal Gray (#3C4650) text, Terracotta (#A85D48) accents
- **Typography**: Playfair Display (headings), Lato (body) via Google Fonts
- **Icons**: FontAwesome via CDN
- **Layout**: Mobile-first responsive with Tailwind breakpoints

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit (`drizzle-kit push`)
- **Storage Abstraction**: `server/storage.ts` with in-memory fallback

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (shadcn/ui)
    pages/        # Route pages (landing, not-found)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schema
```

## External Dependencies

### Third-Party Services
- **Google Fonts CDN**: Playfair Display and Lato typography
- **FontAwesome CDN**: Icon library for UI elements
- **Unsplash**: Placeholder images for dessert showcase

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle ORM**: Database toolkit for schema management and queries

### Key NPM Packages
- **@tanstack/react-query**: Async state management
- **@radix-ui/**: Accessible UI primitives (accordion, dialog, toast, etc.)
- **drizzle-orm** + **drizzle-zod**: Database ORM with Zod validation
- **express**: HTTP server framework
- **wouter**: Client-side routing
- **class-variance-authority**: Component variant styling