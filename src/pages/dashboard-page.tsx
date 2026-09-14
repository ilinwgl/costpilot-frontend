import {
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

type DashboardPageProps = {
  onNewProject: () => void;
  onOpenProject: (projectId: string) => void;
};

function DashboardPage({ onNewProject, onOpenProject }: DashboardPageProps) {
  return (
    <Stack gap="xl">
      <Group justify="space-between">
        <div>
          <Title order={2}>Dashboard</Title>

          <Text c="dimmed">Overview of your CostPilot projects.</Text>
        </div>

        <Button color="blue" onClick={onNewProject}>
          New Project
        </Button>
      </Group>

      <div>
        <Title order={3} mb="md">
          Recent Projects
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
          <Card
            withBorder
            radius="md"
            padding="lg"
            style={{ cursor: "pointer" }}
            onClick={() => onOpenProject("project-1")}
          >
            <Stack gap="sm">
              <Title order={4}>Frankfurt Hbf</Title>

              <Text c="dimmed">42 Positions</Text>

              <Badge color="orange" variant="light">
                In Progress
              </Badge>
            </Stack>
          </Card>

          <Card
            withBorder
            radius="md"
            padding="lg"
            style={{ cursor: "pointer" }}
            onClick={() => onOpenProject("project-2")}
          >
            <Stack gap="sm">
              <Title order={4}>Demo Project</Title>

              <Text c="dimmed">18 Positions</Text>

              <Badge color="green" variant="light">
                Ready
              </Badge>
            </Stack>
          </Card>
        </SimpleGrid>
      </div>
    </Stack>
  );
}

export default DashboardPage;
