import Image from "next/image";
import Link from "next/link";
import {
  MovementScenarioSwitch,
  OtiumProjectNav,
  ProductSystemReveal,
  StructureInterface,
  type OtiumNavItem,
} from "@/components/OtiumInteractions";

const assetBase = "/assets/projects/otium";

const navItems: OtiumNavItem[] = [
  { id: "rest", label: "Context" },
  { id: "opportunity", label: "Opportunity" },
  { id: "concept", label: "Active Support" },
  { id: "interface", label: "Interface" },
  { id: "system", label: "Product" },
  { id: "body", label: "Movement" },
  { id: "final", label: "Final" },
];

const projectFacts = [
  ["Project", "A sofa that activates everyday movement"],
  ["Context", "2024 / 2025 Workshop"],
  ["Institution", "Politecnico di Milano x Kave Home"],
  ["Professor", "Annalisa Dominoni"],
];

const keywords = [
  "Movement Integration",
  "Domestic Fitness",
  "Multifunctional Furniture",
];

const opportunityFlow = [
  {
    title: "Rest",
    text: "The home is organized around comfort, recovery, and sitting.",
  },
  {
    title: "Sedentary Routine",
    text: "Daily movement often moves elsewhere, into gyms or dedicated exercise spaces.",
  },
  {
    title: "Potential for Activation",
    text: "The living room offers small openings between moments of rest.",
  },
];

const touchpoints = [
  { label: "Edge", top: "61%", left: "19%" },
  { label: "Back", top: "34%", left: "55%" },
  { label: "Side", top: "56%", left: "77%" },
  { label: "Frame", top: "70%", left: "54%" },
  { label: "Space around the sofa", top: "84%", left: "30%" },
];

const dimensions = [
  ["Width", "240 cm"],
  ["Depth", "110 cm"],
  ["Overall height", "88 cm"],
  ["Seat height", "45 cm"],
];

const finalQualities = [
  "soft upholstered volumes",
  "domestic proportions",
  "restrained visual language",
  "visible tubular support",
];

// TEMP_PDF_ASSET: all Otium images referenced here are temporary crops from
// portfolio (2).pdf pages 17-20 and are named for future source replacement.
const assets = {
  hero: `${assetBase}/otium-hero-temp.jpg`,
  heroDetail: `${assetBase}/otium-hero-detail-temp.jpg`,
  contextHome: `${assetBase}/otium-context-home-temp.jpg`,
  contextMovement: `${assetBase}/otium-context-movement-temp.jpg`,
  conceptConfigurations: `${assetBase}/otium-concept-configurations-temp.jpg`,
  finalFront: `${assetBase}/otium-final-front-temp.jpg`,
  productSystem: `${assetBase}/otium-product-system-temp.jpg`,
  renderYellow: `${assetBase}/otium-render-yellow-temp.jpg`,
  renderGreen: `${assetBase}/otium-render-green-temp.jpg`,
  renderRed: `${assetBase}/otium-render-red-temp.jpg`,
};

