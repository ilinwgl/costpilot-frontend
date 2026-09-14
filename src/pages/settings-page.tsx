import { Text, Title } from "@mantine/core";

function SettingsPage() {
  return (
    <>
      <Title order={2}>Settings</Title>
      <Text c="dimmed" mt="xs">
        Configure CostPilot.
      </Text>
    </>
  );
}

export default SettingsPage;