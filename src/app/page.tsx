"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import InfoSection from "@/components/home/InfoSection";
import FilmographySection from "@/components/home/FilmographySection";
import ProfileSection from "@/components/home/ProfileSection";
import { calculateDday } from "@/lib/utils";

const TABS = [
  { id: 0, label: "Info" },
  { id: 1, label: "Filmography" },
  { id: 2, label: "Profile" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dDayStr, setDDayStr] = useState("");

  useEffect(() => {
    const debutDate = "2019-02-12";
    setDDayStr(calculateDday(debutDate));
  }, []);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200">
      <div onClickCapture={() => handleTabChange(0)}>
        <Header />
      </div>

      {/* Responsive Container for PC */}
      <div className="max-w-3xl mx-auto">
        {/* Tab Navigation */}
        <nav className="flex items-center justify-center text-center my-10 w-full px-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`p-1 w-1/3 transition-all duration-300 ${activeIndex === tab.id
                ? "border-b-2 border-pink-400 text-white font-bold"
                : "border-b border-zinc-700 text-zinc-500 hover:text-zinc-300"
                }`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Sections */}
        <div className="relative overflow-hidden min-h-[500px]">
          {/* Info */}
          <TabPanel active={activeIndex === 0}>
            <InfoSection dDayStr={dDayStr} />
          </TabPanel>

          {/* Filmography */}
          <TabPanel active={activeIndex === 1}>
            <FilmographySection />
          </TabPanel>

          {/* Profile */}
          <TabPanel active={activeIndex === 2}>
            <ProfileSection />
          </TabPanel>
        </div>
      </div>
    </main>
  );
}

// Internal Helper for Tab Transitions
function TabPanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  if (!active) return null;

  return (
    <div className="transition-all duration-300 animate-in fade-in slide-in-from-top-2">
      {children}
    </div>
  );
}
