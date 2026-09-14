import {
  Button,
  Card,
  Stack,
  Text,
  Title,
} from "@mantine/core";

function ProjectDetailPage() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={2}>Project Detail</Title>

        <Text c="dimmed" mt="xs">
          Manage project information and Leistungsverzeichnis.
        </Text>
      </div>

      <Card withBorder radius="md" padding="xl">
        <Stack align="center" gap="md">
          <Title order={3}>
            No LV imported
          </Title>

          <Text c="dimmed">
            Import a Leistungsverzeichnis to continue.
          </Text>

          <Button color="blue">
            Import LV
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}

export default ProjectDetailPage;