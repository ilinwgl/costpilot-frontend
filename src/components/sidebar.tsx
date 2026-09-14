import {
  Button,
  Stack,
  Title,
} from "@mantine/core";

type SidebarProps = {
  activePage: string;
  onPageChange: (page: string) => void;
};

function Sidebar({
    activePage,
    onPageChange,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <Title order={2} mb="xl">
        CostPilot
      </Title>

      <Stack gap="xs">
        <Button
          variant={activePage === "dashboard" ? "light" : "subtle"}
          color={activePage === "dashboard" ? "blue" : "gray"}
          fullWidth
          fz={18}
          onClick={() => onPageChange("dashboard")}
        >
          Dashboard
        </Button>

        <Button
          variant={activePage === "projects" ? "light" : "subtle"}
          color={activePage === "projects" ? "blue" : "gray"}
          fullWidth
          fz={18}
          onClick={() => onPageChange("projects")}
        >
          Projects
        </Button>

        <Button
          variant={activePage === "settings" ? "light" : "subtle"}
          color={activePage === "settings" ? "blue" : "gray"}
          fullWidth
          fz={18}
          onClick={() => onPageChange("settings")}
        >
          Settings
        </Button>
      </Stack>
    </aside>
  );
}

export default Sidebar;