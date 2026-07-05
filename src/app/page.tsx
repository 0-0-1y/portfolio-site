import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Floralance",
    type: "Modular Domestic Furniture",
    status: "Full case study",
    image: "/floralance/hero-render.jpg",
    href: "/projects/floralance",
    summary:
      "A modular furniture system for hybrid homes, emotional comfort, and cross-generational posture support.",
    methods: ["Research", "Benchmarking", "Ergonomics", "CMF", "Rendering"],
  },
  {
    title: "Kordilu",
    type: "Process and Ritual",
    status: "Full case study",
    image: "/project-thumbs/kordilu.jpg",
    href: "/projects/kordilu",
    summary:
      "A redesign of a Dakar ritual process, moving from cultural friction to product form and prototype.",
    methods: ["Context", "Process", "Ergonomics", "Prototype"],
  },
  {
    title: "Otium",
    type: "Sedentary Home",
    status: "Full case study",
    image: "/project-thumbs/otium.jpg",
    href: "/projects/otium",
    summary:
      "A product system that turns passive rest into small opportunities for movement in the home.",
    methods: ["Scenario", "Product System", "Movement", "Rendering"],
  },
  {
    title: "SymMoBot",
    type: "Speculative Plant Care",
    status: "Full case study",
    image: "/assets/projects/symmobot/symmobot-hero-tech-temp.jpg",
    href: "/projects/symmobot",
    summary:
      "A speculative communication system for diseased plants, urban futures, and multi-species care.",
    methods: ["Observation", "Multispecies", "Storyworld", "System"],
  },
];

const capabilities = [
  {
    title: "Research",
    text: "Context reading, user needs, competitive maps, and scenario analysis.",
  },
  {
    title: "Translation",
    text: "Turning insights into design requirements, principles, and product systems.",
  },
  {
    title: "Making",
    text: "Sketches, prototypes, materials, structural details, and ergonomic reasoning.",
  },
  {
    title: "Expression",
    text: "Clear visual storytelling, renderings, and restrained portfolio layouts.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#fbfbf8] text-[#24231f]">
      <nav className="fixed inset-x-0 top-0 z-30 border-b border-[#24231f]/10 bg-[#fbfbf8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link className="text-sm font-semibold tracking-tight" href="/">
            Yu He
          </Link>
          <div className="flex gap-5 text-xs uppercase tracking-[0.18em] text-[#24231f]/62 sm:gap-7">
            <a className="transition hover:text-[#6f2019]" href="#works">
              Works
            </a>
            <a className="transition hover:text-[#6f2019]" href="#capability">
              Ability
            </a>
            <a className="transition hover:text-[#6f2019]" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header className="min-h-[88svh] border-b border-[#24231f]/10">
        <div className="mx-auto grid min-h-[88svh] max-w-7xl content-end gap-12 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f2019]">
              Yu He / Product Design Portfolio 2026
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.03] tracking-tight sm:text-7xl lg:text-8xl">
              Product design for bodies, rituals, and shared domestic systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#24231f]/68 sm:text-lg">
              A selected portfolio focused on research clarity, material
              thinking, human posture, and design systems that can be understood
              quickly by graduate reviewers.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#24231f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6f2019]"
                href="#works"
              >
                View Selected Works
              </a>
              <a
                className="rounded-full border border-[#24231f]/18 bg-white px-5 py-3 text-sm font-semibold text-[#24231f] transition hover:border-[#6f2019] hover:text-[#6f2019]"
                href="#capability"
              >
                Capability Map
              </a>
            </div>
          </div>

          <div className="self-end border-t border-[#24231f]/14 lg:border-l lg:border-t-0 lg:pl-10">
            <p className="pt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#24231f]/48 lg:pt-0">
              Portfolio Index
            </p>
            <div className="mt-5 divide-y divide-[#24231f]/10 border-y border-[#24231f]/10">
              {projects.map((project, index) => {
                const row = (
                  <div className="grid grid-cols-[44px_1fr] gap-4 py-4 transition md:grid-cols-[56px_1fr]">
                    <span className="text-sm font-semibold text-[#24231f]/38">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h2 className="text-xl font-semibold tracking-tight">
                          {project.title}
                        </h2>
                        <span className="text-xs uppercase tracking-[0.18em] text-[#24231f]/42">
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#24231f]/62">
                        {project.type}
                      </p>
                    </div>
                  </div>
                );

                return project.href.startsWith("/projects") ? (
                  <Link
                    className="block hover:text-[#6f2019]"
                    href={project.href}
                    key={project.title}
                  >
                    {row}
                  </Link>
                ) : (
                  <div key={project.title}>{row}</div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="works"
      >
        <div className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
              Selected Works
            </p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-tight">
              Four projects, one portfolio logic.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#24231f]/68">
            The website keeps a shared evaluation structure under the surface:
            context, research, insight, concept, development, final outcome, and
            reflection. Each project can still use chapter names that fit its
            own subject.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const isLive = project.href.startsWith("/projects");
            const content = (
              <article
                className={`group h-full overflow-hidden rounded-lg border border-[#24231f]/12 bg-white transition duration-300 ${
                  isLive ? "hover:-translate-y-1 hover:border-[#6f2019]/50" : ""
                }`}
              >
                <div className="relative aspect-[16/10] bg-[#f0f1ed]">
                  <Image
                    alt={`${project.title} project preview`}
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={project.image}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f2019]">
                      {project.type}
                    </p>
                    <span className="rounded-full border border-[#24231f]/12 px-3 py-1 text-xs text-[#24231f]/56">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-[#24231f]/66">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span
                        className="rounded-full bg-[#f0f1ed] px-3 py-1 text-xs text-[#24231f]/62"
                        key={method}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );

            return isLive ? (
              <Link href={project.href} key={project.title}>
                {content}
              </Link>
            ) : (
              <div key={project.title}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f0f1ed] py-20 lg:py-28" id="capability">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
                Capability Map
              </p>
              <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-tight">
                The work should make design training visible.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#24231f]/68">
              The site is organized so reviewers can see not only the final
              render, but the chain of inquiry and decision-making behind it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                className="rounded-lg border border-[#24231f]/10 bg-[#fbfbf8] p-6"
                key={item.title}
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#24231f]/66">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
              About
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Yu He
            </h2>
          </div>
          <div className="max-w-2xl text-base leading-8 text-[#24231f]/68">
            <p>
              Product design portfolio prepared for graduate application review.
              The current site starts with Floralance as the flagship case
              study, with Kordilu, Otium, and SymMoBot built through
              project-specific chapter names.
            </p>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-[#24231f]/10 px-5 py-10 sm:px-8"
        id="contact"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#24231f]/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Yu He / Product Design Portfolio</p>
          <p>Email, CV, and PDF portfolio links can be added here.</p>
        </div>
      </footer>
    </main>
  );
}
