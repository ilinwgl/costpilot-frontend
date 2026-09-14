import { useState } from "react";

import {
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { open } from "@tauri-apps/plugin-dialog";

import LvStructure from "../components/lv-structure";

type ProjectDetailPageProps = {
  projectId: string | null;
};

function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  console.log("Current project:", projectId);
  const [currentLv, setCurrentLv] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  async function handleSelectLv() {
    const file = await open({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "Leistungsverzeichnis",
          extensions: ["xml", "X83", "X81"],
        },
      ],
    });

    if (typeof file === "string") {
      setSelectedFile(file);
      console.log("Selected LV:", file);
    }
  }

  function handleImportLv() {
    if (!selectedFile) {
      return;
    }

    console.log("Import LV:", selectedFile);

    // TODO:
    // Later:
    // 1. Upload file to backend
    // 2. Parse LV
    // 3. Save LV and positions
    // 4. Load parsed LV data

    setCurrentLv(selectedFile);
    setSelectedFile(null);
  }

  const currentLvName = currentLv?.split(/[\\/]/).pop();
  const selectedFileName = selectedFile?.split(/[\\/]/).pop();

  return (
    <Stack gap="xl">
      <div>
        <Title order={2}>Project Detail</Title>

        <Text c="dimmed" mt="xs">
          Manage project information and Leistungsverzeichnis.
        </Text>
      </div>

      <Card withBorder radius="md" padding="lg">
        <Stack gap="md">
          <Title order={3}>Project Information</Title>

          <Divider />

          <Group gap="xl">
            <div>
              <Text size="sm" c="dimmed">
                Project Name
              </Text>

              <Text fw={500}>Frankfurt Hbf</Text>
            </div>

            <div>
              <Text size="sm" c="dimmed">
                Project Number
              </Text>

              <Text fw={500}>P-001</Text>
            </div>

            <div>
              <Text size="sm" c="dimmed">
                Client
              </Text>

              <Text fw={500}>DB InfraGO</Text>
            </div>
          </Group>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Group justify="space-between" align="flex-end">
          <Stack gap="xs">
            <Title order={3}>Leistungsverzeichnis</Title>

            {currentLv ? (
              <>
                <Text size="sm" c="dimmed">
                  Current LV
                </Text>

                <Text fw={500}>{currentLvName}</Text>
              </>
            ) : (
              <Text c="dimmed">No LV imported.</Text>
            )}

            {selectedFile && (
              <>
                <Text size="sm" c="dimmed" mt="sm">
                  Selected file
                </Text>

                <Text fw={500}>{selectedFileName}</Text>

                <Text size="sm" c="dimmed">
                  {selectedFile}
                </Text>
              </>
            )}
          </Stack>

          <Group>
            <Button variant="default" onClick={handleSelectLv}>
              {currentLv ? "Change File" : "Select File"}
            </Button>

            <Button
              color="blue"
              disabled={!selectedFile}
              onClick={handleImportLv}
            >
              Import LV
            </Button>
          </Group>
        </Group>
      </Card>

      {currentLv && <LvStructure />}
    </Stack>
  );
}

export default ProjectDetailPage;
