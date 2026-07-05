# Project State

This document summarizes the current portfolio site state so a new session can continue without the original chat history.

## Current Routes

- `/`
  - Portfolio homepage.
  - Neutral first viewport with no single-project background image.
  - Main sections: top navigation, hero, portfolio index, Selected Works, Capability Map, About, footer/contact.
  - Floralance and SymMoBot are linked as full case studies.
  - Kordilu and Otium are visible as coming-next portfolio items.

- `/projects/floralance`
  - Project 01 case study.
  - Complete first version.
  - Uses PDF-derived crops in `public/floralance/`.
  - Uses interactive client components from `src/components/FloralanceInteractions.tsx`.

- `/projects/symmobot`
  - Project 02 case study.
  - Complete first version.
  - Uses PDF-derived temporary crops in `public/assets/projects/symmobot/`.
  - Uses section navigation from `src/components/SymMoBotProjectNav.tsx`.

- `/projects/project-one`
  - Legacy placeholder route.
  - Not linked from the homepage.
  - Keep in mind before cleanup or routing decisions.

## Project 01: Floralance

Implementation status: complete first case-study page.

Current narrative structure:

- Hero question about hybrid homes
- Hybrid Home
- Finding the Void
- Users & Needs
- From Research to Requirements
- The Modular System
- Product Abacus
- Domestic Landscape
- Color as Emotional Interface
- Making the System Credible
- Commercial Context
- Final Product
- Reflection

Current strengths:

- The page foregrounds research logic before final renders.
- Benchmarking is rebuilt as a readable opportunity map instead of a static PDF page.
- User needs become a posture landscape and a five-height system.
- Flower inspiration is framed as system behavior: nest, arrange, flip.
- Interactions explain module hierarchy, scenario composition, and color modes.
- Engineering evidence is preserved through material detail, structural validation, and ergonomics sections.

Current assets:

- Folder: `public/floralance/`
- Includes hero, context, posture, product abacus, scenario, CMF, material, structural, ergonomic, commercial, and final render images.
- Most assets are PDF crops or portfolio exports and should be replaced by original high-resolution source files when available.

Known follow-up needs:

- Replace low-resolution PDF crops with original renders, CAD screenshots, diagrams, and photos.
- Strengthen the engineering chapter with original CAD, FEA, 3M Dual Lock detail, CNC/tolerance evidence, and documented load assumptions for 900 N and 1000 N validation.
- Consider adding prototype/process photos if available.

## Project 02: SymMoBot

Implementation status: complete first case-study page.

Current narrative structure:

- Hero
- Speculation was not the beginning. Reality was.
- 01 / A Diseased Plant in Milan
- 02 / Three Species, One Relationship
- 03 / Milan, 2070
- 04 / A Communication System
- 05 / A Day of Shared Care
- 06 / The System Behind the Experience
- 07 / Not Tools, but Co-authors of Care

Current strengths:

- The page starts from real observation, not nanobot spectacle.
- Multispecies personas are rebuilt as plant, bee, and human actors rather than consumer cards.
- Relationship shifts explain the move from conflict, risk, and delay toward signal, awareness, and coordination.
- The visual tone changes from documentary to speculative and then back to reflective.
- The system map is rewritten as readable HTML steps, with the PDF map preserved as reference.
- Desktop and mobile section navigation is implemented.

Current assets:

- Folder: `public/assets/projects/symmobot/`
- Naming convention uses `symmobot-...-temp.jpg` for replaceable PDF crops.
- Important files include:
  - `symmobot-hero-tech-temp.jpg`
  - `symmobot-pyracantha-temp.jpg`
  - `symmobot-field-plant-temp.jpg`
  - `symmobot-disease-wilting-temp.jpg`
  - `symmobot-disease-necrotic-temp.jpg`
  - `symmobot-disease-soil-temp.jpg`
  - `symmobot-persona-plant-temp.jpg`
  - `symmobot-persona-bee-temp.jpg`
  - `symmobot-persona-human-temp.jpg`
  - `symmobot-future-milan-temp.jpg`
  - `symmobot-nanobot-core-temp.jpg`
  - `symmobot-dna-green-temp.jpg`
  - `symmobot-visual-mode-temp.jpg`
  - `symmobot-ar-interface-temp.jpg`
  - `symmobot-storyboard-01-temp.jpg` through `symmobot-storyboard-06-temp.jpg`
  - `symmobot-system-map-temp.jpg`
  - `symmobot-bee-eye-temp.jpg`

Known follow-up needs:

- Replace all temporary PDF crops with high-resolution original assets.
- Add original plant observation photos if available.
- Replace persona crops with separately exported persona visuals or composed assets.
- Replace storyboard frames with original storyboard exports.
- Replace system map and AR interface crops with readable high-resolution assets.
- Add more precise technical explanation only if supported by source material.

## Coming Projects

Kordilu:

- Homepage status: Coming next.
- Current homepage summary: redesign of a Dakar ritual process, moving from cultural friction to product form and prototype.
- Current thumbnail: `public/project-thumbs/kordilu.jpg`.
- No project detail page yet.

Otium:

- Homepage status: Coming next.
- Current homepage summary: product system turning passive rest into small opportunities for movement at home.
- Current thumbnail: `public/project-thumbs/otium.jpg`.
- No project detail page yet.

## Shared Or Important Components

- `src/app/layout.tsx`
  - Global metadata and body shell.
  - Imports `src/app/globals.css`.

- `src/app/globals.css`
  - Tailwind import.
  - Global colors, font variables, scroll behavior, selection color.

- `src/components/FloralanceInteractions.tsx`
  - Client-only interactions for Floralance:
    - `ModuleExplorer`
    - `ScenarioComposer`
    - `EmotionalInterface`
  - Treat as Floralance-specific unless reuse becomes clearly valuable.

- `src/components/SymMoBotProjectNav.tsx`
  - Client-only active section navigation for SymMoBot.
  - Desktop right rail and mobile bottom progress.
  - Could become a reusable project nav later, but currently contains SymMoBot naming and styling assumptions.

- Local helper components in project pages:
  - `Figure`
  - `SectionHeader`
  - These are duplicated locally. Do not extract unless a later task needs a shared project page kit.

## Known Issues

- `README.md` is still the default create-next-app README and does not describe this portfolio.
- `/projects/project-one` is a legacy placeholder route.
- Contact/footer links are placeholders: email, CV, and PDF portfolio links are not configured.
- Many images are temporary PDF crops and should not be treated as final-quality application assets.
- Kordilu and Otium only exist as homepage entries.
- Some SymMoBot temporary assets are reserved for future use and are not displayed on the current page.
- No automated visual regression tests exist.

## Recent Verification

Recent work on the site has passed:

- `npm run lint`
- `npm run build`

Browser checks have been performed for the homepage and SymMoBot at desktop and mobile widths during development:

- no horizontal overflow observed
- images loaded
- console showed no relevant errors
- main navigation and section navigation behaved as expected

Re-run checks after any code or visual changes.

## Recommended Next Steps

1. Build Kordilu as the next project detail page using the existing project page method.
2. Build Otium after Kordilu.
3. Replace temporary PDF crops with high-resolution source assets.
4. Add real contact, CV, and PDF portfolio links to the footer.
5. Decide whether to remove, redirect, or repurpose `/projects/project-one`.
6. Consider writing a project data layer only if more pages create meaningful duplication.
7. Update `README.md` when the user wants public project documentation.
