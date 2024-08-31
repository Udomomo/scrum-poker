export type Card = {
  id: number;
  name: string;
  point: number;
  status: Status;
}

export const Status = {
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  NOTEXIST: "NOTEXIST"
} as const;

export type Status = typeof Status[keyof typeof Status];
