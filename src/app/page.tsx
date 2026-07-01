export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-black">
      <nav className="flex items-center justify-between border-b border-black/20 px-6 py-5">
        <div className="text-lg font-semibold tracking-tight">He Yu</div>
        <div className="flex gap-8 text-sm">
          <a href="#works" className="transition hover:opacity-50">
            Works
          </a>
          <a href="#about" className="transition hover:opacity-50">
            About
          </a>
          <a href="#contact" className="transition hover:opacity-50">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-28 md:pt-36">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-black/45">
          Portfolio 2026
        </p>

        <h1 className="max-w-4xl text-5xl leading-[1.08] tracking-tight md:text-7xl">
          A design student exploring visual systems, editorial rhythm, and
          poetic digital experiences.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
          This portfolio brings together selected works in visual identity,
          editorial design, and exhibition storytelling, with a focus on
          clarity, atmosphere, and narrative structure.
        </p>
      </section>

      <section id="works" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Selected Works</h2>
          <span className="text-sm text-black/45">03 Projects</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="group overflow-hidden rounded-[28px] border border-black/15 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="aspect-[4/3] bg-[#d9d9d9]" />
            <div className="p-6">
              <p className="text-sm text-black/45">Brand Identity</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">
                Project One
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                A visual identity project exploring typography, color systems,
                and contemporary brand expression.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[28px] border border-black/15 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="aspect-[4/3] bg-[#d9d9d9]" />
            <div className="p-6">
              <p className="text-sm text-black/45">Editorial Design</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">
                Project Two
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                A publication-focused project investigating pacing, hierarchy,
                and image-text relationships.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[28px] border border-black/15 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:col-span-2">
            <div className="aspect-[16/9] bg-[#d9d9d9]" />
            <div className="p-6">
              <p className="text-sm text-black/45">Exhibition / Interactive</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">
                Project Three
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">
                A spatial and interactive work combining narrative sequencing,
                motion cues, and audience engagement.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          <p className="max-w-xl text-lg leading-8 text-black/60">
            I am a design student interested in visual communication, editorial
            composition, and exhibition-based storytelling. My practice focuses
            on building work that is both visually precise and emotionally
            resonant.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <div className="space-y-3 text-lg text-black/60">
            <p>hello@example.com</p>
            <p>Instagram / Behance / Xiaohongshu</p>
          </div>
        </div>
      </section>
    </main>
  );
}