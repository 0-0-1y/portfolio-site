"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type KordiluNavItem = {
  id: string;
  label: string;
};

const assetBase = "/assets/projects/kordilu";

const processStages = [
  {
    id: "before",
    label: "Before",
    title: "One vertical impact",
    note: "Different ingredients are asked to respond to one repeated pounding gesture.",
  },
  {
    id: "grinding",
    label: "Phase 01",
    title: "Grinding",
    note: "Dry grinding cuts fibers before the material turns wet and resistant.",
  },
  {
    id: "homogenization",
    label: "Phase 02",
    title: "Homogenization",
    note: "A lever movement combines the material into a uniform paste.",
  },
];

const productParts = [
  {
    id: "handle",
    label: "01",
    title: "Folding handle",
    text: "The handle supports use, then folds back into the preparation system.",
  },
  {
    id: "surface",
    label: "02",
    title: "Grinding surface",
    text: "A dedicated surface separates dry cutting from the later mixing action.",
  },
  {
    id: "body",
    label: "03",
    title: "Wooden mortar",
    text: "The body integrates the food volume, grinding area, and storage relationship.",
  },
  {
    id: "pestle",
    label: "04",
    title: "Crescent-shaped pestle",
    text: "The curved tool turns the new movement into an object that can be held, pushed, and folded.",
  },
];

