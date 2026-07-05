import Image from "next/image";
import Link from "next/link";
import {
  SymMoBotProjectNav,
  type SymMoBotNavItem,
} from "@/components/SymMoBotProjectNav";

const assetBase = "/assets/projects/symmobot";

const navItems: SymMoBotNavItem[] = [
  { id: "observation", label: "Observation" },
  { id: "relationships", label: "Relationships" },
  { id: "future", label: "Future" },
  { id: "communication", label: "System" },
  { id: "shared-care", label: "Experience" },
  { id: "network", label: "Network" },
  { id: "reflection", label: "Reflection" },
];

const projectFacts = [
  ["Year", "2024 / 2025"],
  ["Course", "Designing in a Multispecies World"],
  ["Institution", "Politecnico di Milano"],
  ["Professor", "Francesco Vergani"],
];

const keywords = [
  "Symbiosis",
  "More-Than-Human Design",
  "Multispecies Interaction",
];

const symptoms = [
  {
    label: "Wilting leaves",
    image: `${assetBase}/symmobot-disease-wilting-temp.jpg`,
    alt: "Close-up crop of wilting Pyracantha leaves.",
  },
  {
    label: "Necrotic branches",
    image: `${assetBase}/symmobot-disease-necrotic-temp.jpg`,
    alt: "Close-up crop of necrotic Pyracantha branches.",
  },
  {
    label: "Soil pollution",
    image: `${assetBase}/symmobot-disease-soil-temp.jpg`,
    alt: "Close-up crop showing polluted soil around the plant.",
  },
];

const pathologySteps = [
  "Bacteria",
  "Enters the plant",
  "Spreads through vascular tissue",
  "Visible damage appears late",
];

const personas = [
  {
    name: "Andrea Coccini",
    species: "Pyracantha Coccinea",
    type: "Plant",
    role: "Filters air and shelters pollinators.",
    image: `${assetBase}/symmobot-persona-plant-temp.jpg`,
    alt: "Pyracantha persona visual crop from the portfolio PDF.",
    traits: ["Resilient", "Guarded", "Vulnerable", "Essential"],
    needs: [
      "Early disease detection",
      "Gentler pruning practices",
      "Safe pollination without Erwinia spread",
    ],
  },
  {
    name: "Beatrice Fiori",
    species: "Apis Apidae",
    type: "Bee",
    role: "Pollinates urban flora and collects nectar.",
    image: `${assetBase}/symmobot-persona-bee-temp.jpg`,
    alt: "Honeybee persona visual crop from the portfolio PDF.",
    traits: ["Focused", "Efficient", "Scent-driven", "Unintentional carrier"],
    needs: [
      "Environmental signals to avoid infection",
      "Supportive flora for safe foraging",
      "Health-conscious urban design",
    ],
  },
  {
    name: "Simone Beni",
    species: "Municipal gardener",
    type: "Human",
    role: "Prunes and maintains urban vegetation.",
    image: `${assetBase}/symmobot-persona-human-temp.jpg`,
    alt: "Human municipal gardener persona visual crop from the portfolio PDF.",
    traits: ["Experienced", "Caring", "Overworked", "Reactive"],
    needs: [
      "Non-invasive early detection",
      "Visual cues for infection",
      "Coordination tools for safe multispecies care",
    ],
  },
];

const relationshipShifts = [
  {
    pair: "Plant - Bee",
    asIs: "Bees pollinate the plant, but may also transmit harmful bacteria.",
    asCould:
      "Signals help pollinators perceive infected flowers and continue safer foraging.",
  },
  {
    pair: "Plant - Human",
    asIs: "Visible symptoms often appear before human care begins.",
    asCould:
      "Earlier detection allows gentler intervention before damage spreads.",
  },
  {
    pair: "Bee - Human",
    asIs: "Maintenance activity may disturb or harm active pollinators.",
    asCould:
      "Shared timing reduces accidental harm while preserving pollination.",
  },
];

