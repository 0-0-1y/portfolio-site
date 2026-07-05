"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type OtiumNavItem = {
  id: string;
  label: string;
};

const assetBase = "/assets/projects/otium";

const structureStages = [
  {
    id: "hidden",
    label: "Hidden",
    title: "A sofa usually hides its structure.",
    text: "In conventional upholstered furniture, the support system is absorbed into the soft volume. The body meets cushion, not structure.",
  },
  {
    id: "exposed",
    label: "Exposed",
    title: "Otium brings the structural line to the surface.",
    text: "The tubular steel element becomes visible instead of disappearing inside the sofa body.",
  },
  {
    id: "accessible",
    label: "Accessible",
    title: "The line becomes reachable by the body.",
    text: "Once exposed, the frame can be approached as an edge, handle, rail, and point of contact.",
  },
  {
    id: "interactive",
    label: "Interactive",
    title: "Structure becomes interface.",
    text: "The project proposes a relationship where the body can grip, push, support itself, and stretch around the same domestic object.",
  },
];

const systemLayers = [
  {
    name: "Upholstered Cushion",
    role: "Domestic comfort, visual softness, and upper body contact.",
  },
  {
    name: "Upholstered Seat Volume",
    role: "The main seating body that keeps the product in the language of a sofa.",
  },
  {
    name: "Wooden Internal Frame",
    role: "Internal support for the upholstered volume. The current PDF does not specify wood type.",
  },
  {
    name: "Continuous Tubular Steel Structure",
    role: "Visible interaction layer for movement support and product identity.",
  },
  {
    name: "Rubber Feet",
    role: "Floor contact elements that complete the layered system.",
  },
];

const movementScenarios = [
  {
    id: "pushup",
    label: "Push-up",
    relation: "Push",
    text: "The structure and sofa volume become a raised support for a simple pushing relationship.",
    image: `${assetBase}/otium-use-pushup-temp.jpg`,
    alt: "Temporary PDF crop showing the Otium push-up use scenario.",
  },
  {
    id: "dip",
    label: "Dip",
    relation: "Support",
    text: "The body uses the relationship between frame, edge, and seat as a support point.",
    image: `${assetBase}/otium-use-dip-temp.jpg`,
    alt: "Temporary PDF crop showing the Otium dip use scenario.",
  },
  {
    id: "stretch",
    label: "Stretching",
    relation: "Extend",
    text: "The sofa remains a soft domestic object while the frame offers a point to extend around.",
    image: `${assetBase}/otium-use-stretch-temp.jpg`,
    alt: "Temporary PDF crop showing the Otium stretching use scenario.",
  },
  {
    id: "plank",
    label: "Plank",
    relation: "Stabilize",
    text: "The seat surface and frame create a stable product relationship for a light movement scenario.",
    image: `${assetBase}/otium-use-plank-temp.jpg`,
    alt: "Temporary PDF crop showing the Otium plank use scenario.",
  },
  {
    id: "setup",
    label: "Set-up",
    relation: "Core",
    text: "The label follows the current PDF naming. The scenario shows the sofa supporting a core movement relationship.",
    image: `${assetBase}/otium-use-situp-temp.jpg`,
    alt: "Temporary PDF crop labeled Set-up in the Otium PDF.",
  },
  {
    id: "core",
    label: "Core Exercise",
    relation: "Core",
    text: "The product proposes a body-object relationship for simple core engagement, without presenting a validated workout program.",
    image: `${assetBase}/otium-use-core-temp.jpg`,
    alt: "Temporary PDF crop showing the Otium core exercise use scenario.",
  },
];

