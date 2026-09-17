# Meng Socheata Portfolio

## Goal
Build a polished, single-page academic portfolio that presents Meng Socheata’s current deep-learning interests accurately and without invented credentials.

## Page Structure
- Sticky navigation with smooth section links and a mobile menu
- Hero introducing Meng Socheata, Pusan National University, and the stated AI focus
- “Currently” status panel with four provided activities
- Three research-interest cards plus the provided “What I’m Exploring” statement
- Academic profile and grouped, editable skill placeholders
- “What I’m Looking For” callout
- Contact area with clearly disabled/unavailable placeholders for email, GitHub, LinkedIn, and CV
- Minimal footer
- Projects, experience, publications, and achievements remain data-ready but render only when real entries exist

## Visual Direction
- Warm off-white canvas, charcoal typography, white surfaces, subtle borders and shadows
- Restrained indigo-to-violet-to-pink gradient accents
- Plus Jakarta Sans typography, generous whitespace, rounded but compact surfaces
- Small research-inspired decorative graphic rather than stock imagery
- Responsive layouts for desktop, tablet, and mobile

## Interaction and Accessibility
- Keyboard-accessible mobile navigation
- Smooth anchor scrolling with sticky-header offsets
- One-time viewport reveals, restrained hover movement, subtle status pulse, and a thin scroll-progress line
- Motion disabled or reduced when the visitor requests reduced motion
- Strong focus states, semantic landmarks, and readable contrast

## Technical Approach
- Centralize all personal, current, research, academic, skills, optional-section, and contact data in one typed data module
- Build focused reusable React sections and shared reveal/heading elements
- Render optional sections conditionally from data arrays
- Use the existing TanStack single-page route and semantic Tailwind design tokens
- Add page-specific title, description, Open Graph, and Twitter metadata
- Verify desktop and mobile rendering, navigation behavior, browser errors, overflow, and accessibility basics