const futureStatements = [
  {
    actor: "Plants",
    text: "can express.",
  },
  {
    actor: "Bees",
    text: "can perceive.",
  },
  {
    actor: "Humans",
    text: "can respond.",
  },
];

const forms = [
  {
    host: "Plant",
    species: "Pyracantha",
    form: "Sensing network",
    function:
      "Detect infection and trigger biofluorescent signals before damage becomes fully visible.",
    image: `${assetBase}/symmobot-dna-green-temp.jpg`,
    alt: "DNA-inspired green nanotechnology visual used as temporary plant form imagery.",
  },
  {
    host: "Bee",
    species: "Honeybee",
    form: "Visual filter",
    function:
      "Perceive infection signals, avoid infected flowers, and continue safe pollination.",
    image: `${assetBase}/symmobot-visual-mode-temp.jpg`,
    alt: "Temporary visual mode crop representing the bee filter form.",
  },
  {
    host: "Human",
    species: "Gardener",
    form: "Corneal AR interface",
    function:
      "See infection heatmaps, bee presence, and AI-assisted care suggestions.",
    image: `${assetBase}/symmobot-ar-interface-temp.jpg`,
    alt: "Temporary AR interface crop from the system map.",
  },
];

const dayEvents = [
  {
    time: "06:30",
    title: "Morning application",
    image: `${assetBase}/symmobot-storyboard-01-temp.jpg`,
    alt: "Storyboard frame showing the gardener applying SymMoBot hydrogel.",
    text: "Simone applies SymMoBot hydrogel into the soil and hive. The same system enters different hosts.",
  },
  {
    time: "08:00",
    title: "The system forms",
    image: `${assetBase}/symmobot-storyboard-02-temp.jpg`,
    alt: "Storyboard frame showing sensing networks forming in the plant.",
    text: "In the plant it becomes a sensing network. In the bee it becomes a visual filter. In the human it becomes a corneal interface.",
  },
  {
    time: "10:40",
    title: "Infection detected",
    image: `${assetBase}/symmobot-storyboard-03-temp.jpg`,
    alt: "Storyboard frame showing blue fluorescent signals on infected leaves.",
    text: "The infection crosses a threshold. The Pyracantha emits a blue biofluorescent signal. The plant signals first.",
  },
  {
    time: "11:20",
    title: "Beatrice changes path",
    image: `${assetBase}/symmobot-storyboard-04-temp.jpg`,
    alt: "Storyboard frame showing bees avoiding signaled flowers.",
    text: "Beatrice perceives the signal and avoids infected flowers. She is not controlled; she receives a clearer environmental cue.",
  },
  {
    time: "14:00",
    title: "Simone responds",
    image: `${assetBase}/symmobot-storyboard-05-temp.jpg`,
    alt: "Storyboard frame showing the gardener's AR heatmap and pruning suggestion.",
    text: "The gardener sees an infection heatmap, bee presence, and a care suggestion. The system updates as he works.",
  },
  {
    time: "Sunset",
    title: "Recovery begins",
    image: `${assetBase}/symmobot-storyboard-06-temp.jpg`,
    alt: "Storyboard frame showing a day summary and recovery log.",
    text: "Beatrice returns with clean nectar. Andrea begins to recover. Simone reviews the care log quietly.",
  },
];

const loopSteps = [
  "Gardener applies hydrogel",
  "Nanobots enter species",
  "Plant forms sensing network",
  "Infection is detected",
  "Plant emits signal",
  "Bee perceives signal",
  "Bee avoids infected flowers",
  "Human receives heatmap and suggestions",
  "Care is provided",
  "System receives feedback",
];

