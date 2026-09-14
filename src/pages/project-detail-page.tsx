import { useState } from "react";

import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { open } from "@tauri-apps/plugin-dialog";

function ProjectDetailPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  async function handleSelectLv() {
    const file = await open({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "Leistungsverzeichnis",
          extensions: ["xml", "x83"],
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
    // Upload file to backend
    // Parse LV
    // Save positions
    // Load LV structure
  }

  const fileName = selectedFile?.split(/[\\/]/).pop();

  return (
    <Stack gap="xl">
      <div>
        <Title order={2}>Project Detail</Title>

        <Text c="dimmed" mt="xs">
          Manage project information and Leistungsverzeichnis.
        </Text>
      </div>

      {!selectedFile ? (
        <Card withBorder radius="md" padding="xl">
          <Stack align="center" gap="md">
            <Title order={3}>No LV selected</Title>

            <Text c="dimmed">
              Select a Leistungsverzeichnis to continue.
            </Text>

            <Button
              color="blue"
              onClick={handleSelectLv}
            >
              Select LV
            </Button>
          </Stack>
        </Card>
      ) : (
        <Card withBorder radius="md" padding="xl">
          <Stack gap="md">
            <div>
              <Title order={3}>LV selected</Title>

              <Text c="dimmed" mt="xs">
                Ready to import.
              </Text>
            </div>

            <div>
              <Text fw={500}>
                {fileName}
              </Text>

              <Text size="sm" c="dimmed">
                {selectedFile}
              </Text>
            </div>

            <Group>
              <Button
                variant="default"
                onClick={handleSelectLv}
              >
                Change File
              </Button>

              <Button
                color="blue"
                onClick={handleImportLv}
              >
                Import LV
              </Button>
            </Group>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}

export default ProjectDetailPage;