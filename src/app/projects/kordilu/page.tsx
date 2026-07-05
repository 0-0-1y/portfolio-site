import Image from "next/image";
import Link from "next/link";
import {
  KordiluProjectNav,
  ProcessTransformation,
  ProductSystemReveal,
  type KordiluNavItem,
} from "@/components/KordiluInteractions";

const assetBase = "/assets/projects/kordilu";

const navItems: KordiluNavItem[] = [
  { id: "context", label: "Context" },
  { id: "ritual", label: "Ritual" },
  { id: "process", label: "Process" },
  { id: "movement", label: "Movement" },
  { id: "system", label: "System" },
  { id: "material", label: "Material" },
  { id: "prototype", label: "Prototype" },
  { id: "reflection", label: "Reflection" },
];

const projectFacts = [
  ["Year", "2022 / 2023"],
  ["Course", "Laboratorio di Fondamenti del Progetto"],
  ["Institution", "Politecnico di Milano"],
  ["Professors", "Stefania Palmieri / Alessandro Ferrari"],
];

const keywords = ["Wood Design", "Ergonomics", "Cultural Evolution"];

const frictions = [
  {
    label: "Sound",
    title: "Acoustic pollution",
    text: "Repeated vertical impact creates noise that conflicts with shared apartment living.",
  },
  {
    label: "Body",
    title: "Physical strain",
    text: "Heavy repetitive pounding requires significant force and time.",
  },
  {
    label: "Space",
    title: "Space constraints",
    text: "Traditional equipment and preparation routines are difficult to integrate into smaller kitchens.",
  },
];

const traditionalSteps = [
  {
    title: "Coarsely chopped",
    text: "Different ingredients enter the same preparation phase.",
  },
  {
    title: "Crush",
    text: "One vertical impact gesture is repeated against different material conditions.",
  },
  {
    title: "Mix",
    text: "Wet fibers resist, clump, and demand more effort from the body.",
  },
];

const movementMoves = [
  {
    title: "The crescent pestle",
    text: "The curved pestle makes the new action visible: it can be held as a tool for leverage instead of only as a vertical pounder.",
  },
  {
    title: "The folding handle",
    text: "The handle supports use and then folds back into the product system, keeping storage part of the concept.",
  },
  {
    title: "The wooden body",
    text: "The body integrates grinding surface, mortar volume, and the relationship between active use and domestic storage.",
  },
];

const materialChain = [
  ["Place", "Tambacounda, Senegal"],
  ["Material", "Cordyla pinnata / Dimb"],
  ["Knowledge", "Local woodworking practices"],
  ["Product", "Kordilu"],
];

const prototypeMoments = [
  {
    title: "Scale",
    image: `${assetBase}/kordilu-prototype-01-temp.jpg`,
    alt: "Temporary PDF crop showing a hand holding the Kordilu prototype over a basket.",
  },
  {
    title: "Grip",
    image: `${assetBase}/kordilu-prototype-02-temp.jpg`,
    alt: "Temporary PDF crop showing the folding handle prototype held by two hands.",
  },
  {
    title: "Movement",
    image: `${assetBase}/kordilu-prototype-03-temp.jpg`,
    alt: "Temporary PDF crop showing the prototype in a grinding position.",
  },
  {
    title: "Pressure",
    image: `${assetBase}/kordilu-prototype-04-temp.jpg`,
    alt: "Temporary PDF crop showing two hands pressing the prototype handles.",
  },
];

const reflectionIssues = [
  {
    title: "Structural fatigue",
    text: "The adhesive hinge pin is subjected to repeated cyclic shear. Long-term failure could compromise use and make repair difficult.",
  },
  {
    title: "Pinch risk",
    text: "At the maximum swing angle, the hinge clearance may create a pinch hazard for larger hands.",
  },
  {
    title: "Material fragility",
    text: "Mechanical joints in wood can create moisture-sensitive gaps. In a kitchen context, this creates maintenance, hygiene, and durability challenges.",
  },
];

const nextQuestions = [
  "Redesign the hinge without hiding repairability.",
  "Increase hand clearance at the maximum swing angle.",
  "Reconsider moisture-sensitive joints in the wooden body.",
];

