import Image from "next/image";
import Link from "next/link";
import {
  EmotionalInterface,
  ModuleExplorer,
  ScenarioComposer,
} from "@/components/FloralanceInteractions";

const projectFacts = [
  ["Project", "Modular domestic furniture system"],
  ["Context", "Laboratorio di Sintesi Finale 2025/2026"],
  ["Institution", "Politecnico di Milano x Cassina"],
  ["Focus", "Emotional comfort, modular ritual, domestic landscape"],
];

const homeModes = ["Work", "Rest", "Play", "Care"];

const benchmarkItems = [
  {
    label: "Cassina Maralunga",
    x: "34%",
    y: "25%",
    tone: "bg-[#c8c8c8]",
  },
  {
    label: "Knoll Barcelona Chair",
    x: "24%",
    y: "42%",
    tone: "bg-[#9f9f9f]",
  },
  {
    label: "IKEA Frosta",
    x: "28%",
    y: "68%",
    tone: "bg-[#d7d7d7]",
  },
  {
    label: "Medical Lift Chair",
    x: "58%",
    y: "76%",
    tone: "bg-[#bfbfbf]",
  },
  {
    label: "USM Haller",
    x: "76%",
    y: "47%",
    tone: "bg-[#d0d0d0]",
  },
  {
    label: "Treatment Bed",
    x: "72%",
    y: "67%",
    tone: "bg-[#a8a8a8]",
  },
];

const users = [
  {
    name: "The Child",
    need: "A home read as a 3D landscape for exploration.",
    goal: "Irregular surfaces and diverse textures that stimulate physical development.",
  },
  {
    name: "The Adult",
    need: "A body caught between smart working and domestic tasks.",
    goal: "A transitional interface that marks shifts between focus, rest, and family life.",
  },
  {
    name: "The Senior",
    need: "Physical stability and sensory comfort without medical stigma.",
    goal: "Non-clinical aids that support psychophysical health inside the home.",
  },
];

const requirements = [
  {
    title: "Spatial Resilience",
    text: "Compress and expand according to domestic density.",
  },
  {
    title: "Cross-Generational Ergonomics",
    text: "Support children, adults, and seniors through multiple heights.",
  },
  {
    title: "Non-Clinical Support",
    text: "Assist bodies without importing the aesthetics of medical devices.",
  },
  {
    title: "Emotional Interaction",
    text: "Use color, touch, and arrangement as everyday self-regulation.",
  },
];

const principles = [
  {
    title: "Nest",
    text: "Five modules compress into one compact system when the home needs space back.",
  },
  {
    title: "Arrange",
    text: "Modules compose different domestic landscapes rather than serving one fixed typology.",
  },
  {
    title: "Flip",
    text: "Reversible cushions shift tactile, chromatic, and functional states.",
  },
];

