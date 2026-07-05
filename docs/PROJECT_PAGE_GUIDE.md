# Project Page Guide

This guide records the project page method developed for this portfolio site. Use it when creating or revising project detail pages.

## Core Case Study Logic

Every project should help a graduate reviewer answer seven questions:

1. Why was this worth designing?
2. What was researched?
3. What insight was found?
4. How did the insight become a design direction?
5. How was the concept developed into a credible proposal?
6. What is the final design?
7. What was learned, and what could be improved?

Do not force every page to literally use the labels "Research", "Concept", "Development", and "Final Design". The underlying logic should be consistent, but the visible section names should fit the project.

## Site-Wide Rules

Keep these consistent across all project pages:

- Global navigation behavior.
- Route structure under `src/app/projects/<project>/page.tsx`.
- Max-width rhythm using `max-w-7xl`.
- Horizontal padding using `px-5 sm:px-8`.
- Section rhythm using roughly `py-20 lg:py-28`.
- Typography hierarchy from `docs/DESIGN_SYSTEM.md`.
- Rounded card radius around `rounded-lg`.
- Thin low-opacity borders.
- Footer behavior.
- Accessible HTML text for key arguments.
- Meaningful image alt text.
- Stable image aspect ratios.
- Mobile-first responsive reading order.
- Restrained motion and interaction pacing.

## What Can Change Per Project

These should adapt to the project content:

- Project palette and accent color.
- Section titles and order labels.
- Balance of image, text, diagram, and interaction.
- Whether the page is warmer, quieter, more technical, more speculative, or more material-driven.
- Whether a section uses light interaction, a timeline, a relationship map, a product system, a service loop, or a static evidence layout.
- Whether the final section is light, dark, reflective, commercial, or product-focused.

Project-specific variation is good when it makes the work easier to understand. It should not break the site's global structure.

## Page Building Process

1. Read the source portfolio carefully.
   - Look at page images, not just text.
   - Identify research diagrams, sketches, prototypes, structures, material studies, personas, service maps, renders, and reflection content.

2. Extract the actual design chain.
   - Do not copy the PDF order blindly.
   - Identify the strongest reviewer logic: problem, evidence, insight, design move, development proof, final proposal.

3. Choose surface chapter names.
   - Make them project-specific.
   - Avoid generic template labels unless they are truly the clearest option.

4. Rebuild key content as web-native layout.
   - Rewrite small PDF text into HTML.
   - Recreate important diagrams where possible.
   - Use PDF crops as temporary visual evidence, not as the only source of meaning.

5. Add interaction only where it clarifies.
   - Examples from existing pages:
     - Floralance module selection explains height and posture.
     - Floralance scenario switching explains modular composition.
     - SymMoBot section progress helps navigate a long speculative case.
   - Avoid decorative effects that do not carry information.

6. Design the mobile version deliberately.
   - Stack content in the right narrative order.
   - Make hover information visible.
   - Simplify diagrams into readable text blocks when necessary.

7. Verify and document asset gaps.
   - Name temporary assets clearly.
   - Record which images should be replaced later.

## Existing Project Lessons

Floralance:

- Start with the hybrid home problem, not with final product beauty.
- Treat benchmarking as a discovered opportunity, not a static comparison image.
- The key insight is a landscape of postures, not a chair variation.
- Flower inspiration must be framed as system logic: nest, arrange, flip.
- Keep material, structure, load, and ergonomics evidence visible because they make the project more professional.
- Final renders should arrive after the research and development chain is clear.

SymMoBot:

- Start with the real diseased Pyracantha in Milan.
- Delay nanobot and DNA visuals until after observation and multispecies relationships are established.
- Treat plant, bee, and human as actors in a relationship, not as normal UX persona cards.
- Build the transition from real world to speculative world gradually.
- Present the technology as care and coordination, not control.
- End with the ethical shift: plants signal, bees choose, humans respond.

Homepage:

- Keep all four projects balanced.
- Do not make the first viewport look like a Floralance landing page.
- The homepage should introduce the designer's portfolio logic and capability, not advertise one project too strongly.

## Common Problems To Avoid

- Using a full PDF page screenshot as a major web section.
- Letting critical text stay trapped inside small image text.
- Opening with final renders before the project problem is understood.
- Making every project page use the same visible chapter labels.
- Overusing trendy visual devices: huge decorative typography, arbitrary gradients, slanted blocks, glassmorphism, strong neon, full-screen particles.
- Making speculative or technical projects look like game sites, AI startup landing pages, or cyberpunk product launches.
- Making professional evidence unreadable through tiny diagrams.
- Creating hover-only interactions that fail on mobile.
- Introducing a new shared abstraction before at least two pages really need it.
- Changing completed project pages while building a new one unless the change is explicitly requested or fixes a clear bug.

## Future Page Checklist

Before coding:

- Read `AGENTS.md`.
- Read `docs/DESIGN_SYSTEM.md`.
- Read `docs/PROJECT_STATE.md`.
- Read this guide.
- Inspect the current route and component patterns.
- Inspect the relevant source assets.

During implementation:

- Keep route and asset paths predictable.
- Use temporary assets with explicit `-temp` names when needed.
- Rebuild text and diagrams in HTML where possible.
- Keep section names project-specific.
- Preserve global spacing, type, nav, and footer behavior.

Before handoff:

- Run `npm run lint`.
- Run `npm run build`.
- Check desktop and mobile browser layouts.
- Check image loading and alt text.
- List temporary assets and replacement needs.
