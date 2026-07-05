"use client";

import { useEffect, useState } from "react";

export type SymMoBotNavItem = {
  id: string;
  label: string;
};

export function SymMoBotProjectNav({
  items,
}: {
  items: SymMoBotNavItem[];
}) {
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
        aria-label="SymMoBot project sections"
        className="fixed right-8 top-1/2 z-20 hidden -translate-y-1/2 2xl:block"
      >
        <ol className="space-y-2 rounded-lg border border-white/10 bg-[#07090d]/55 p-3 text-right text-[11px] uppercase tracking-[0.16em] text-white/40 backdrop-blur">
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  className={`block rounded-md px-3 py-2 transition ${
                    isActive
                      ? "bg-white/10 text-[#c7dcff]"
                      : "hover:bg-white/6 hover:text-white/68"
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

      <div className="fixed bottom-4 left-4 right-4 z-20 rounded-full border border-[#24231f]/10 bg-[#fbfbf8]/88 px-4 py-3 text-xs font-semibold text-[#24231f]/62 shadow-[0_14px_40px_rgba(20,20,20,0.08)] backdrop-blur md:hidden">
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
            className="h-full rounded-full bg-[#5d48d8] transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
}
