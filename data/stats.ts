export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  // Years and other identifiers should not count up from zero.
  countUp?: boolean;
};

// Single source for every number on the site.
// [OWNER TO CONFIRM: headcount and project count]
export const stats: Stat[] = [
  { label: "Projects in production", value: 60, suffix: "+" },
  { label: "Senior engineers", value: 25, suffix: "+" },
  { label: "Industries served", value: 10, suffix: "+" },
  { label: "Offices, one team", value: 3 },
];

export const foundedYear = 2020;
export const clientTimeZones = 4;

// Homepage proof strip, shown under the hero.
export const proofStrip: Stat[] = [
  { label: "Projects shipped", value: stats[0].value, suffix: "+" },
  { label: "Industries served", value: stats[2].value, suffix: "+" },
  { label: "Client time zones", value: clientTimeZones },
  { label: "Building software since", value: foundedYear, countUp: false },
];
