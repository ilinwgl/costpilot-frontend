import type { CreateProjectRequest } from "../types/project";

export async function createProject(data: CreateProjectRequest) {
  console.log("Create project:", data);

  // TODO: Send request to backend later.

  return {
    id: "demo-project-id",
    ...data,
  };
}
