export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Projects delivered", value: 60, suffix: "+" },
  { label: "Engineers on the team", value: 25, suffix: "+" },
  { label: "Industries served", value: 10, suffix: "+" },
  { label: "Years building software", value: 6, suffix: "+" },
];
