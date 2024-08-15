export type Card = {
  status: Status;
  point: number;
  name: string;
}

export const Status = {
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  NOTEXIST: "NOTEXIST"
} as const;

export type Status = typeof Status[keyof typeof Status];