function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[16/10]",
  fit = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  fit?: "object-cover" | "object-contain";
  sizes?: string;
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-white ${aspect}`}
      >
        <Image alt={alt} className={fit} fill sizes={sizes} src={src} />
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
            dark ? "text-[#9ab7ff]" : "text-[#5d48d8]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl ${
            dark ? "text-[#f4f7ff]" : "text-[#24231f]"
          }`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`max-w-2xl text-base leading-8 ${
          dark ? "text-[#f4f7ff]/68" : "text-[#24231f]/68"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SignalText({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-[#24231f]/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d48d8]">
        {label}
      </p>
      <p className="mt-3 text-sm leading-6 text-[#24231f]/68">{value}</p>
    </div>
  );
}

export default function SymMoBotPage() {
  return (
    <main className="bg-[#fbfbf8] text-[#24231f]">
      <SymMoBotProjectNav items={navItems} />

      <nav className="sticky top-0 z-30 border-b border-[#24231f]/10 bg-[#fbfbf8]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            className="text-sm font-semibold tracking-tight transition hover:text-[#5d48d8]"
            href="/"
          >
            Yu He
          </Link>
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-[#24231f]/58 md:flex">
            <a className="transition hover:text-[#5d48d8]" href="#observation">
              Observation
            </a>
            <a className="transition hover:text-[#5d48d8]" href="#future">
              Future
            </a>
            <a className="transition hover:text-[#5d48d8]" href="#communication">
              System
            </a>
            <a className="transition hover:text-[#5d48d8]" href="#reflection">
              Reflection
            </a>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden border-b border-[#24231f]/10">
        <div className="mx-auto grid min-h-[86svh] max-w-7xl content-end gap-10 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5d48d8]">
              SymMoBot / More-Than-Human Design
            </p>
            <h1 className="mt-5 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
              SymMoBot
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#24231f]/70">
              A cross-species communication network built on DNA
              nanotechnology for the future Milan.
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
            <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-[#07090d] p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(93,72,216,0.24),transparent_34%),radial-gradient(circle_at_74%_62%,rgba(64,186,255,0.2),transparent_30%)]" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                <Image
                  alt="Temporary DNA and nanobot visual crop from the SymMoBot PDF cover."
                  className="object-cover opacity-70"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={`${assetBase}/symmobot-hero-tech-temp.jpg`}
                />
              </div>
              <p className="relative mt-4 text-sm leading-6 text-white/62">
                A future preview, not the beginning of the story.
              </p>
            </div>
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

      <section className="border-b border-[#24231f]/10 bg-[#f0f1ed] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Speculation was not the beginning.
            <br />
            Reality was.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#24231f]/68">
            It began with one diseased plant in Milan&apos;s Bovisa district.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="observation"
      >
        <SectionHeader
          eyebrow="01 / A Diseased Plant in Milan"
          title="This project began with one diseased Pyracantha Coccinea."
        >
          <p>
            In the course Designing in a Multispecies World, the research began
            from a real plant in Bovisa. The design does not start from a
            nanobot. It starts from field observation: stress, disease, and the
            delayed timing of care.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <figure>
            <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-white">
              <div className="relative aspect-[4/5]">
                <Image
                  alt="Temporary crop of a diseased Pyracantha Coccinea being inspected."
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 48vw"
                  src={`${assetBase}/symmobot-pyracantha-temp.jpg`}
                />
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#24231f]/58 backdrop-blur">
                Bovisa, Milan
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-2 sm:grid-cols-3">
                {symptoms.map((symptom) => (
                  <div
                    className="rounded-md bg-[#fbfbf8]/92 p-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#24231f]/66 backdrop-blur"
                    key={symptom.label}
                  >
                    {symptom.label}
                  </div>
                ))}
              </div>
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-[#24231f]/52">
              Temporary PDF crop. This should be replaced by a high-resolution
              plant observation photograph.
            </figcaption>
          </figure>

          <div className="grid content-start gap-5">
            <div className="rounded-lg border border-[#24231f]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5d48d8]">
                Desk research
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Care currently begins after symptoms become visible.
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#24231f]/68">
                Pyracantha Coccinea is an evergreen shrub known for thorny
                structure, seasonal berries, and pollinator-attracting blooms.
                Fire blight, caused by Erwinia amylovora, disrupts the
                plant&apos;s vascular system and spreads rapidly through natural
                openings, weather conditions, and insect vectors.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {symptoms.map((symptom) => (
                <Figure
                  alt={symptom.alt}
                  aspect="aspect-square"
                  caption={symptom.label}
                  fit="object-cover"
                  key={symptom.label}
                  sizes="(max-width: 768px) 33vw, 16vw"
                  src={symptom.image}
                />
              ))}
            </div>

            <div className="rounded-lg border border-[#24231f]/10 bg-[#f7f7f2] p-5">
              <div className="grid gap-3 md:grid-cols-4">
                {pathologySteps.map((step, index) => (
                  <div
                    className="rounded-md border border-[#24231f]/10 bg-white p-4"
                    key={step}
                  >
                    <p className="text-xs font-semibold text-[#5d48d8]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm leading-5 text-[#24231f]/70">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Figure
            alt="Temporary field observation image of the Pyracantha shrub."
            aspect="aspect-[16/9]"
            caption="Field observation crop from the PDF."
            fit="object-cover"
            src={`${assetBase}/symmobot-field-plant-temp.jpg`}
          />
          <div className="rounded-lg border border-[#24231f]/10 bg-white p-8">
            <p className="text-3xl font-semibold tracking-tight">
              The plant was not alone.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#24231f]/68">
              A single disease problem connected the plant, bees, a municipal
              gardener, bacteria, and the urban environment. That shift turns
              the project from product design into relationship design.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Plant", "Bee", "Human", "Bacteria", "Urban environment"].map(
                (item) => (
                  <span
                    className="rounded-full bg-[#f0f1ed] px-4 py-2 text-sm text-[#24231f]/68"
                    key={item}
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#24231f]/10 bg-[#f7f7f2] py-20 lg:py-28"
        id="relationships"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="02 / Three Species, One Relationship"
            title="This was never a single-user problem."
          >
            <p>
              The project reframes the user group as a multispecies
              relationship. Andrea, Beatrice, and Simone are not consumers of a
              product. They are actors in a shared system of risk, perception,
              timing, and care.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {personas.map((persona) => (
              <article
                className="overflow-hidden rounded-lg border border-[#24231f]/10 bg-white"
                key={persona.name}
              >
                <div className="relative aspect-[16/11] bg-[#07090d]">
                  <Image
                    alt={persona.alt}
                    className="object-contain p-6"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={persona.image}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d48d8]">
                    {persona.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {persona.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#24231f]/52">
                    {persona.species}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-[#24231f]/68">
                    {persona.role}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {persona.traits.map((trait) => (
                      <span
                        className="rounded-full bg-[#f0f1ed] px-3 py-1 text-xs text-[#24231f]/62"
                        key={trait}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-2 border-t border-[#24231f]/10 pt-5 text-sm leading-6 text-[#24231f]/70">
                    {persona.needs.map((need) => (
                      <li key={need}>{need}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-[#24231f]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5d48d8]">
                Relationship map
              </p>
              <div className="relative mt-8 aspect-square rounded-lg bg-[#fbfbf8] p-6">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                >
                  <line
                    stroke="#b8b2dd"
                    strokeDasharray="3 3"
                    strokeWidth="0.8"
                    x1="50"
                    x2="18"
                    y1="22"
                    y2="72"
                  />
                  <line
                    stroke="#b8b2dd"
                    strokeDasharray="3 3"
                    strokeWidth="0.8"
                    x1="50"
                    x2="82"
                    y1="22"
                    y2="72"
                  />
                  <line
                    stroke="#b8b2dd"
                    strokeDasharray="3 3"
                    strokeWidth="0.8"
                    x1="18"
                    x2="82"
                    y1="72"
                    y2="72"
                  />
                </svg>
                <div className="absolute left-1/2 top-[12%] -translate-x-1/2 rounded-full bg-[#5d48d8] px-5 py-3 text-sm font-semibold text-white">
                  Plant
                </div>
                <div className="absolute bottom-[16%] left-[8%] rounded-full bg-[#24231f] px-5 py-3 text-sm font-semibold text-white">
                  Bee
                </div>
                <div className="absolute bottom-[16%] right-[8%] rounded-full bg-[#24231f] px-5 py-3 text-sm font-semibold text-white">
                  Human
                </div>
                <p className="absolute left-1/2 top-1/2 max-w-[230px] -translate-x-1/2 -translate-y-1/2 text-center text-sm leading-6 text-[#24231f]/62">
                  conflict, risk and delay become signal, awareness and
                  coordination.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {relationshipShifts.map((shift) => (
                <article
                  className="grid gap-3 rounded-lg border border-[#24231f]/10 bg-white p-5 md:grid-cols-[0.35fr_0.65fr]"
                  key={shift.pair}
                >
                  <p className="text-lg font-semibold tracking-tight">
                    {shift.pair}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <SignalText label="As is" value={shift.asIs} />
                    <SignalText label="As it could be" value={shift.asCould} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-14 max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
            The design opportunity was not to control these actors. It was to
            help them perceive one another.
          </p>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#07090d] py-20 text-white lg:py-28"
        id="future"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(93,72,216,0.28),transparent_30%),radial-gradient(circle_at_82%_44%,rgba(55,187,255,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            dark
            eyebrow="03 / Milan, 2070"
            title="Humans are no longer managers. They become legacy caretakers."
          >
            <p>
              By 2070, Milan has transformed into a multi-species city-state.
              Pyracantha gains the right to remain and express. Bees transmit
              plant health data. A shared communication system links living
              organisms through detection, alert, and care.
            </p>
          </SectionHeader>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Figure
              alt="Temporary future Milan scenario crop from the PDF."
              aspect="aspect-[16/10]"
              caption="Temporary PDF crop of the future scenario block."
              fit="object-cover"
              src={`${assetBase}/symmobot-future-milan-temp.jpg`}
            />
            <div className="grid content-center gap-4">
              {futureStatements.map((statement) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                  key={statement.actor}
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-[#9ab7ff]">
                    {statement.actor}
                  </p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {statement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-16 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            What could connect them without taking away their autonomy?
          </p>
        </div>
      </section>

      <section
        className="bg-[#0b0e16] py-20 text-white lg:py-28"
        id="communication"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            dark
            eyebrow="04 / A Communication System"
            title="One silent system changes form according to the species."
          >
            <p>
              SymMoBot is a DNA-folded nanobot system suspended in
              phase-adaptive hydrogel. It enables silent communication among
              Pyracantha Coccinea, honeybees, and human gardeners without
              reducing them to one interface.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Figure
                alt="Temporary nanobot core crop from the PDF cover."
                aspect="aspect-[16/11]"
                caption="Temporary nanobot core crop. Replace with original nanobot render later."
                fit="object-cover"
                src={`${assetBase}/symmobot-nanobot-core-temp.jpg`}
              />
              <div className="mt-6 grid grid-cols-4 items-center gap-2 text-center text-xs uppercase tracking-[0.16em] text-white/52">
                <span>Core</span>
                <span>Network</span>
                <span>Filter</span>
                <span>Interface</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    className="h-1 rounded-full bg-[#5d48d8]"
                    key={item}
                    style={{ opacity: 0.35 + item * 0.18 }}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {forms.map((form) => (
                <article
                  className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[150px_1fr]"
                  key={form.host}
                >
                  <div className="relative aspect-square overflow-hidden rounded-md bg-[#07090d]">
                    <Image
                      alt={form.alt}
                      className="object-cover"
                      fill
                      sizes="150px"
                      src={form.image}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ab7ff]">
                      {form.host} / {form.species}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {form.form}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/66">
                      {form.function}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#10131d] py-20 text-white lg:py-28"
        id="shared-care"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            dark
            eyebrow="05 / A Day of Shared Care"
            title="A day in the system is a sequence of perception, not command."
          >
            <p>
              The storyboard becomes a quiet timeline. Each actor receives
              enough information to respond: the plant signals, the bee changes
              path, and the gardener intervenes with awareness of both disease
              and pollinator presence.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5">
            {dayEvents.map((event, index) => (
              <article
                className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[0.22fr_0.34fr_0.44fr]"
                key={event.time}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9ab7ff]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">
                    {event.time}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#07090d]">
                  <Image
                    alt={event.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                    src={event.image}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {event.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-14 max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
            No command was given. Each species perceived. Each species
            responded.
          </p>
        </div>
      </section>

      <section
        className="bg-[#fbfbf8] py-20 lg:py-28"
        id="network"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="06 / The System Behind the Experience"
            title="A loop of detection, signal, response and care."
          >
            <p>
              The service map is rebuilt as a readable loop rather than a data
              dashboard. The system matters because it coordinates timing among
              plant, bee, and human without making one species the central
              controller.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-[#24231f]/10 bg-white p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {loopSteps.map((step, index) => (
                  <div
                    className="rounded-md border border-[#24231f]/10 bg-[#f7f7f2] p-4"
                    key={step}
                  >
                    <p className="text-xs font-semibold text-[#5d48d8]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#24231f]/70">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <Figure
                alt="Temporary service system map crop from the PDF."
                aspect="aspect-[16/11]"
                caption="Temporary full system map reference from the PDF. The HTML loop at left is the readable version for reviewers."
                fit="object-contain"
                src={`${assetBase}/symmobot-system-map-temp.jpg`}
              />
              <Figure
                alt="Temporary bee eye image crop used as biological signal texture."
                aspect="aspect-[16/9]"
                fit="object-cover"
                src={`${assetBase}/symmobot-bee-eye-temp.jpg`}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#24231f]/10 bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:py-28"
        id="reflection"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5d48d8]">
              07 / Not Tools, but Co-authors of Care
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              Not tools.
              <br />
              But co-authors of care.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-[#24231f]/10 bg-white p-7">
              <p className="text-base leading-8 text-[#24231f]/68">
                SymMoBot proposes a responsive care system across species,
                enabling infected plants, forager bees, and gardeners to
                communicate through subtle signals, not commands. It reimagines
                technology as a medium for coordination and early empathy,
                rather than top-down control.
              </p>
              <p className="mt-6 text-base leading-8 text-[#24231f]/68">
                During the process, the project risked treating bees as tools
                or plants as passive data points. The concept evolved to respect
                each actor&apos;s autonomy: plants signal first, bees decide
                paths, and humans act in response.
              </p>
            </div>

            <div className="grid content-center gap-4">
              {["Plants signal.", "Bees choose.", "Humans respond."].map(
                (line) => (
                  <p
                    className="border-b border-[#24231f]/10 pb-4 text-4xl font-semibold tracking-tight sm:text-5xl"
                    key={line}
                  >
                    {line}
                  </p>
                ),
              )}
            </div>
          </div>

          <div className="mt-16 border-t border-[#24231f]/10 pt-10">
            <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
              This shift from managing to listening reflects a deeper design
              value: care as collaboration.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#24231f]/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#24231f]/62 sm:flex-row sm:items-center sm:justify-between">
          <p>SymMoBot / Product Design Portfolio</p>
          <div className="flex gap-5">
            <Link className="transition hover:text-[#5d48d8]" href="/">
              Home
            </Link>
            <Link
              className="transition hover:text-[#5d48d8]"
              href="/projects/floralance"
            >
              Floralance
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