export function KordiluProjectNav({ items }: { items: KordiluNavItem[] }) {
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
        aria-label="Kordilu project sections"
        className="fixed right-8 top-1/2 z-20 hidden -translate-y-1/2 2xl:block"
      >
        <ol className="space-y-2 rounded-lg border border-[#2f221a]/10 bg-[#fbfaf6]/90 p-3 text-right text-[11px] uppercase tracking-[0.16em] text-[#2f221a]/42 shadow-[0_14px_38px_rgba(47,34,26,0.08)] backdrop-blur">
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  className={`block rounded-md px-3 py-2 transition motion-reduce:transition-none ${
                    isActive
                      ? "bg-[#5b3a2e] text-white"
                      : "hover:bg-[#5b3a2e]/8 hover:text-[#5b3a2e]"
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

      <div className="fixed bottom-4 left-4 right-4 z-20 rounded-full border border-[#2f221a]/10 bg-[#fbfaf6]/92 px-4 py-3 text-xs font-semibold text-[#2f221a]/62 shadow-[0_14px_40px_rgba(20,20,20,0.08)] backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
          <span className="truncate uppercase tracking-[0.16em]">
            {items[activeIndex]?.label}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#2f221a]/10">
          <div
            className="h-full rounded-full bg-[#5b3a2e] transition-[width] duration-300 motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
}

export function ProcessTransformation() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = processStages[activeIndex];

  const pestleTransform =
    active.id === "before"
      ? "translate3d(0,-30px,0) rotate(0deg)"
      : active.id === "grinding"
        ? "translate3d(58px,42px,0) rotate(82deg)"
        : "translate3d(84px,34px,0) rotate(24deg)";

  return (
    <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
      <div className="rounded-lg border border-[#2f221a]/12 bg-[#fffdf8] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5f3d]">
          Process switch
        </p>
        <div className="mt-5 grid gap-2">
          {processStages.map((stage, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                aria-pressed={isActive}
                className={`rounded-lg border p-4 text-left transition motion-reduce:transition-none ${
                  isActive
                    ? "border-[#5b3a2e] bg-[#5b3a2e] text-white"
                    : "border-[#2f221a]/10 bg-white text-[#2f221a] hover:border-[#5b3a2e]/40"
                }`}
                key={stage.id}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    isActive ? "text-white/62" : "text-[#8a5f3d]"
                  }`}
                >
                  {stage.label}
                </span>
                <span className="mt-2 block text-xl font-semibold tracking-tight">
                  {stage.title}
                </span>
                <span
                  className={`mt-3 block text-sm leading-6 ${
                    isActive ? "text-white/72" : "text-[#2f221a]/66"
                  }`}
                >
                  {stage.note}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-[#2f221a]/12 bg-[#efe5d8] p-5 sm:p-6">
        <div className="relative h-[380px] overflow-hidden rounded-md bg-[#fbfaf6]">
          <div className="absolute inset-x-8 bottom-16 h-20 rounded-[50%] border border-[#2f221a]/12 bg-[#cdb49c]/24" />
          <div className="absolute bottom-20 left-[21%] h-16 w-24 rounded-full border border-[#2f221a]/12 bg-[#d6c2aa]/60" />
          <div className="absolute bottom-24 left-[48%] h-14 w-44 rounded-full border border-[#2f221a]/12 bg-[#d6c2aa]/45" />
          <div className="absolute bottom-24 left-[62%] h-3 w-3 rounded-full bg-[#5b3a2e]/34" />
          <div className="absolute bottom-[7.5rem] left-[67%] h-2 w-2 rounded-full bg-[#5b3a2e]/28" />
          <div className="absolute bottom-28 left-[72%] h-2.5 w-2.5 rounded-full bg-[#5b3a2e]/24" />

          <svg
            aria-hidden="true"
            className={`absolute left-[44%] top-[39%] h-32 w-56 transition-opacity duration-300 motion-reduce:transition-none ${
              active.id === "homogenization" ? "opacity-100" : "opacity-20"
            }`}
            viewBox="0 0 220 120"
          >
            <path
              d="M26 78 C78 18 146 18 196 76"
              fill="none"
              stroke="#8a5f3d"
              strokeDasharray="6 7"
              strokeWidth="3"
            />
            <circle cx="26" cy="78" fill="#8a5f3d" r="4" />
          </svg>

          <div
            className="absolute left-[34%] top-[30%] h-44 w-8 origin-bottom rounded-full bg-[#5b3a2e] shadow-[0_18px_38px_rgba(47,34,26,0.18)] transition-transform duration-500 motion-reduce:transition-none"
            style={{ transform: pestleTransform }}
          />

          <div
            className={`absolute left-[31%] top-[62%] h-1 w-40 rounded-full bg-[#8a5f3d] transition-opacity duration-300 motion-reduce:transition-none ${
              active.id === "grinding" ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute left-[20%] top-[26%] rounded-full border border-[#2f221a]/10 bg-white/86 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2f221a]/58 transition-opacity duration-300 motion-reduce:transition-none ${
              active.id === "before" ? "opacity-100" : "opacity-0"
            }`}
          >
            repeated impact
          </div>
          <div
            className={`absolute left-[10%] bottom-10 max-w-[230px] text-sm leading-6 text-[#2f221a]/64 transition-opacity duration-300 motion-reduce:transition-none ${
              active.id === "before" ? "opacity-100" : "opacity-0"
            }`}
          >
            Before, one gesture tried to crush, mix, and resolve resistance at
            the same time.
          </div>
          <div
            className={`absolute right-8 top-8 max-w-[260px] text-sm leading-6 text-[#2f221a]/64 transition-opacity duration-300 motion-reduce:transition-none ${
              active.id === "before" ? "opacity-40" : "opacity-100"
            }`}
          >
            After, the work is separated: cutting fibers first, combining the
            paste second.
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductSystemReveal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productParts[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-lg border border-[#2f221a]/12 bg-white p-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#fbfaf6]">
          <Image
            alt="Temporary PDF crop of the Kordilu product system line drawings."
            className="object-contain p-3"
            fill
            sizes="(max-width: 768px) 100vw, 52vw"
            src={`${assetBase}/kordilu-product-system-temp.jpg`}
          />
          <div
            className="absolute rounded-full border border-[#5b3a2e] bg-[#5b3a2e]/12 transition-all duration-500 motion-reduce:transition-none"
            style={{
              height:
                active.id === "body"
                  ? "46%"
                  : active.id === "surface"
                    ? "22%"
                    : "18%",
              left:
                active.id === "handle"
                  ? "5%"
                  : active.id === "surface"
                    ? "7%"
                    : active.id === "body"
                      ? "12%"
                      : "46%",
              top:
                active.id === "handle"
                  ? "5%"
                  : active.id === "surface"
                    ? "38%"
                    : active.id === "body"
                      ? "55%"
                      : "17%",
              width:
                active.id === "body"
                  ? "58%"
                  : active.id === "pestle"
                    ? "32%"
                    : "42%",
            }}
          />
        </div>
        <p className="mt-3 text-xs leading-5 text-[#2f221a]/48">
          TEMP_PDF_ASSET. Product system linework from the Kordilu PDF,
          retained as temporary evidence.
        </p>
      </div>

      <div className="grid content-start gap-3">
        {productParts.map((part, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              aria-pressed={isActive}
              className={`rounded-lg border p-5 text-left transition motion-reduce:transition-none ${
                isActive
                  ? "border-[#5b3a2e] bg-[#5b3a2e] text-white"
                  : "border-[#2f221a]/10 bg-white text-[#2f221a] hover:border-[#5b3a2e]/40"
              }`}
              key={part.id}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  isActive ? "text-white/58" : "text-[#8a5f3d]"
                }`}
              >
                {part.label}
              </span>
              <span className="mt-3 block text-2xl font-semibold tracking-tight">
                {part.title}
              </span>
              <span
                className={`mt-3 block text-sm leading-6 ${
                  isActive ? "text-white/72" : "text-[#2f221a]/66"
                }`}
              >
                {part.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
