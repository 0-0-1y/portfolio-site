import Link from "next/link";

export default function ProjectOnePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-block text-sm text-black/50 transition hover:text-black"
        >
          Back to Home
        </Link>

        <header className="mt-10 border-b border-black/10 pb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-black/45">
            Brand Identity / 2026
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl">
            Project One
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            A visual identity project exploring typography, color systems, and
            contemporary brand expression.
          </p>
        </header>

        <section className="grid gap-8 border-b border-black/10 py-10 md:grid-cols-3">
          <div>
            <p className="text-sm text-black/45">Role</p>
            <p className="mt-2 text-base">Visual Designer</p>
          </div>
          <div>
            <p className="text-sm text-black/45">Duration</p>
            <p className="mt-2 text-base">6 Weeks</p>
          </div>
          <div>
            <p className="text-sm text-black/45">Tools</p>
            <p className="mt-2 text-base">Illustrator / Photoshop / Figma</p>
          </div>
        </section>

        <section className="py-12">
          <div className="aspect-[16/9] rounded-[28px] bg-[#d9d9d9]" />
        </section>

        <section className="grid gap-10 py-12 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <div className="space-y-6 text-base leading-8 text-black/65">
            <p>
              This project began with the question of how a visual identity can
              feel both structured and emotionally resonant. The goal was to
              create a system that remains clear across print and digital
              applications.
            </p>
            <p>
              The design process focused on typographic rhythm, restrained color
              use, and flexible compositions that could scale across different
              formats.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold tracking-tight">Process</h2>
          <div className="space-y-8">
            <div className="aspect-[4/3] rounded-[24px] bg-[#d9d9d9]" />
            <p className="text-base leading-8 text-black/65">
              Early explorations tested different typographic directions and
              grid structures. At this stage, the focus was on contrast,
              proportion, and consistency.
            </p>

            <div className="aspect-[4/3] rounded-[24px] bg-[#d9d9d9]" />
            <p className="text-base leading-8 text-black/65">
              Iterations then moved into color balance and layout application,
              helping define how the identity could function in a broader visual
              system.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold tracking-tight">Outcome</h2>
          <div className="space-y-8">
            <div className="aspect-[16/10] rounded-[24px] bg-[#d9d9d9]" />
            <p className="text-base leading-8 text-black/65">
              The final outcome is a clean and adaptable identity system that
              balances clarity with atmosphere. It can support posters, social
              media assets, and editorial applications while maintaining a
              coherent visual voice.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
