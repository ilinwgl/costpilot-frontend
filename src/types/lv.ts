import { MatchStatus } from "./match-status";

export type LvRowType = "LEVEL" | "POSITION";

export type LvRow = {
  id: string;
  oz: string;
  shortText: string;
  longText?: string;

  level: number;
  type: LvRowType;

  quantity?: number;
  unit?: string;

  status?: MatchStatus;
};