function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[16/10]",
  fit = "object-cover",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  fit?: "object-cover" | "object-contain";
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden rounded-lg border border-[#281a14]/10 bg-white ${aspect}`}
      >
        <Image
          alt={alt}
          className={fit}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          src={src}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs leading-5 text-[#281a14]/52">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  tone = "light",
  children,
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
}) {
  const isDark = tone === "dark";

  return (
    <div className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
      <div>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            isDark ? "text-[#d8a8a1]" : "text-[#6f2019]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl ${
            isDark ? "text-[#f7f3ed]" : "text-[#281a14]"
          }`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`max-w-2xl text-base leading-8 ${
          isDark ? "text-[#f7f3ed]/72" : "text-[#281a14]/68"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function FloralancePage() {
  return (
    <main className="bg-[#f7f3ed] text-[#281a14]">
      <nav className="sticky top-0 z-30 border-b border-[#281a14]/10 bg-[#f7f3ed]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            className="text-sm font-semibold tracking-tight transition hover:text-[#6f2019]"
            href="/"
          >
            Yu He
          </Link>
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-[#281a14]/58 md:flex">
            <a className="transition hover:text-[#6f2019]" href="#context">
              Context
            </a>
            <a className="transition hover:text-[#6f2019]" href="#system">
              System
            </a>
            <a className="transition hover:text-[#6f2019]" href="#making">
              Making
            </a>
            <a className="transition hover:text-[#6f2019]" href="#final">
              Final
            </a>
          </div>
        </div>
      </nav>

      <header className="relative min-h-[86svh] overflow-hidden">
        <Image
          alt="A domestic interior that frames the hybrid home context for Floralance."
          className="object-cover"
          fill
          loading="eager"
          sizes="100vw"
          src="/floralance/hybrid-home.jpg"
        />
        <div className="absolute inset-0 bg-[#f7f3ed]/78" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f2019]">
            Floralance / Product Design
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#281a14] sm:text-7xl lg:text-8xl">
            What happens when one small home has to support work, rest, play,
            and emotional recovery?
          </h1>
          <div className="mt-10 grid gap-5 border-t border-[#281a14]/16 pt-6 text-sm text-[#281a14]/68 md:grid-cols-4">
            {projectFacts.map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-[0.18em] text-[#281a14]/42">
                  {label}
                </p>
                <p className="mt-2 leading-6">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28"
        id="context"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
            Hybrid Home
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Home is no longer a single-purpose space.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#281a14]/68">
            Floralance starts from a domestic shift: compact homes now carry
            work, leisure, care, and emotional life at the same time. The
            design opportunity is not another chair, but furniture that can
            adapt spatially, physically, and emotionally.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {homeModes.map((mode) => (
              <div
                className="rounded-lg border border-[#281a14]/10 bg-white/78 p-5"
                key={mode}
              >
                <p className="text-2xl font-semibold tracking-tight">{mode}</p>
                <div className="mt-5 h-1 rounded-full bg-[#6f2019]" />
              </div>
            ))}
          </div>
          <Figure
            alt="Original PDF context image showing a domestic living space."
            aspect="aspect-[16/8]"
            caption="Source crop from the PDF context page. The web page uses it as atmosphere, then rebuilds the research argument in native layout."
            src="/floralance/hybrid-home.jpg"
          />
        </div>
      </section>

      <section className="bg-[#ede8e1] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Finding the Void"
            title="The market already has icons, utilities, and medical supports. It does not have systemic care."
          >
            <p>
              The benchmarking page is rebuilt here as a readable opportunity
              map. Static luxury furniture, generic utilities, dynamic medical
              supports, and modular storage each solve part of the problem, but
              none combine domestic aesthetics, bodily adaptation, and emotional
              care.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.45fr]">
            <div className="relative h-[520px] rounded-lg border border-[#281a14]/12 bg-[#fbfaf7] p-8">
              <div className="absolute inset-x-12 top-1/2 h-px bg-[#6f2019]" />
              <div className="absolute inset-y-12 left-1/2 w-px bg-[#6f2019]" />
              <span className="absolute left-7 top-1/2 -translate-y-8 text-sm font-semibold text-[#281a14]/62">
                Static Utility
              </span>
              <span className="absolute right-7 top-1/2 -translate-y-8 text-right text-sm font-semibold text-[#281a14]/62">
                Dynamic
                <br />
                Performance
              </span>
              <span className="absolute left-1/2 top-7 -translate-x-1/2 text-sm font-semibold text-[#281a14]/62">
                Luxury / Borghese
              </span>
              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-sm font-semibold text-[#281a14]/62">
                Clinical / Generic
              </span>
              {benchmarkItems.map((item) => (
                <div
                  className="absolute max-w-[130px] -translate-x-1/2 -translate-y-1/2 text-center"
                  key={item.label}
                  style={{ left: item.x, top: item.y }}
                >
                  <div
                    className={`mx-auto h-12 w-16 rounded-lg border border-[#281a14]/8 ${item.tone}`}
                  />
                  <p className="mt-2 text-xs leading-4 text-[#281a14]/62">
                    {item.label}
                  </p>
                </div>
              ))}
              <div className="absolute right-[8%] top-[16%] rounded-lg border border-dashed border-[#d21d2b] bg-white px-6 py-4 text-center text-sm font-semibold text-[#d21d2b]">
                The Systemic
                <br />
                Care Void
              </div>
              <div className="absolute right-[16%] top-[31%] h-4 w-4 rounded-full bg-[#6f2019] shadow-[0_0_0_12px_rgba(111,32,25,0.12)]" />
            </div>

            <div className="rounded-lg border border-[#281a14]/12 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
                Insight
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                A missing category, not a missing product.
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#281a14]/68">
                Floralance enters the highlighted void as a system-product:
                emotionally softer than medical furniture, more adaptive than
                iconic lounge furniture, and more bodily aware than modular
                storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Users & Needs"
          title="Different users do not need one furniture typology, but a landscape of postures."
        >
          <p>
            The project reframes the user group as a sequence of bodily
            conditions: floor play, general sitting, perching, assisted
            standing, and leaning support. This is where Floralance becomes a
            furniture system rather than a stylized object.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {users.map((user) => (
            <article
              className="rounded-lg border border-[#281a14]/10 bg-white p-6"
              key={user.name}
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {user.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#281a14]/66">
                {user.need}
              </p>
              <p className="mt-5 border-t border-[#281a14]/10 pt-5 text-sm leading-6 text-[#6f2019]">
                {user.goal}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Figure
            alt="Posture spectrum from low-gravity interaction to leaning support."
            aspect="aspect-[16/6]"
            caption="Original posture spectrum from the PDF, used as the visual evidence behind the module height hierarchy."
            fit="object-contain"
            src="/floralance/posture-landscape.jpg"
          />
          <div className="rounded-lg border border-[#281a14]/10 bg-[#fbfaf7] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
              Height logic
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["25 cm", "45 cm", "60 cm", "80 cm", "90 cm"].map((height) => (
                <span
                  className="rounded-full border border-[#281a14]/12 bg-white px-4 py-2 text-sm"
                  key={height}
                >
                  {height}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#281a14]/68">
              One chair cannot support every body, every age, and every
              domestic moment. Floralance translates this insight into five
              heights, each linked to a different posture and level of support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="From Research to Requirements"
            title="The research becomes four design requirements."
          >
            <p>
              This chapter keeps the professional evidence visible: the project
              is not driven by a flower shape, but by spatial, ergonomic,
              non-clinical, and emotional requirements.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {requirements.map((item) => (
              <article
                className="rounded-lg border border-[#281a14]/10 bg-[#f7f3ed] p-6"
                key={item.title}
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#281a14]/66">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="system"
      >
        <SectionHeader
          eyebrow="The Modular System"
          title="Nature was not used as a shape. It was used as a system."
        >
          <p>
            The strongest concept move is to translate floral logic into
            product behavior: petals overlap, modules nest; flowers are
            arranged, modules compose space; petals open and close, surfaces
            flip.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {principles.map((principle) => (
              <article
                className="rounded-lg border border-[#281a14]/10 bg-white p-6"
                key={principle.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
                  {principle.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#281a14]/68">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
          <Figure
            alt="System sketches showing nesting, arrangement, and flipping cushions."
            aspect="aspect-[16/10]"
            caption="PDF system sketches are preserved as development evidence while the page foregrounds the system principles."
            fit="object-contain"
            src="/floralance/system-principles.jpg"
          />
        </div>

        <div className="mt-16">
          <SectionHeader
            eyebrow="Product Abacus"
            title="Five heights turn one concept into a usable domestic system."
          >
            <p>
              The interactive abacus below rewrites the five-module PDF
              diagram into a readable product system. Each module is described
              by height, posture, and domestic role rather than by form alone.
            </p>
          </SectionHeader>
          <div className="mt-10">
            <ModuleExplorer />
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Figure
            alt="Original PDF product abacus showing modules from A to E."
            aspect="aspect-[16/10]"
            caption="Original Product Abacus from the PDF."
            fit="object-contain"
            src="/floralance/product-abacus.jpg"
          />
          <Figure
            alt="Scenario sketches showing work, rest, social, focus, and play configurations."
            aspect="aspect-[16/10]"
            caption="Original scenario sketches showing how modules compose work, rest, play, focus, and social arrangements."
            fit="object-contain"
            src="/floralance/scenario-sketches.jpg"
          />
        </div>
      </section>

      <section className="bg-[#ede8e1] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Domestic Landscape"
            title="The same modules behave differently as the home changes."
          >
            <p>
              The page uses light interaction to make the modular logic visible:
              switching scenarios rearranges the same elements instead of
              introducing new furniture each time.
            </p>
          </SectionHeader>
          <div className="mt-10">
            <ScenarioComposer />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Color as Emotional Interface"
          title="Color is not decoration. It is a way to tune the emotional atmosphere of the room."
        >
          <p>
            The reversible cushions make color an interface: warm tones invite
            energy and social attention, cool tones reduce stimulation, and
            neutral tones let the system blend into daily life.
          </p>
        </SectionHeader>
        <div className="mt-10">
          <EmotionalInterface />
        </div>
        <div className="mt-8">
          <Figure
            alt="PDF color interface page with warm, cool, and neutral render variations."
            aspect="aspect-[16/8]"
            caption="PDF render variations used as source evidence for the interactive color interface above."
            fit="object-contain"
            src="/floralance/color-interface.jpg"
          />
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-20 lg:py-28" id="making">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Making the System Credible"
            title="The project begins to answer how the system could be produced, fixed, loaded, and used by different bodies."
          >
            <p>
              This is where Floralance becomes stronger than a visual concept.
              The PDF includes material selection, hidden cushion fixation,
              structural validation, and ergonomic reasoning. The web page keeps
              these as evidence, while marking them as areas that deserve higher
              resolution source material before final submission.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-lg border border-[#281a14]/10 bg-[#f7f3ed] p-5">
              <Figure
                alt="Material and 3M Dual Lock system detail from the PDF."
                aspect="aspect-[4/3]"
                fit="object-contain"
                src="/floralance/material-detail.jpg"
              />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                Material and detail
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#281a14]/66">
                Recycled carbon-fiber SMC shell logic and a hidden 3M Dual Lock
                cushion system make the cushion stable, removable, repairable,
                and aligned with circular design principles.
              </p>
            </article>

            <article className="rounded-lg border border-[#281a14]/10 bg-[#f7f3ed] p-5">
              <Figure
                alt="Structural validation diagrams for Floralance modules."
                aspect="aspect-[4/3]"
                fit="object-contain"
                src="/floralance/structural-validation.jpg"
              />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                Structural validation
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#281a14]/66">
                The PDF tests vertical load cases around 900 N for Module D and
                1000 N for Module E, plus tipping logic and continuous shell
                geometry.
              </p>
            </article>

            <article className="rounded-lg border border-[#281a14]/10 bg-[#f7f3ed] p-5">
              <Figure
                alt="Ergonomic analysis and sit-to-stand diagram."
                aspect="aspect-[4/3]"
                fit="object-contain"
                src="/floralance/ergonomics.jpg"
              />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                Body and ergonomics
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#281a14]/66">
                Heights from 25 cm to 90 cm support low activities,
                productivity zones, and assisted standing without relying on a
                medical product language.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Commercial Context"
          title="The system can be understood as a configurable domestic product, not only as a school render."
        >
          <p>
            The Cassina web simulation helps reviewers imagine product
            configuration, pricing, description, and technical storytelling. On
            the final website, this could become a short commerce-context
            subsection rather than a large visual claim.
          </p>
        </SectionHeader>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Figure
            alt="Cassina configurator mockup for Floralance."
            aspect="aspect-[16/9]"
            fit="object-contain"
            src="/floralance/cassina-configurator.jpg"
          />
          <Figure
            alt="Cassina product story mockup for Floralance."
            aspect="aspect-[16/9]"
            fit="object-contain"
            src="/floralance/cassina-story.jpg"
          />
        </div>
      </section>

      <section className="bg-[#281a14] py-20 text-[#f7f3ed] lg:py-28" id="final">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Final Product"
            tone="dark"
            title="Floralance becomes a quiet domestic landscape for support, arrangement, and emotional recovery."
          >
            <p>
              The final renders should arrive after the argument is clear: the
              product is not just visually soft, but built from a research chain
              about hybrid homes, postures, modularity, color, material, and
              bodily support.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Figure
              alt="Floralance final living room rendering."
              aspect="aspect-[16/11]"
              src="/floralance/final-living-room.jpg"
            />
            <div className="grid gap-5">
              <Figure
                alt="Floralance final soft light studio rendering."
                aspect="aspect-[4/3]"
                src="/floralance/final-soft-light.jpg"
              />
              <Figure
                alt="Floralance neutral studio rendering."
                aspect="aspect-[4/3]"
                src="/floralance/final-studio.jpg"
              />
            </div>
          </div>
          <div className="mt-5">
            <Figure
              alt="Full final render collage from the PDF."
              aspect="aspect-[16/5]"
              fit="object-contain"
              src="/floralance/final-collage.jpg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
              Reflection
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Strong as a system, ready for deeper validation.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-[#281a14]/10 bg-white p-6">
              <h3 className="text-xl font-semibold tracking-tight">
                What works
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#281a14]/68">
                Floralance is strongest when it refuses the single-chair answer
                and instead builds a landscape of postures, rituals, colors,
                and support levels.
              </p>
            </article>
            <article className="rounded-lg border border-[#281a14]/10 bg-white p-6">
              <h3 className="text-xl font-semibold tracking-tight">
                What to improve
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#281a14]/68">
                Before submission, the engineering chapter should be backed by
                original CAD, clearer FEA screenshots, load assumptions, and
                prototype test evidence.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