// TEMP_PDF_ASSET: all Kordilu images referenced below are temporary crops from
// pages 13-16 of portfolio (2).pdf. Replace files in public/assets/projects/kordilu
// with high-resolution source images while preserving filenames and aspect intent.
const assets = {
  hero: `${assetBase}/kordilu-hero-temp.jpg`,
  context: `${assetBase}/kordilu-context-dakar-temp.jpg`,
  problemRadar: `${assetBase}/kordilu-problem-radar-temp.jpg`,
  traditionalProcess: `${assetBase}/kordilu-traditional-process-temp.jpg`,
  processAnalysis: `${assetBase}/kordilu-process-analysis-temp.jpg`,
  conceptSketch: `${assetBase}/kordilu-concept-sketch-temp.jpg`,
  useScenario: `${assetBase}/kordilu-use-scenario-temp.jpg`,
  objectForms: `${assetBase}/kordilu-object-forms-temp.jpg`,
  materialDimb: `${assetBase}/kordilu-material-dimb-temp.jpg`,
  localCraft: `${assetBase}/kordilu-local-craft-temp.jpg`,
  criticalReflection: `${assetBase}/kordilu-critical-reflection-temp.jpg`,
  prototypeContext: `${assetBase}/kordilu-prototype-context-temp.jpg`,
  finalRender: `${assetBase}/kordilu-final-render-temp.jpg`,
};

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
        className={`relative overflow-hidden rounded-lg border border-[#2f221a]/10 bg-white ${aspect}`}
      >
        <Image alt={alt} className={fit} fill sizes={sizes} src={src} />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs leading-5 text-[#2f221a]/52">
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
            dark ? "text-[#d9bea2]" : "text-[#8a5f3d]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl ${
            dark ? "text-[#fbfaf6]" : "text-[#2f221a]"
          }`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`max-w-2xl text-base leading-8 ${
          dark ? "text-[#fbfaf6]/72" : "text-[#2f221a]/68"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function KordiluPage() {
  return (
    <main className="bg-[#fbfaf6] pb-24 text-[#2f221a] md:pb-0">
      <KordiluProjectNav items={navItems} />

      <nav className="sticky top-0 z-30 border-b border-[#2f221a]/10 bg-[#fbfaf6]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            className="text-sm font-semibold tracking-tight transition hover:text-[#8a5f3d]"
            href="/"
          >
            Yu He
          </Link>
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-[#2f221a]/58 md:flex">
            <a className="transition hover:text-[#8a5f3d]" href="#context">
              Context
            </a>
            <a className="transition hover:text-[#8a5f3d]" href="#process">
              Process
            </a>
            <a className="transition hover:text-[#8a5f3d]" href="#system">
              System
            </a>
            <a className="transition hover:text-[#8a5f3d]" href="#reflection">
              Reflection
            </a>
          </div>
        </div>
      </nav>

      <header className="border-b border-[#2f221a]/10">
        <div className="mx-auto grid min-h-[86svh] max-w-7xl content-end gap-10 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a5f3d]">
              Kordilu / Wood Design
            </p>
            <h1 className="mt-5 text-6xl font-semibold leading-[0.96] tracking-tight sm:text-8xl lg:text-9xl">
              Kordìlu
            </h1>
            <p className="mt-7 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-[#2f221a]/84 sm:text-3xl">
              A wooden mortar for the new Senegal.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#2f221a]/66">
              Redesigning a traditional cooking process for Dakar&apos;s urban
              families.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  className="rounded-full border border-[#2f221a]/12 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2f221a]/58"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="self-end">
            <div className="relative overflow-hidden rounded-lg border border-[#2f221a]/10 bg-white">
              <div className="relative aspect-[16/9]">
                <Image
                  alt="Temporary PDF crop of the Kordilu wooden mortar, crescent pestle, and folding handle."
                  className="object-contain p-4"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  src={assets.hero}
                />
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#2f221a]/48">
              TEMP_PDF_ASSET. Replace with the final product render without PDF
              layout text.
            </p>
          </div>

          <div className="border-t border-[#2f221a]/12 pt-5 lg:col-span-2">
            <div className="grid gap-5 text-sm text-[#2f221a]/64 md:grid-cols-4">
              {projectFacts.map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2f221a]/38">
                    {label}
                  </p>
                  <p className="mt-2 leading-6">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-[#2f221a]/10 bg-[#efe5d8] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            The redesign did not begin with the shape of the object.
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="context"
      >
        <SectionHeader
          eyebrow="01 / A Changing Dakar"
          title="Tradition remains. The home changes."
        >
          <p>
            Rapid urbanization in Dakar is moving families into tighter modern
            apartments. The traditional mortar remains central to Senegalese
            cooking, but the physical behavior of pounding creates new
            conflicts in shared domestic environments.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Figure
            alt="Temporary PDF crop showing acoustic pollution, physical strain, and space constraints in the Dakar context."
            aspect="aspect-[16/9]"
            caption="TEMP_PDF_ASSET. Context icons from the Kordilu PDF."
            fit="object-contain"
            src={assets.context}
          />
          <div className="grid gap-4">
            {frictions.map((item, index) => (
              <article
                className="grid gap-4 border-t border-[#2f221a]/12 py-5 md:grid-cols-[0.28fr_0.72fr]"
                key={item.title}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {item.label}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#2f221a]/66">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <Figure
            alt="Temporary PDF crop of the Kordilu problem radar."
            aspect="aspect-square"
            caption="TEMP_PDF_ASSET. The radar is preserved as source evidence; the three main frictions are rebuilt above as HTML."
            fit="object-contain"
            src={assets.problemRadar}
          />
          <div className="grid content-center gap-6">
            <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              The problem was not the tradition itself.
            </p>
            <p className="max-w-2xl text-base leading-8 text-[#2f221a]/68">
              The mismatch was between a traditional action and a changing
              domestic environment: sound, body effort, and space all became
              part of the design brief.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#2f221a]/10 bg-[#fffdf8] py-20 lg:py-28"
        id="ritual"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="02 / The Ritual and Its Friction"
            title="The research object was not the mortar. It was the food preparation behavior."
          >
            <p>
              Kordilu studies the traditional process before changing the
              object. Different ingredients are treated in the same phase and
              with the same impact gesture, increasing resistance, time, and
              fatigue.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {traditionalSteps.map((step, index) => (
              <article
                className="rounded-lg border border-[#2f221a]/10 bg-[#fbfaf6] p-6"
                key={step.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#2f221a]/66">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Figure
              alt="Temporary PDF crop of the traditional Senegalese mortar process: coarsely chopped, crush, mix."
              aspect="aspect-[16/8]"
              caption="TEMP_PDF_ASSET. Traditional process diagram from the PDF."
              fit="object-contain"
              src={assets.traditionalProcess}
            />
            <div className="rounded-lg border border-[#2f221a]/10 bg-[#efe5d8] p-7">
              <p className="text-3xl font-semibold leading-tight tracking-tight">
                One repeated gesture was being asked to solve different
                material problems.
              </p>
              <div className="mt-7 grid gap-3 text-sm leading-6 text-[#2f221a]/68">
                {["Wet fibers", "Resistance", "Clumps", "Repeated impact"].map(
                  (item) => (
                    <p
                      className="border-t border-[#2f221a]/12 pt-3"
                      key={item}
                    >
                      {item}
                    </p>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2f221a] py-20 text-[#fbfaf6] lg:py-28" id="process">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bea2]">
              03 / Redesigning the Process
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              The product redesign starts from the food process, not from the
              object shape.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bea2]">
                Before
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                One process, one vertical gesture.
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#fbfaf6]/68">
                <li>Wet ingredients resist.</li>
                <li>Fibers clump.</li>
                <li>More effort is required.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bea2]">
                After
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Two stages: grinding and homogenization.
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#fbfaf6]/68">
                <li>Dry grinding cuts fibers while avoiding clumping.</li>
                <li>Lever movement combines the material into a uniform paste.</li>
                <li>The new movement asks for a new product form.</li>
              </ul>
            </article>
          </div>

          <div className="mt-12">
            <ProcessTransformation />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Figure
              alt="Temporary PDF crop showing Kordilu insight from clumps to grinding and homogenization."
              aspect="aspect-[16/8]"
              caption="TEMP_PDF_ASSET. Process insight diagram from the PDF."
              fit="object-contain"
              src={assets.processAnalysis}
            />
            <p className="self-center text-3xl font-semibold leading-tight tracking-tight">
              A new process required a new movement. A new movement required a
              new object.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="movement"
      >
        <SectionHeader
          eyebrow="04 / From Movement to Form"
          title="The form was not drawn first. It emerged from grip, leverage, rotation, and storage."
        >
          <p>
            The current PDF gives concept sketches and use scenarios rather
            than a full sketch archive. This first web version keeps the logic
            explicit so later original sketches can replace the temporary crops
            without changing the chapter structure.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {movementMoves.map((move, index) => (
            <article
              className="rounded-lg border border-[#2f221a]/10 bg-white p-6"
              key={move.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {move.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#2f221a]/66">
                {move.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Figure
            alt="Temporary PDF crop of Kordilu concept development sketches."
            aspect="aspect-[4/3]"
            caption="TEMP_PDF_ASSET. Existing concept development material."
            fit="object-contain"
            src={assets.conceptSketch}
          />
          <div className="grid gap-5">
            <Figure
              alt="Temporary PDF crop of Kordilu use scenario sketches."
              aspect="aspect-[16/7]"
              caption="TEMP_PDF_ASSET. Use scenario sketches showing grind and homogenization."
              fit="object-contain"
              src={assets.useScenario}
            />
            <Figure
              alt="Temporary PDF crop showing Kordilu object forms and the curved pestle."
              aspect="aspect-[16/9]"
              caption="TEMP_PDF_ASSET. Product form render crop from the concept page."
              fit="object-cover"
              src={assets.objectForms}
            />
          </div>
        </div>

        <p className="mt-14 max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
          The object became a consequence of the process.
        </p>
      </section>

      <section
        className="border-y border-[#2f221a]/10 bg-[#efe5d8] py-20 lg:py-28"
        id="system"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="05 / The Product System"
            title="Kordilu is not a single sculptural form. It is an integrated preparation system."
          >
            <p>
              The product system is rebuilt here with readable labels for the
              folding handle, grinding surface, wooden mortar, and
              crescent-shaped pestle. The PDF linework remains as temporary
              evidence until separated high-resolution drawings are available.
            </p>
          </SectionHeader>

          <div className="mt-12">
            <ProductSystemReveal />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {["Grind", "Homogenize", "Fold / Store"].map((step, index) => (
              <article
                className="rounded-lg border border-[#2f221a]/10 bg-[#fbfaf6] p-6"
                key={step}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
                  Use {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="material"
      >
        <SectionHeader
          eyebrow="06 / Local Material, Local Making"
          title="Why wood?"
        >
          <p>
            The material decision connects place, production, craft,
            maintenance, and food contact. Cordyla pinnata, locally known as
            Dimb, was selected for its mechanical performance and existing use
            in traditional mortar production.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-[#2f221a]/10 bg-white p-6">
            <div className="grid gap-3">
              {materialChain.map(([label, value], index) => (
                <div
                  className="grid gap-3 border-t border-[#2f221a]/10 py-4 first:border-t-0 md:grid-cols-[0.28fr_0.72fr]"
                  key={label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
                    {String(index + 1).padStart(2, "0")} / {label}
                  </p>
                  <p className="text-2xl font-semibold tracking-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Figure
            alt="Temporary PDF crop showing Dimb wood, Tambacounda, and Senegal material sourcing."
            aspect="aspect-[16/10]"
            caption="TEMP_PDF_ASSET. Material sourcing diagram from the PDF."
            fit="object-contain"
            src={assets.materialDimb}
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Figure
            alt="Temporary PDF crop showing local handicraft and woodworking images for Kordilu."
            aspect="aspect-[16/10]"
            caption="TEMP_PDF_ASSET. Local handicraft evidence from the PDF."
            fit="object-contain"
            src={assets.localCraft}
          />
          <div className="grid content-center gap-5">
            <p className="text-3xl font-semibold leading-tight tracking-tight">
              The design considers not only the object, but also where and by
              whom it could be made.
            </p>
            <p className="text-base leading-8 text-[#2f221a]/68">
              The PDF notes a food-safe oil treatment to improve water
              resistance and surface smoothness. Technical material data should
              be added later only when source evidence is available.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#2f221a]/10 bg-[#fffdf8] py-20 lg:py-28"
        id="prototype"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="07 / Prototype in Use"
            title="The idea had to be held."
          >
            <p>
              The prototype moves the project from diagram, render, and concept
              into real scale. It allowed the interaction to be evaluated as a
              physical relationship: scale, grip, movement, and storage.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Figure
              alt="Temporary PDF crop showing the Kordilu product in a kitchen-like domestic context."
              aspect="aspect-[4/5]"
              caption="TEMP_PDF_ASSET. Prototype-in-context render from the PDF."
              src={assets.prototypeContext}
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {prototypeMoments.map((moment) => (
                <Figure
                  alt={moment.alt}
                  aspect="aspect-[4/3]"
                  caption={moment.title}
                  key={moment.title}
                  src={moment.image}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-[#2f221a]/10 bg-[#fbfaf6] p-7">
            <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight">
              The prototype did not prove the project finished. It revealed
              what the next iteration had to confront.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
        id="reflection"
      >
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
            08 / What Still Needs to Change
          </p>
          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            A prototype is also a way to discover what is wrong.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {reflectionIssues.map((issue, index) => (
              <article
                className="grid gap-5 border-t border-[#2f221a]/12 py-6 md:grid-cols-[0.18fr_0.82fr]"
                key={issue.title}
              >
                <p className="text-4xl font-semibold tracking-tight text-[#8a5f3d]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {issue.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#2f221a]/68">
                    {issue.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Figure
            alt="Temporary PDF crop of Kordilu critical reflection diagrams and notes."
            aspect="aspect-[4/5]"
            caption="TEMP_PDF_ASSET. Critical reflection notes from the PDF."
            fit="object-contain"
            src={assets.criticalReflection}
          />
        </div>

        <div className="mt-14 rounded-lg border border-[#2f221a]/10 bg-[#efe5d8] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
            Next iteration questions
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {nextQuestions.map((question, index) => (
              <p
                className="border-t border-[#2f221a]/12 pt-4 text-sm leading-7 text-[#2f221a]/70"
                key={question}
              >
                <span className="mb-3 block text-lg font-semibold text-[#2f221a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {question}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f221a] py-20 text-[#fbfaf6] lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bea2]">
              Closing
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Process. Movement. Form.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#fbfaf6]/70">
              The project began with a familiar object. But the decisive design
              move was not changing its appearance. It was changing the process.
            </p>
            <p className="mt-8 text-3xl font-semibold leading-tight tracking-tight">
              Kordìlu
              <br />
              A wooden mortar for a changing domestic life.
            </p>
          </div>
          <Figure
            alt="Temporary PDF crop of the final Kordilu render with ingredients."
            aspect="aspect-[16/10]"
            caption="TEMP_PDF_ASSET. Replace with a high-resolution final render or prototype-in-context image."
            src={assets.finalRender}
          />
        </div>
      </section>

      <section className="border-b border-[#2f221a]/10 px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#2f221a]/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Next Project</p>
          <Link
            className="text-2xl font-semibold tracking-tight text-[#2f221a] transition hover:text-[#8a5f3d]"
            href="/projects/otium"
          >
            Otium
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#2f221a]/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#2f221a]/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Kordìlu / Product Design Portfolio</p>
          <div className="flex gap-5">
            <Link className="transition hover:text-[#8a5f3d]" href="/">
              Home
            </Link>
            <Link
              className="transition hover:text-[#8a5f3d]"
              href="/projects/floralance"
            >
              Floralance
            </Link>
            <Link
              className="transition hover:text-[#8a5f3d]"
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
