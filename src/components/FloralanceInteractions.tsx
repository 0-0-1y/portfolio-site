"use client";

import { useMemo, useState } from "react";

type ModuleId = "A" | "B" | "C" | "D" | "E";

type ModuleInfo = {
  id: ModuleId;
  name: string;
  height: string;
  role: string;
  use: string;
  note: string;
  color: string;
};

const modules: ModuleInfo[] = [
  {
    id: "A",
    name: "Base",
    height: "25 cm",
    role: "Floor seat / footstand",
    use: "Low-gravity play, child exploration, and informal rest.",
    note: "The lowest module keeps the system close to the floor, where domestic life often becomes playful and unstructured.",
    color: "#d8cfc8",
  },
  {
    id: "B",
    name: "Seat",
    height: "45 cm",
    role: "Standard stool",
    use: "Everyday sitting and short pauses between activities.",
    note: "A familiar sitting height anchors the system in ordinary domestic behavior rather than a medical language.",
    color: "#aebeca",
  },
  {
    id: "C",
    name: "Perch",
    height: "60 cm",
    role: "High seat",
    use: "Transitional posture, smart working, and easier sit-to-stand movement.",
    note: "The perch supports moments between sitting and standing, reducing the effort of moving across work and rest.",
    color: "#89413d",
  },
  {
    id: "D",
    name: "Support",
    height: "80 cm",
    role: "Armrest / backrest",
    use: "Leaning support, assisted standing, and spatial division.",
    note: "This module gives stability without making the home feel clinical.",
    color: "#3f4f78",
  },
  {
    id: "E",
    name: "Counter",
    height: "90 cm",
    role: "Bar counter / divider",
    use: "Standing work, household transitions, and vertical support.",
    note: "The tallest module lets the furniture participate in work surfaces and standing routines.",
    color: "#6f2019",
  },
];

const scenarios = [
  {
    id: "rest",
    label: "Rest",
    text: "Lower modules gather into a soft, close-to-body cluster for reading, pausing, or emotional recovery.",
    accent: "#9eb8c5",
    layout: [
      { id: "A", left: "13%", bottom: "12%" },
      { id: "B", left: "31%", bottom: "14%" },
      { id: "D", left: "50%", bottom: "20%" },
      { id: "C", left: "68%", bottom: "14%" },
    ],
  },
  {
    id: "work",
    label: "Work",
    text: "The system stretches into a temporary workstation, with high surfaces and perching support for smart working.",
    accent: "#6f2019",
    layout: [
      { id: "B", left: "12%", bottom: "12%" },
      { id: "C", left: "30%", bottom: "16%" },
      { id: "E", left: "52%", bottom: "18%" },
      { id: "D", left: "72%", bottom: "16%" },
    ],
  },
  {
    id: "play",
    label: "Play",
    text: "Modules compress and scatter into a safe terrain of small heights, textures, and reachable surfaces.",
    accent: "#d4af37",
    layout: [
      { id: "A", left: "12%", bottom: "12%" },
      { id: "A", left: "30%", bottom: "24%" },
      { id: "B", left: "48%", bottom: "12%" },
      { id: "C", left: "66%", bottom: "25%" },
    ],
  },
  {
    id: "social",
    label: "Social",
    text: "Seats and supports form an open circle, making conversation and shared activity feel composed but informal.",
    accent: "#a13a34",
    layout: [
      { id: "B", left: "15%", bottom: "12%" },
      { id: "C", left: "34%", bottom: "18%" },
      { id: "D", left: "54%", bottom: "22%" },
      { id: "B", left: "73%", bottom: "12%" },
    ],
  },
];

