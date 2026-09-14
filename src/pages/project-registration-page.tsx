import {
  Button,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";

type ProjectRegistrationPageProps = {
  onCancel: () => void;
  onCreate: () => void;
};

function ProjectRegistrationPage({
  onCancel,
  onCreate,
}: ProjectRegistrationPageProps) {
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
      />

      <TextInput label="Project Number" placeholder="Optional" />

      <TextInput label="Client" placeholder="Optional" />

      <TextInput label="Location" placeholder="Optional" />

      <Textarea
        label="Description"
        placeholder="Optional project description"
        minRows={4}
      />

      <Group justify="flex-end">
        <Button variant="default" onClick={onCancel}>
          Cancel
        </Button>

        <Button color="blue" onClick={onCreate}>
          Create Project
        </Button>
      </Group>
    </Stack>
  );
}

export default ProjectRegistrationPage;
