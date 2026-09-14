import {
  Button,
  Stack,
  Title,
} from "@mantine/core";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Title order={2} mb="xl">
        CostPilot
      </Title>

      <Stack gap="xs">
        <Button
          variant="light"
          color="blue"
          fullWidth
          fz={18}
        >
          Dashboard
        </Button>

        <Button
          variant="subtle"
          color="gray"
          fullWidth
          fz={18}
        >
          Projects
        </Button>

        <Button
          variant="subtle"
          color="gray"
          fullWidth
          fz={18}
        >
          Settings
        </Button>
      </Stack>
    </aside>
  );
}

export default Sidebar;