const colorModes = [
  {
    id: "warm",
    label: "Social",
    title: "Warm encouragement",
    text: "Deep reds and warm tones make the system feel active, attentive, and socially open.",
    colors: ["#6f1008", "#8b2415", "#a13a34", "#d86f3c"],
  },
  {
    id: "cool",
    label: "Rest",
    title: "Sensory calm",
    text: "Cool blues reduce visual intensity and support slower, restorative domestic moments.",
    colors: ["#293653", "#3f4f78", "#9eb8c5", "#c1cfd4"],
  },
  {
    id: "neutral",
    label: "Neutral",
    title: "Quiet continuity",
    text: "Muted neutrals let the furniture merge with existing interiors when the user wants less stimulation.",
    colors: ["#d9cbc4", "#eee7d7", "#e3dfd6", "#8d827b"],
  },
];

function getModule(id: ModuleId) {
  return modules.find((module) => module.id === id) ?? modules[0];
}

export function ModuleExplorer() {
  const [activeId, setActiveId] = useState<ModuleId>("C");
  const active = getModule(activeId);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
      <div className="rounded-lg border border-[#281a14]/15 bg-[#fbfaf7] p-4 sm:p-6">
        <div className="flex h-[280px] items-end gap-3 sm:h-[360px] sm:gap-4">
          {modules.map((item) => {
            const isActive = item.id === activeId;
            const height = Number.parseInt(item.height, 10);
            return (
              <button
                aria-pressed={isActive}
                className="group flex min-w-0 flex-1 flex-col items-center gap-3 text-left"
                key={item.id}
                onClick={() => setActiveId(item.id)}
                type="button"
              >
                <span
                  className={`relative flex w-full items-end justify-center rounded-t-[48px] rounded-b-lg border transition duration-300 ${
                    isActive
                      ? "border-[#6f2019] shadow-[0_16px_32px_rgba(111,32,25,0.16)]"
                      : "border-[#281a14]/10 opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    height: `${height * 3.2}px`,
                    background: isActive
                      ? `linear-gradient(180deg, ${item.color}, #f1e7df)`
                      : "#e8e2dc",
                  }}
                >
                  <span
                    className="absolute -top-8 text-xs font-semibold text-[#6f2019]"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    {item.height}
                  </span>
                </span>
                <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#281a14]/70">
                  {item.id}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-[#281a14]/15 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f2019]">
          Module {active.id}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#281a14]">
          {active.name}
        </h3>
        <dl className="mt-7 grid gap-4 text-sm">
          <div>
            <dt className="text-[#281a14]/45">Height</dt>
            <dd className="mt-1 text-lg font-semibold text-[#281a14]">
              {active.height}
            </dd>
          </div>
          <div>
            <dt className="text-[#281a14]/45">Typology shift</dt>
            <dd className="mt-1 text-[#281a14]/76">{active.role}</dd>
          </div>
          <div>
            <dt className="text-[#281a14]/45">Supports</dt>
            <dd className="mt-1 text-[#281a14]/76">{active.use}</dd>
          </div>
        </dl>
        <p className="mt-7 border-t border-[#281a14]/10 pt-5 text-sm leading-6 text-[#281a14]/68">
          {active.note}
        </p>
      </div>
    </div>
  );
}

export function ScenarioComposer() {
  const [activeId, setActiveId] = useState("rest");
  const active = useMemo(
    () => scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0],
    [activeId],
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-lg border border-[#281a14]/15 bg-white p-5">
        <div className="flex flex-wrap gap-2">
          {scenarios.map((scenario) => (
            <button
              className={`rounded-full border px-4 py-2 text-sm transition ${
                scenario.id === activeId
                  ? "border-[#281a14] bg-[#281a14] text-white"
                  : "border-[#281a14]/15 text-[#281a14]/66 hover:border-[#281a14]/40"
              }`}
              key={scenario.id}
              onClick={() => setActiveId(scenario.id)}
              type="button"
            >
              {scenario.label}
            </button>
          ))}
        </div>
        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#281a14]">
          {active.label} configuration
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#281a14]/68">
          {active.text}
        </p>
      </div>

      <div className="relative h-[360px] overflow-hidden rounded-lg border border-[#281a14]/15 bg-[#f4f1eb]">
        <div className="absolute inset-x-8 bottom-12 h-px bg-[#281a14]/20" />
        {active.layout.map((item, index) => {
          const moduleInfo = getModule(item.id as ModuleId);
          const height = Number.parseInt(moduleInfo.height, 10);
          return (
            <div
              className="absolute w-[70px] rounded-t-[40px] rounded-b-lg border border-white/70 shadow-[0_18px_36px_rgba(40,26,20,0.12)] transition-all duration-500 sm:w-[92px]"
              key={`${item.id}-${index}`}
              style={{
                left: item.left,
                bottom: item.bottom,
                height: `${height * 2.35}px`,
                background:
                  index % 2 === 0
                    ? `linear-gradient(180deg, ${active.accent}, #eaded3)`
                    : "#d8d0c9",
              }}
            >
              <span className="absolute left-1/2 top-3 -translate-x-1/2 text-xs font-bold text-white/90">
                {item.id}
              </span>
            </div>
          );
        })}
        <div className="absolute left-5 top-5 rounded-full border border-[#281a14]/10 bg-white/76 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#281a14]/60">
          Modular landscape
        </div>
      </div>
    </div>
  );
}

export function EmotionalInterface() {
  const [activeId, setActiveId] = useState("cool");
  const active = useMemo(
    () => colorModes.find((mode) => mode.id === activeId) ?? colorModes[0],
    [activeId],
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-lg border border-[#281a14]/15 bg-[#fbfaf7] p-5">
        <div className="relative mx-auto h-[340px] max-w-xl">
          <div className="absolute bottom-10 left-[18%] h-36 w-36 rounded-t-[70px] rounded-b-lg bg-[#ddd4cc] shadow-[0_20px_44px_rgba(40,26,20,0.15)]" />
          <div
            className="absolute bottom-[140px] left-[21%] h-9 w-32 rounded-full transition-colors duration-300"
            style={{ background: active.colors[1] }}
          />
          <div className="absolute bottom-10 left-[43%] h-52 w-32 rounded-t-[60px] rounded-b-lg bg-[#8d827b] shadow-[0_20px_44px_rgba(40,26,20,0.15)]" />
          <div
            className="absolute bottom-[222px] left-[45%] h-9 w-28 rounded-full transition-colors duration-300"
            style={{ background: active.colors[0] }}
          />
          <div className="absolute bottom-10 left-[61%] h-24 w-28 rounded-t-[50px] rounded-b-lg bg-[#eaded3] shadow-[0_20px_44px_rgba(40,26,20,0.15)]" />
          <div
            className="absolute bottom-[126px] left-[63%] h-8 w-24 rounded-full transition-colors duration-300"
            style={{ background: active.colors[2] }}
          />
          <div className="absolute bottom-9 left-[10%] h-28 w-[70%] rounded-full border border-[#281a14]/10" />
        </div>
      </div>

      <div className="rounded-lg border border-[#281a14]/15 bg-white p-6">
        <div className="flex flex-wrap gap-2">
          {colorModes.map((mode) => (
            <button
              className={`rounded-full border px-4 py-2 text-sm transition ${
                mode.id === activeId
                  ? "border-[#281a14] bg-[#281a14] text-white"
                  : "border-[#281a14]/15 text-[#281a14]/66 hover:border-[#281a14]/40"
              }`}
              key={mode.id}
              onClick={() => setActiveId(mode.id)}
              type="button"
            >
              {mode.label}
            </button>
          ))}
        </div>
        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#281a14]">
          {active.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#281a14]/68">
          {active.text}
        </p>
        <div className="mt-7 flex gap-3">
          {active.colors.map((color) => (
            <span
              aria-label={`Color swatch ${color}`}
              className="h-11 w-11 rounded-full border border-[#281a14]/10"
              key={color}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