export function OtiumProjectNav({ items }: { items: OtiumNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      const checkpoint = window.innerHeight * 0.35;
      const sections = items
        .map((item) => {
          const element = document.getElementById(item.id);
          return element
            ? { id: item.id, top: element.getBoundingClientRect().top }
            : null;
        })
        .filter((section): section is { id: string; top: number } =>
          Boolean(section),
        );

      const current =
        sections
          .filter((section) => section.top <= checkpoint)
          .sort((a, b) => b.top - a.top)[0] ?? sections[0];

      if (current) {
        setActiveId(current.id);
      }
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [items]);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const progress = items.length ? ((activeIndex + 1) / items.length) * 100 : 0;

  return (
    <>
      <nav
        aria-label="Otium project sections"
        className="fixed right-8 top-1/2 z-20 hidden -translate-y-1/2 2xl:block"
      >
        <ol className="space-y-2 rounded-lg border border-[#24231f]/10 bg-[#fbfaf6]/88 p-3 text-right text-[11px] uppercase tracking-[0.16em] text-[#24231f]/42 shadow-[0_14px_38px_rgba(36,35,31,0.08)] backdrop-blur">
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  className={`block rounded-md px-3 py-2 transition motion-reduce:transition-none ${
                    isActive
                      ? "bg-[#123f35] text-white"
                      : "hover:bg-[#123f35]/8 hover:text-[#123f35]"
                  }`}
                  href={`#${item.id}`}
                >
                  {String(index + 1).padStart(2, "0")} {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="fixed bottom-4 left-4 right-4 z-20 rounded-full border border-[#24231f]/10 bg-[#fbfaf6]/90 px-4 py-3 text-xs font-semibold text-[#24231f]/62 shadow-[0_14px_40px_rgba(20,20,20,0.08)] backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
          <span className="truncate uppercase tracking-[0.16em]">
            {items[activeIndex]?.label}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#24231f]/10">
          <div
            className="h-full rounded-full bg-[#123f35] transition-[width] duration-300 motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
}

export function StructureInterface() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const active = structureStages[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const index = Number(visible.target.getAttribute("data-step-index"));
          if (Number.isFinite(index)) {
            setActiveIndex(index);
          }
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    stepRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const frameOpacity = activeIndex === 0 ? 0 : activeIndex === 1 ? 0.42 : 1;
  const frameDash = activeIndex <= 1 ? 0.34 : 0;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-[#f3f0e8]">
          <div className="relative h-[420px] sm:h-[500px]">
            <div className="absolute bottom-[104px] left-[10%] right-[10%] h-[118px] rounded-[28px] bg-[#17483d] shadow-[0_28px_60px_rgba(36,35,31,0.16)] sm:h-[132px]" />
            <div className="absolute bottom-[222px] left-[14%] h-[92px] w-[31%] rounded-[26px] bg-[#1a5145] shadow-[0_18px_32px_rgba(36,35,31,0.12)] sm:h-[108px]" />
            <div className="absolute bottom-[222px] right-[14%] h-[92px] w-[31%] rounded-[26px] bg-[#1a5145] shadow-[0_18px_32px_rgba(36,35,31,0.12)] sm:h-[108px]" />
            <div className="absolute bottom-[92px] left-[12%] right-[12%] h-px bg-[#24231f]/10" />

            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
            >
              <path
                d="M 19 72 C 19 63 19 58 28 58 L 42 58 C 50 58 50 52 50 47 C 50 42 50 37 58 37 L 73 37 C 82 37 82 45 82 53 L 82 72"
                fill="none"
                pathLength={1}
                stroke="#d7e3d8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.6"
                style={{
                  opacity: frameOpacity,
                  strokeDasharray: 1,
                  strokeDashoffset: frameDash,
                }}
                className="transition-all duration-700 motion-reduce:transition-none"
              />
              <path
                d="M 18 72 L 36 72 M 58 72 L 82 72"
                fill="none"
                pathLength={1}
                stroke="#d7e3d8"
                strokeLinecap="round"
                strokeWidth="2.6"
                style={{
                  opacity: frameOpacity,
                  strokeDasharray: 1,
                  strokeDashoffset: frameDash,
                }}
                className="transition-all duration-700 motion-reduce:transition-none"
              />
            </svg>

            {[
              { label: "Grip", top: "34%", left: "59%" },
              { label: "Push", top: "56%", left: "25%" },
              { label: "Support", top: "62%", left: "75%" },
              { label: "Stretch", top: "46%", left: "46%" },
            ].map((point) => (
              <span
                className={`absolute rounded-full border border-[#123f35]/15 bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#123f35] shadow-[0_10px_24px_rgba(36,35,31,0.08)] backdrop-blur transition duration-500 motion-reduce:transition-none ${
                  activeIndex >= 2
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                key={point.label}
                style={{ top: point.top, left: point.left }}
              >
                {point.label}
              </span>
            ))}

            <div className="absolute left-5 top-5 rounded-full border border-[#24231f]/10 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#24231f]/54 backdrop-blur">
              {active.label}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {structureStages.map((stage, index) => (
            <button
              aria-pressed={activeIndex === index}
              className={`rounded-full border px-4 py-2 text-sm transition motion-reduce:transition-none ${
                activeIndex === index
                  ? "border-[#123f35] bg-[#123f35] text-white"
                  : "border-[#24231f]/12 bg-white text-[#24231f]/62 hover:border-[#123f35]/40 hover:text-[#123f35]"
              }`}
              key={stage.id}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              {String(index + 1).padStart(2, "0")} {stage.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {structureStages.map((stage, index) => (
          <div
            className={`rounded-lg border p-6 text-[#24231f] transition duration-300 motion-reduce:transition-none ${
              activeIndex === index
                ? "border-[#123f35]/35 bg-white shadow-[0_18px_40px_rgba(36,35,31,0.08)]"
                : "border-[#24231f]/10 bg-[#fbfaf6]"
            }`}
            data-step-index={index}
            key={stage.id}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#123f35]">
              {String(index + 1).padStart(2, "0")} / {stage.label}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              {stage.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#24231f]/68">
              {stage.text}
            </p>
          </div>
        ))}

        <div className="rounded-lg border border-[#123f35]/16 bg-[#123f35] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">
            Core move
          </p>
          <p className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Structure becomes interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProductSystemReveal() {
  const [activeIndex, setActiveIndex] = useState(3);
  const active = systemLayers[activeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-white">
          <div className="relative aspect-[16/12]">
            <Image
              alt="Temporary PDF crop of the Otium exploded product system."
              className="object-contain p-5"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src={`${assetBase}/otium-exploded-view-temp.jpg`}
            />
          </div>
        </div>
        <p className="mt-3 text-xs leading-5 text-[#24231f]/52">
          TEMP_PDF_ASSET. Replace with a high-resolution exploded product export
          when available.
        </p>
      </div>

      <div>
        <div className="grid gap-2">
          {systemLayers.map((layer, index) => (
            <button
              aria-pressed={activeIndex === index}
              className={`grid gap-2 rounded-lg border p-5 text-left transition motion-reduce:transition-none ${
                activeIndex === index
                  ? "border-[#123f35]/38 bg-white shadow-[0_16px_36px_rgba(36,35,31,0.08)]"
                  : "border-[#24231f]/10 bg-[#fbfaf6] hover:border-[#123f35]/24"
              }`}
              key={layer.name}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#123f35]">
                Layer {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xl font-semibold tracking-tight text-[#24231f]">
                {layer.name}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-[#123f35]/18 bg-[#123f35] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
            Active layer
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">
            {active.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/68">{active.role}</p>
        </div>
      </div>
    </div>
  );
}

export function MovementScenarioSwitch() {
  const [activeId, setActiveId] = useState(movementScenarios[0].id);
  const active = useMemo(
    () =>
      movementScenarios.find((scenario) => scenario.id === activeId) ??
      movementScenarios[0],
    [activeId],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
      <div className="relative overflow-hidden rounded-lg border border-[#24231f]/10 bg-white">
        <div className="relative aspect-[16/9]">
          <Image
            alt={active.alt}
            className="object-contain p-4 transition-opacity duration-300 motion-reduce:transition-none"
            fill
            key={active.image}
            sizes="(max-width: 768px) 100vw, 58vw"
            src={active.image}
          />
        </div>
      </div>

      <div className="grid content-start gap-5">
        <div className="rounded-lg border border-[#24231f]/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#123f35]">
            {active.relation}
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-tight">
            {active.label}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#24231f]/68">
            {active.text}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
          {movementScenarios.map((scenario, index) => (
            <button
              aria-pressed={scenario.id === activeId}
              className={`rounded-lg border p-4 text-left transition motion-reduce:transition-none ${
                scenario.id === activeId
                  ? "border-[#123f35] bg-[#123f35] text-white"
                  : "border-[#24231f]/10 bg-[#fbfaf6] text-[#24231f]/68 hover:border-[#123f35]/30 hover:text-[#123f35]"
              }`}
              key={scenario.id}
              onClick={() => setActiveId(scenario.id)}
              type="button"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-sm font-semibold">
                {scenario.label}
              </span>
            </button>
          ))}
        </div>

        <p className="text-xs leading-5 text-[#24231f]/52">
          TEMP_PDF_ASSET. Each scenario is currently a PDF crop and should be
          replaced by a clean high-resolution use-scenario export.
        </p>
      </div>
    </div>
  );
}
