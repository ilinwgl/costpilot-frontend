import type {
  CreateProjectRequest,
  Project,
} from "../types/project";

import { MatchStatus } from "../types/match-status";

export async function createProject(
  data: CreateProjectRequest,
): Promise<Project> {
  console.log("Create project:", data);

  return {
    id: "new-project",
    ...data,
    lvDocument: null,
    positions: [],
  };
}

export async function getProject(
  projectId: string,
): Promise<Project> {
  console.log("Load project:", projectId);

  return {
    id: projectId,
    name: "Frankfurt Hbf",
    projectNumber: "P-001",
    client: "DB InfraGO",
    location: "Frankfurt",
    description: "",
    lvDocument: {
      id: "lv-1",
      fileName: "LV_Test.X83",
    },
    positions: [
      {
        id: "level-01",
        oz: "01",
        shortText: "Betonarbeiten",
        level: 0,
        type: "LEVEL",
      },
      {
        id: "position-0010",
        oz: "01.01.0010",
        shortText: "Sauberkeitsschicht",
        longText:
          "Sauberkeitsschicht aus Normalbeton C 12/15, X0.",
        level: 1,
        type: "POSITION",
        quantity: 17,
        unit: "m³",
        status: MatchStatus.UNMATCHED,
      },
    ],
  };
}