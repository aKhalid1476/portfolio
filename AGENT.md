# AGENT.md

## Purpose

This repository contains a personal software engineering portfolio website. The goal of this project is to present projects, technical experience, and engineering work in a professional, performant, and maintainable way consistent with modern frontend industry standards.

The application should prioritize performance, accessibility, maintainability, and clean architecture over visual complexity or unnecessary abstractions.

This file defines how AI agents should modify, generate, and refactor code within this repository.

---

## Project Goals

The portfolio should:

- Load quickly and perform well on mobile and desktop devices
- Clearly communicate projects and technical experience
- Follow modern frontend engineering practices used in production environments
- Remain simple to maintain and extend over time
- Avoid unnecessary dependencies or framework complexity

The project is not intended to be experimental or highly dynamic. Stability and clarity are preferred.

---

## Technology Stack

### Frontend framework
- React with TypeScript

### Styling
- TailwindCSS or modular CSS
- No inline styling unless dynamically required

### Build tooling
- Modern bundler (Vite or Next.js)

### State management
- Local component state by default
- Avoid global state unless necessary

### Routing
- Framework-native routing only

---

## Architecture Principles

### Component Design

- Components must be small, reusable, and single-purpose
- Separate layout components from content components
- Avoid deeply nested component trees
- Prefer composition over inheritance

### Folder Structure

Components should follow:
/components
/ui (buttons, cards, reusable primitives)
/layout (navbar, footer, containers)
/sections (projects, hero, experience)


Pages should only compose components and contain minimal logic.

### Logic Separation

- Business logic must not live inside presentation components
- Data formatting and helpers belong in utility files
- API or async logic must be isolated from UI rendering

---

## Code Standards

### General

- TypeScript types must be explicit for props and public interfaces
- Avoid use of `any`
- Prefer readable code over clever or dense implementations
- Functions should do one thing only

### React Practices

- Functional components only
- Hooks must follow React rules strictly
- Avoid unnecessary re-renders
- Memoization only when performance benefit is clear

### Styling

- Use consistent spacing and typography scale
- Avoid arbitrary pixel values when possible
- Maintain visual consistency across sections

---

## Performance Requirements

- Avoid large client-side libraries
- Optimize images and assets
- Prefer static rendering where possible
- Minimize bundle size growth
- Lazy load non-critical components

Core Web Vitals should remain within recommended thresholds.

---

## Accessibility Requirements

- Semantic HTML must be used
- All interactive elements must be keyboard accessible
- Images require alt text
- Color contrast must remain accessible

Accessibility is a requirement, not an enhancement.

---

## AI Agent Behavior Rules

When modifying this repository:

- Do not introduce new frameworks or major dependencies without justification
- Do not refactor large sections unless explicitly requested
- Maintain existing structure and naming conventions
- Prefer incremental improvements over large rewrites
- If unsure about intent, leave a TODO comment instead of guessing

Generated code must appear as if written by a professional frontend engineer in a production codebase.

---

## Testing and Quality

- Components should remain easily testable
- Avoid tightly coupling UI and logic
- Prefer predictable and deterministic behavior

---

## Non-Goals

The portfolio should not:

- Contain overly complex animations
- Introduce experimental architecture patterns
- Include unnecessary backend logic
- Optimize prematurely

Clarity and professionalism take priority over novelty.

