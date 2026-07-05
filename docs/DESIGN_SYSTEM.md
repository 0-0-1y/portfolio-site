# Design System

This document records the design system currently implemented in the codebase. It is based on `src/app/globals.css`, `src/app/page.tsx`, `src/app/projects/floralance/page.tsx`, `src/app/projects/symmobot/page.tsx`, and the two current client components.

## Technology

- Framework: Next.js App Router.
- Styling: Tailwind CSS v4 through `src/app/globals.css`.
- Font loading: no `next/font` package is used at the moment.
- Components: project pages are mostly static server components, with small client components for interaction.

## Fonts

Defined in `src/app/globals.css`:

- Sans: `Arial, Helvetica, sans-serif`
- Mono: `"SFMono-Regular", Consolas, "Liberation Mono", monospace`

Global body font is Arial/Helvetica. The site currently relies on system typography rather than branded custom fonts.

## Global Color Base

Global CSS variables:

- Background: `#fbfbf8`
- Foreground: `#24231f`
- Selection background: `#6f2019`
- Selection text: `#ffffff`

Homepage palette:

- Main background: `#fbfbf8`
- Main text: `#24231f`
- Secondary band: `#f0f1ed`
- Card background: `#ffffff`
- Primary warm accent: `#6f2019`

Floralance page palette:

- Page background: `#f7f3ed`
- Main text: `#281a14`
- Accent: `#6f2019`
- Section band: `#ede8e1`
- Light evidence band: `#fbfaf7`
- Dark final section: `#281a14`
- Dark section text: `#f7f3ed`
- Soft blue and red tones appear inside the interaction components, but the page remains warm, quiet, and domestic.

SymMoBot page palette:

- Real-world sections: `#fbfbf8`, `#f0f1ed`, `#f7f7f2`, `#ffffff`
- Text: `#24231f`
- Project accent: `#5d48d8`
- Speculative accent: `#9ab7ff`
- Dark speculative sections: `#07090d`, `#0b0e16`, `#10131d`
- Dark section text: `#f4f7ff` and white with opacity.

## Layout

Common containers:

- Main max width: `max-w-7xl`
- Horizontal padding: `px-5 sm:px-8`
- Section vertical rhythm: usually `py-20 lg:py-28`
- Footer vertical rhythm: `py-10`
- Hero height: homepage `min-h-[88svh]`; project pages generally `min-h-[86svh]`
- Primary desktop section header grid: `lg:grid-cols-[0.38fr_0.62fr]`

The current layout style favors full-width section bands with constrained inner content. Cards are used for repeated items, evidence blocks, tools, personas, and summaries. Page sections themselves are not styled as floating cards.

## Navigation

Homepage:

- Fixed top nav.
- Brand on the left.
- Anchor links on the right: Works, Ability, Contact.
- Background uses `#fbfbf8/90` with backdrop blur.

Project pages:

- Sticky top nav.
- Brand links back to `/`.
- Desktop anchor links expose only major sections.
- SymMoBot also has a project-specific section navigator:
  - desktop: fixed right rail visible at `2xl`
  - mobile: bottom progress pill showing current section count and label

## Typography Scale

Observed patterns:

- Nav brand: `text-sm font-semibold tracking-tight`
- Nav links: `text-xs uppercase tracking-[0.18em]`
- Eyebrows: `text-xs font-semibold uppercase tracking-[0.22em]` to `tracking-[0.28em]`
- Homepage hero H1: `text-5xl sm:text-7xl lg:text-8xl`, `leading-[1.03]`, `tracking-tight`
- Floralance hero H1: `text-5xl sm:text-7xl lg:text-8xl`, `leading-[1.02]`, `tracking-tight`
- SymMoBot hero H1: `text-6xl sm:text-8xl lg:text-9xl`, `leading-[0.95]`, `tracking-tight`
- Section titles: usually `text-3xl sm:text-4xl`, sometimes `text-4xl sm:text-5xl` for stronger opening sections
- Large reflection statements: `text-5xl sm:text-7xl` or `text-4xl sm:text-5xl`
- Body copy: `text-base leading-8` with 60 to 70 percent text opacity
- Small evidence copy: `text-sm leading-6` or `text-sm leading-7`
- Captions: `text-xs leading-5`

Headings are mostly `font-semibold` with `tracking-tight`. Body text is deliberately restrained and readable.

## Cards And Radius

Common card treatment:

- Radius: `rounded-lg`
- Borders: thin borders using project text color at 10 to 15 percent opacity
- Light cards: `bg-white`, `bg-[#fbfbf8]`, `bg-[#f7f3ed]`, or `bg-[#f7f7f2]`
- Dark cards: `bg-white/[0.04]` with `border-white/10`

Avoid nested decorative card structures. Use cards for repeated or bounded content, not for every page section.

## Images

Common implementation:

- `next/image` with `fill`
- Parent wrappers define stable aspect ratios such as:
  - `aspect-[16/10]`
  - `aspect-[16/9]`
  - `aspect-[16/8]`
  - `aspect-[16/11]`
  - `aspect-[4/5]`
  - `aspect-[4/3]`
  - `aspect-square`
- Fit is selected per asset:
  - `object-cover` for atmospheric photos and render previews
  - `object-contain` for PDF crops, diagrams, personas, system maps, and evidence pages
- Hero or first-viewport images use eager loading where present.
- Captions are used to identify PDF crops and temporary evidence.

## Interaction And Motion

Current motion is lightweight:

- Link hover color changes.
- Project cards hover with slight translate and image scale.
- Floralance interactions use state changes for module selection, scenario composition, and color modes.
- SymMoBot section nav tracks scroll position and updates current section.
- No external animation library is currently used.

Motion principles:

- Use transitions, opacity, scale, simple state changes, and scroll progress only when they clarify the project.
- Do not add heavy WebGL, particle systems, cursor effects, or infinite decorative animation for the current portfolio style.

## Responsive Behavior

Observed breakpoints:

- Mobile first single-column layout.
- `sm` increases horizontal padding and text sizes.
- `md` introduces two-column cards and shows fuller navigation in some places.
- `lg` introduces primary editorial grids and desktop section rhythm.
- `2xl` is used by SymMoBot for the fixed side section navigator.

Mobile requirements:

- Project content should read naturally top to bottom.
- Do not rely on hover for essential information.
- Diagrams must either simplify, stack, or be paired with readable HTML text.
- Avoid horizontal overflow from wide diagrams, timelines, cards, or controls.

## Current Project Tones

Floralance:

- Quiet, warm, domestic, rational, emotionally soft.
- Uses warm off-white backgrounds, brown-red accents, soft neutral surfaces, and restrained final renders.
- Interactions demonstrate modularity and emotional color change.

SymMoBot:

- Scientific, speculative, ecological, quiet, precise, slightly mysterious.
- Visual arc moves from real-world observation to relational mapping, dark speculative future, system logic, and reflective closure.
- Tech visuals are deliberately delayed until after observation and relationship sections.

Homepage:

- Neutral, portfolio-wide, and intentionally not dominated by a single project.
- No project hero image in the first viewport.
- Four projects are presented with equal portfolio logic, while live pages are linked.
