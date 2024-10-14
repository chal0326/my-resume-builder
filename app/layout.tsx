import { Container } from '@mantine/core';

export default function Layout({ children }) {
  return (
    <Container size="md" padding="lg">
      <header className="my-6 text-center">
        <h1 className="text-4xl font-bold">Resume Builder</h1>
      </header>
      {children}
    </Container>
  );
}