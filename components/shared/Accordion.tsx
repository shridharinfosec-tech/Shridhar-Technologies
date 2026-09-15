"use client";

import { useId, useState, type ReactNode } from "react";
import { PlusIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
};

export default function Accordion({
  items,
  defaultOpenId,
  headingLevel = 3,
  className,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
  // Heading level for each trigger. Use null where the accordion is not part
  // of the page outline (for example the mobile menu).
  headingLevel?: 2 | 3 | 4 | null;
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const baseId = useId();
  const TriggerWrapper = headingLevel ? (`h${headingLevel}` as const) : "div";

  return (
    <div className={cn("divide-y divide-line", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-panel-${item.id}`;
        const buttonId = `${baseId}-button-${item.id}`;

        return (
          <div key={item.id}>
            <TriggerWrapper className="text-base sm:text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-11 w-full items-center justify-between gap-4 rounded-sm py-4 text-left font-display font-semibold text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:py-5"
              >
                <span>{item.trigger}</span>
                <PlusIcon
                  className={cn(
                    "h-5 w-5 shrink-0 text-cyber transition-transform duration-300 ease-out",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </TriggerWrapper>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
              inert={!isOpen}
            >
              <div>
                <div className="pr-10 pb-5 leading-relaxed text-fog">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
