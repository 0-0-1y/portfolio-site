<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Site Agent Rules

## Project Purpose

This site is a graduate application portfolio for product design work. The main goal is not to make a flashy portfolio, but to help reviewers quickly understand the designer's capability: context reading, research, insight, concept translation, development, material and ergonomic reasoning, final expression, and reflection.

Design style must serve the work. Keep the site clear, professional, personal, and coherent without turning it into a generic Behance/Pinterest template or a purely technical report.

## Product Portfolio Principles

- Prioritize narrative clarity over visual spectacle.
- Show the design chain, not only final renders.
- Rebuild important PDF text as accessible HTML text. Do not rely on small text embedded in images.
- Use project-specific section names on the surface, while preserving the underlying case study logic: context, research, insight, concept, development, final outcome, reflection.
- Let each project have its own visual tone when the subject requires it, but keep the global typography, grid, spacing, navigation, footer behavior, and interaction pacing consistent.
- Avoid overdone marketing-page patterns: oversized decorative titles, gradient-heavy backgrounds, arbitrary slanted blocks, cyberpunk tech effects, glassmorphism, particle backgrounds, and animation that does not improve understanding.
- Avoid engineering-report pages made only of text, diagrams, and parameters. Technical evidence should be readable and visually composed.

## Codebase Rules

- This is a Next.js App Router project using Tailwind CSS through `src/app/globals.css`.
- Before editing Next.js behavior, read the relevant local Next.js docs under `node_modules/next/dist/docs/`.
- Prefer server components for static pages. Use client components only for interaction state, scroll state, or browser APIs.
- Keep changes scoped. Do not refactor unrelated pages or shared structures unless the requested change needs it.
- Existing project pages use local helper components such as `Figure` and `SectionHeader`. Extract shared components only when reuse is real and reduces duplication.
- Public assets live under `public/`. Project assets should use stable, descriptive paths such as `public/assets/projects/<project>/...`.
- Temporary PDF crops should keep clear names, usually ending in `-temp`, so high-resolution source assets can replace them later without changing page structure.
- Use `next/image` for project imagery where practical. Provide meaningful `alt`, appropriate `sizes`, stable aspect ratios, and lazy loading unless the image is above the fold.
- Do not add new animation libraries unless there is a strong project reason and the existing implementation cannot support it.

## Visual And Accessibility Checks

After code changes that affect UI, run:

- `npm run lint`
- `npm run build`

Also verify the changed route in the browser at desktop and mobile widths:

- no horizontal overflow
- no overlapping text or controls
- images load and are framed correctly
- navigation links work
- interactive controls work by keyboard or click/tap
- hover-only information is visible or converted on mobile
- console has no relevant errors

For documentation-only changes, a code build is optional, but check git status and make sure no unintended files were edited.
