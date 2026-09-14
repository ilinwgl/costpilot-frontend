import { MatchStatus } from "../types/match-status";

export function getMatchStatusLabel(status: MatchStatus) {
  switch (status) {
    case MatchStatus.AUTO_MATCHED:
      return "Matched";

    case MatchStatus.REVIEW_REQUIRED:
      return "Review Required";

    case MatchStatus.UNMATCHED:
      return "Unmatched";
  }
}