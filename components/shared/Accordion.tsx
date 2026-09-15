"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
};

export default function Accordion({
  items,
  defaultOpenId,
  className,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-panel-${item.id}`;
        const buttonId = `${baseId}-button-${item.id}`;

        return (
          <div key={item.id}>
            <h3 className="text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full min-h-11 items-center justify-between gap-4 py-5 text-left font-display font-semibold text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
              >
                <span>{item.trigger}</span>
                <span
                  aria-hidden
                  className={cn(
                    "shrink-0 text-2xl leading-none text-cyber transition-transform duration-300 ease-out",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
            >
              <div>
                <div className="pb-5 pr-10 leading-relaxed text-fog">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
