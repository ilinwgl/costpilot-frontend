import { useState } from "react";

import {
  Button,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";

import type { CreateProjectRequest } from "../types/project";
import { createProject } from "../services/project-service";

type ProjectRegistrationPageProps = {
  onCancel: () => void;
  onCreated: () => void;
};

function ProjectRegistrationPage({
  onCancel,
  onCreated,
}: ProjectRegistrationPageProps) {
  const [projectName, setProjectName] = useState("");
  const [projectNumber, setProjectNumber] = useState("");
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreate() {
    const projectData: CreateProjectRequest = {
      name: projectName,
      projectNumber,
      client,
      location,
      description,
    };

    const project = await createProject(projectData);

    console.log("Create project:", project);

    onCreated();
  }

  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>New Project</Title>

        <Text c="dimmed" mt="xs">
          Create a new CostPilot project.
        </Text>
      </div>

      <TextInput
        label="Project Name"
        placeholder="e.g. Frankfurt Hbf"
        required
        value={projectName}
        onChange={(event) =>
          setProjectName(event.currentTarget.value)
        }
      />

      <TextInput
        label="Project Number"
        placeholder="Optional"
        value={projectNumber}
        onChange={(event) =>
          setProjectNumber(event.currentTarget.value)
        }
      />

      <TextInput
        label="Client"
        placeholder="Optional"
        value={client}
        onChange={(event) =>
          setClient(event.currentTarget.value)
        }
      />

      <TextInput
        label="Location"
        placeholder="Optional"
        value={location}
        onChange={(event) =>
          setLocation(event.currentTarget.value)
        }
      />

      <Textarea
        label="Description"
        placeholder="Optional project description"
        minRows={4}
        value={description}
        onChange={(event) =>
          setDescription(event.currentTarget.value)
        }
      />

      <Group justify="flex-end">
        <Button
          variant="default"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          color="blue"
          onClick={handleCreate}
        >
          Create Project
        </Button>
      </Group>
    </Stack>
  );
}

export default ProjectRegistrationPage;