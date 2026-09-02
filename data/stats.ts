export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Projects in production", value: 60, suffix: "+" },
  { label: "Senior engineers", value: 25, suffix: "+" },
  { label: "Industries served", value: 10, suffix: "+" },
  { label: "Offices, one team", value: 3 },
];
