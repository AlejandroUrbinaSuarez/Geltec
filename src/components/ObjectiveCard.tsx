"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface ObjectiveCardProps {
  number: string;
  title: string;
  items: string[];
}

export default function ObjectiveCard({
  number,
  title,
  items,
}: ObjectiveCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative bg-cream/80 rounded-2xl overflow-hidden border border-secondary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/8 hover:border-secondary/50">
      {/* Left accent border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary group-hover:bg-primary/40 transition-colors duration-300" />

      {/* Watermark number */}
      <span className="absolute -right-3 -top-6 font-heading text-[9rem] font-bold text-primary/[0.04] leading-none select-none pointer-events-none">
        {number}
      </span>

      <div className="relative p-8 lg:p-10">
        {/* Number badge + Title */}
        <div className="flex items-start gap-4 mb-5">
          <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center font-heading text-sm font-bold text-primary tracking-wide">
            {number}
          </span>
          <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary leading-tight pt-1">
            {title}
          </h3>
        </div>

        {/* Separator line */}
        <div className="h-px bg-secondary/40 mb-5" />

        {/* Toggle button */}
        <button
          id={`objective-toggle-${number}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`objective-content-${number}`}
          className="flex items-center gap-2 text-sm font-medium text-primary/50 hover:text-primary transition-colors duration-200 cursor-pointer"
        >
          <ChevronRight
            size={14}
            className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          />
          {isOpen ? "Ocultar objetivos" : "Ver objetivos"}
        </button>

        {/* Expandable content */}
        <div
          id={`objective-content-${number}`}
          role="region"
          aria-labelledby={`objective-toggle-${number}`}
          className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-6"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-dark/60 leading-relaxed text-[0.9375rem]"
                >
                  <span className="shrink-0 mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
