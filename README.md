# Angular Todo Application

## Overview
A modern Todo application built with Angular 15+, featuring real-time task management, search functionality, and timer tracking.

## Features
- ✨ Create, Read, Update, Delete (CRUD) operations for tasks
- 🔍 Real-time search filtering
- ⏱️ Task creation timestamp tracking
- 💾 Local storage persistence
- 📱 Responsive design using Bootstrap
- ⌛ Global session timer

## Technologies Used
- Angular 15+
- TypeScript
- Bootstrap 5
- RxJS
- Angular Forms
- Custom Pipes

## Prerequisites
- Node.js (v14+)
- npm (v6+)
- Angular CLI (`npm install -g @angular/cli`)

## Setup
```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
ng serve

##Development Commands
# Generate new component
ng generate component component-name

# Generate service
ng generate service service-name

# Build for production
ng build --prod

# Run tests
```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
ng serve
```

## Project Structure
```plaintext
src/
├── app/
│   ├── components/
│   │   └── todo/
│   ├── services/
│   │   └── timer.service.ts
│   ├── models/
│   │   └── todo.interface.ts
│   └── pipes/
│       └── filter.pipe.ts
├── assets/
└── styles/
```

## Testing
- Unit Tests: `ng test`
- E2E Tests: `ng e2e`

## Build
- Production build: `ng build --prod`
- Output directory: `dist/`

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request