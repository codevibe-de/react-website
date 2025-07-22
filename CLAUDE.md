# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Next.js 15 project using the App Router architecture with TypeScript and Tailwind CSS v4. The codebase follows Next.js conventions:

- `src/app/` - App Router pages and layouts
- `src/app/layout.tsx` - Root layout with Geist fonts and global styles
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global Tailwind styles
- `public/` - Static assets (SVG icons)
- TypeScript path mapping: `@/*` maps to `./src/*`

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Key Technologies

- **Next.js 15** with App Router
- **React 19** 
- **TypeScript** with strict mode
- **Tailwind CSS v4** with PostCSS
- **ESLint** with Next.js and TypeScript rules
- **Geist fonts** (sans and mono) via next/font/google

## Configuration Notes

- Uses modern ESLint flat config (eslint.config.mjs)
- TypeScript configured for ES2017 target with strict mode
- Next.js config is minimal (next.config.ts)
- Tailwind v4 setup with @tailwindcss/postcss plugin

## Style Guide

### Colors

- Page Background #ffffff
- Section Background #37306B
- Text #2A2557
- Headings & Links #66347F

### Logo

- public/codevibe-logo.png

## Feature Requirements

We are developing a website for a company called Codevibe, which offers courses for software developers.

These courses teach people how to use languages like Java, Kotlin and Golang efficiently and with fun.
We also provide trainings on dev tools like Maven, Intellij IDEA and Git.

### Headless

The site is to be provided with data from a headless CMS (Contentful). However, at first it is enough to load each pages data from local JSON files and pass the required sub-content to each component.

### Entities

A "Course" entity has the following attributes:

- id (String), such as "K-01"
- a short title, e.g. "Kotlin Grundlagen"
- a description (multiple sentences)
- a goal (multiple sentences)
- a target audience (multiple sentences)
- an outline, some markdown formatted list of topics that are covered by this course
- a price in EUR for a single person
- a price in EUR for an inhouse booking
- a duration in days (int)
- featured (boolean)

### Page Structure

- **Homepage** (`/`)
  - Hero section introducing Codevibe
  - Featured courses showcase
  - Company overview/mission
  - Call-to-action for course browsing
  - Team section

- **Courses** (`/courses`)
  - Course listing/catalog page
  - Filter by language (Java, Kotlin, Golang) or tool (Maven, IntelliJ, Git)
  - Search functionality, all courses should be fetched before rendering this page and search performs a live filtering on this data. A course is displayed if it contains the keywords in title or description
  - Course cards with preview info

- **Individual Course Pages** (`/courses/[courseId]-[courseTitle]`)
  - Full course details (title, description, goal, target audience)
  - Course outline
  - Pricing information (single person vs inhouse)
  - Duration and scheduling info
  - Button for sending an email to sales@codevibe.de with the course id and title in the subject line

- **About** (`/about`) - Optional
  - Company information
  - Instructor profiles
  - Training methodology

- **Contact** (`/contact`) - Optional
  - Contact form
  - Company details
  - Location/training venues

- Imprint (`/impring`)
- 