function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[16/10]",
  fit = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  fit?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-white ${aspect}`}
      >
        <Image
          alt={alt}
          className={fit}
          fill
          loading={loading}
          sizes={sizes}
          src={src}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs leading-5 text-[#24231f]/52">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
      <div>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-[#d9c7a4]" : "text-[#123f35]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl ${
            dark ? "text-[#fbfaf6]" : "text-[#24231f]"
          }`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`max-w-2xl text-base leading-8 ${
          dark ? "text-[#fbfaf6]/72" : "text-[#24231f]/68"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function OtiumPage() {
  return (
    <main className="bg-[#fbfaf6] text-[#24231f]">
      <OtiumProjectNav items={navItems} />

      <nav className="sticky top-0 z-30 border-b border-[#24231f]/10 bg-[#fbfaf6]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            className="text-sm font-semibold tracking-tight transition hover:text-[#123f35]"
            href="/"
          >
            Yu He
          </Link>
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-[#24231f]/58 md:flex">
            <a className="transition hover:text-[#123f35]" href="#rest">
              Context
            </a>
            <a className="transition hover:text-[#123f35]" href="#interface">
              Interface
            </a>
            <a className="transition hover:text-[#123f35]" href="#body">
              Movement
            </a>
            <a className="transition hover:text-[#123f35]" href="#final">
              Final
            </a>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden border-b border-[#24231f]/10">
        <div className="mx-auto grid min-h-[86svh] max-w-7xl content-end gap-10 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#123f35]">
              Otium / Product Design
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              A Sofa that Activates Everyday Movement
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-[#24231f]/68">
              Otium explores how everyday movement can be integrated into
              domestic life without adding a separate fitness object to the
              living room.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  className="rounded-full border border-[#24231f]/12 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#24231f]/58"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="self-end">
            <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-[#e8e4da]">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  alt="Temporary PDF crop of Otium's upholstered sofa volume and exposed tubular steel structure."
                  className="object-cover object-center"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={assets.hero}
                />
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#24231f]/52">
              TEMP_PDF_ASSET. Hero crop from the current portfolio PDF cover
              page, focused on soft volume and continuous line.
            </p>
          </div>

          <div className="border-t border-[#24231f]/12 pt-5 lg:col-span-2">
            <div className="grid gap-5 text-sm text-[#24231f]/64 md:grid-cols-4">
              {projectFacts.map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#24231f]/38">
                    {label}
                  </p>
                  <p className="mt-2 leading-6">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-[#24231f]/10 bg-[#f0eee7] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A sofa is usually designed to help the body stop.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#24231f]/68">
            Otium asks whether the same object could also help the body move,
            without leaving domestic life behind.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="rest"
      >
        <SectionHeader
          eyebrow="01 / A Home Designed for Rest"
          title="The problem is not rest. The opportunity is what happens between moments of rest."
        >
          <p>
            Contemporary homes are designed primarily for comfort, sitting, and
            recovery. Physical activity is often separated from this everyday
            environment and assigned to gyms, studios, or dedicated exercise
            spaces. Otium starts from a quieter question: how can movement
            become part of the furniture already there?
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            <Figure
              alt="Temporary PDF crop showing people resting on a sofa in a domestic setting."
              aspect="aspect-[16/7]"
              caption="TEMP_PDF_ASSET. Domestic rest image from the Otium context page."
              src={assets.contextHome}
            />
            <Figure
              alt="Temporary PDF crop showing light movement taking place around living room furniture."
              aspect="aspect-[16/7]"
              caption="TEMP_PDF_ASSET. Existing context imagery showing movement already entering the home."
              src={assets.contextMovement}
            />
          </div>

          <div className="grid content-center gap-4">
            {opportunityFlow.map((item, index) => (
              <article
                className="rounded-lg border border-[#24231f]/10 bg-white p-6"
                key={item.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#123f35]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#24231f]/68">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-14 max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
          The question was not how fitness equipment could enter the living
          room. It was how movement could become part of the sofa itself.
        </p>
      </section>

      <section
        className="border-y border-[#24231f]/10 bg-[#f4f1ea] py-20 lg:py-28"
        id="opportunity"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="02 / The Living Room as an Opportunity"
            title="The living room is already one of the most flexible spaces in everyday domestic life."
          >
            <p>
              The sofa sits at the center of that flexibility. In this first
              version, the page treats the sofa edges, back, side, frame, and
              surrounding space as design opportunities, not as claims from a
              completed user study.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-white">
              <div className="relative aspect-[16/9]">
                <Image
                  alt="Temporary PDF crop of the Otium sofa in a quiet living room setting."
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  src={assets.finalFront}
                />
              </div>
              {touchpoints.map((point) => (
                <span
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#123f35]/15 bg-[#fbfaf6]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#123f35] shadow-[0_10px_24px_rgba(36,35,31,0.08)] backdrop-blur"
                  key={point.label}
                  style={{ top: point.top, left: point.left }}
                >
                  {point.label}
                </span>
              ))}
            </div>

            <div className="grid content-center gap-5">
              <div className="rounded-lg border border-[#24231f]/10 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#123f35]">
                  Design opportunity
                </p>
                <p className="mt-5 text-3xl font-semibold leading-tight tracking-tight">
                  Passive furniture could shift toward active support.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#24231f]/68">
                  Otium does not add a second object to the room. It
                  reconsiders which part of the sofa the body can interact
                  with.
                </p>
              </div>

              <div className="rounded-lg border border-[#24231f]/10 bg-[#fbfaf6] p-6">
                <p className="text-sm leading-7 text-[#24231f]/68">
                  The sofa still belongs in the home. The shift happens through
                  the structure: a line that is normally hidden becomes visible,
                  reachable, and usable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="concept"
      >
        <SectionHeader
          eyebrow="03 / From Passive Rest to Active Support"
          title="Otium is not fitness equipment placed beside a sofa."
        >
          <p>
            It is a sofa that still looks and feels domestic, but invites a
            different relationship with the body. Form, structure, and use are
            integrated into one system instead of being treated as separate
            layers.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            <div className="rounded-lg border border-[#123f35]/18 bg-[#123f35] p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">
                Concept reveal
              </p>
              <p className="mt-5 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                From passive rest to active support.
              </p>
            </div>
            <Figure
              alt="Temporary PDF crop of Otium early sofa configuration drawings."
              aspect="aspect-[16/10]"
              caption="TEMP_PDF_ASSET. Existing configuration drawings, used here as concept development evidence rather than a full iteration study."
              fit="object-contain p-4"
              src={assets.conceptConfigurations}
            />
          </div>

          <div className="grid content-center gap-5">
            {[
              "A sofa that still belongs in the living room.",
              "A visible structure that changes what the body can do.",
              "A product system where softness and support work together.",
            ].map((line) => (
              <p
                className="border-b border-[#24231f]/10 pb-5 text-3xl font-semibold leading-tight tracking-tight"
                key={line}
              >
                {line}
              </p>
            ))}
            <p className="text-base leading-8 text-[#24231f]/68">
              The decisive move was to expose the structure. Once the support
              line comes to the surface, it can become an interface between
              body and object.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-[#24231f] py-20 text-[#fbfaf6] lg:py-28"
        id="interface"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            dark
            eyebrow="04 / When Structure Becomes Interface"
            title="A sofa usually hides its structure. Otium brings it to the surface."
          >
            <p>
              This is the core design move of the project. The exposed tubular
              steel structure is not presented as decoration or as a separate
              gym attachment. It becomes a reachable line between the soft
              volume and the moving body.
            </p>
          </SectionHeader>

          <div className="mt-12">
            <StructureInterface />
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#24231f]/10 bg-[#f4f1ea] py-20 lg:py-28"
        id="system"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="05 / Building the Product System"
            title="Softness and structure are not two products. They form one system."
          >
            <p>
              The current PDF identifies the sofa as a layered product system:
              upholstered cushion, upholstered seat, wooden internal frame,
              tubular steel structure, and rubber feet. The page keeps those
              layers readable without inventing unverified structural testing.
            </p>
          </SectionHeader>

          <div className="mt-12">
            <ProductSystemReveal />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Figure
              alt="Temporary PDF crop of the Otium product system with dimensions."
              aspect="aspect-[4/5]"
              caption="TEMP_PDF_ASSET. Product system and dimension reference from the current PDF."
              fit="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 38vw"
              src={assets.productSystem}
            />

            <div className="grid content-center gap-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {dimensions.map(([label, value]) => (
                  <div
                    className="rounded-lg border border-[#24231f]/10 bg-white p-6"
                    key={label}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#123f35]">
                      {label}
                    </p>
                    <p className="mt-4 text-4xl font-semibold tracking-tight">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-7 text-[#24231f]/62">
                These dimensions are taken from the current PDF. They are
                presented as product proportions, not as evidence of complete
                ergonomic validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="body"
      >
        <SectionHeader
          eyebrow="06 / Body x Furniture"
          title="One structure. Multiple body relationships."
        >
          <p>
            The PDF shows six use scenarios: Push-up, Dip, Stretching, Plank,
            Set-up, and Core Exercise. This section presents them as body-object
            relationships, not as a workout plan or a medically validated
            training system.
          </p>
        </SectionHeader>

        <div className="mt-12">
          <MovementScenarioSwitch />
        </div>

        <p className="mt-12 max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
          The integrated structure enables a range of simple movement scenarios,
          while the sofa remains a recognizable domestic object.
        </p>
      </section>

      <section
        className="bg-[#f0eee7] py-20 lg:py-28"
        id="final"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="07 / Still a Sofa"
            title="Movement does not replace comfort."
          >
            <p>
              After the structure and movement scenarios, the final question is
              whether the object still belongs in the home. Otium keeps soft
              volumes, domestic proportions, and a restrained furniture
              language while adding another layer of use through the tubular
              frame.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <Figure
              alt="Temporary PDF crop of the green Otium sofa in a warm living room."
              aspect="aspect-[4/5]"
              caption="TEMP_PDF_ASSET. Deep green domestic rendering."
              fit="object-cover object-bottom"
              src={assets.renderGreen}
            />
            <div className="grid gap-5">
              <Figure
                alt="Temporary PDF crop of the burgundy Otium sofa in a Kave Home domestic setting."
                aspect="aspect-[16/7]"
                caption="TEMP_PDF_ASSET. Burgundy Kave Home rendering."
                src={assets.renderRed}
              />
              <Figure
                alt="Temporary PDF crop of the warm ochre Otium sofa in a domestic interior."
                aspect="aspect-[16/9]"
                caption="TEMP_PDF_ASSET. Warm ochre domestic rendering."
                src={assets.renderYellow}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {finalQualities.map((quality) => (
              <div
                className="rounded-lg border border-[#24231f]/10 bg-[#fbfaf6] p-5"
                key={quality}
              >
                <p className="text-sm font-semibold leading-6 text-[#24231f]/72">
                  {quality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123f35] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            A sofa for rest.
            <br />
            A structure for movement.
            <br />
            One object.
          </p>
          <p className="mt-9 max-w-2xl text-base leading-8 text-white/70">
            Otium does not ask people to leave domestic life in order to move.
            It asks whether movement can already exist inside the objects we
            live with every day.
          </p>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/16 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/58">Next project</p>
            <Link
              className="text-3xl font-semibold tracking-tight transition hover:text-[#d9c7a4]"
              href="/projects/symmobot"
            >
              SymMoBot
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#24231f]/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#24231f]/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Otium / Product Design Portfolio</p>
          <div className="flex gap-5">
            <Link className="transition hover:text-[#123f35]" href="/">
              Home
            </Link>
            <Link
              className="transition hover:text-[#123f35]"
              href="/projects/floralance"
            >
              Floralance
            </Link>
            <Link
              className="transition hover:text-[#123f35]"
              href="/projects/symmobot"
            >
              SymMoBot
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
