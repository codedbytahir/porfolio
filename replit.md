# Overview

This is a full-stack developer portfolio web application built with React, TypeScript, and modern web technologies. The application showcases a creative developer's skills, projects, and professional experience through a visually stunning, responsive interface with glassmorphic design elements, smooth animations, and interactive components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming and design consistency
- **UI Components**: Comprehensive component library using Radix UI primitives for accessibility
- **Animations**: Framer Motion for page transitions and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Theme System**: Custom theme provider supporting dark/light modes with system preference detection

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database Integration**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **Development**: Hot module replacement and runtime error overlay for enhanced developer experience
- **Build Process**: ESBuild for server-side bundling with external package handling

## Design System
- **Component Structure**: Modular component architecture with reusable UI primitives
- **Styling Strategy**: Utility-first CSS with Tailwind, custom CSS variables for theming
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animation System**: Scroll-triggered animations and smooth page transitions
- **Visual Effects**: Glassmorphic cards, gradient backgrounds, and cursor trail effects

## Data Management
- **Schema Definition**: Centralized schema definition in shared directory for type consistency
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Type Safety**: End-to-end type safety from database to frontend using Drizzle and Zod

## Development Workflow
- **Monorepo Structure**: Client and server code organized in separate directories with shared types
- **Path Aliases**: Configured path mapping for clean imports across the application
- **Development Server**: Integrated Vite development server with Express for full-stack development
- **Build Process**: Separate client and server build processes with optimized output

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon Database serverless driver for PostgreSQL connections
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI and Styling
- **@radix-ui/***: Complete set of accessible UI primitives (dialog, dropdown, toast, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Runtime component styling with variant support
- **framer-motion**: Animation library for page transitions and interactive effects

## Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form validation
- **zod**: Schema validation library integrated with forms and database

## Communication
- **@emailjs/browser**: Client-side email service for contact form functionality
- **@tanstack/react-query**: Server state management and data fetching

## Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit integration
- **tsx**: TypeScript execution environment for development server