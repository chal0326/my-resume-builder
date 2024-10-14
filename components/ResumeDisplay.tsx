import { Card, Text, Title, Group, Badge, Box } from '@mantine/core';

export default function ResumeDisplay({ jobs, template }) {
  const isModern = template === 'modern';

  return (
    <Box className="my-6">
      {jobs.map((job, index) => (
        <Card
          key={index}
          shadow={isModern ? 'xl' : 'sm'}
          padding={isModern ? 'xl' : 'lg'}
          className="mb-6"
        >
          <Group position="apart">
            <Title order={3} className="text-lg font-semibold">
              {job.title}
            </Title>
            <Badge color="blue" variant="light">
              {job.company}
            </Badge>
          </Group>
          <Text className="mt-2 text-gray-600">{job.startDate} - {job.endDate}</Text>
          <Text className="mt-4">{job.description}</Text>
        </Card>
      ))}
    </Box>
  );
}
