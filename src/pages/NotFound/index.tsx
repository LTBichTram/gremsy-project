import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="h-screen flex items-center justify-center">
      <div className="text-center">
        <Title className="text-9xl font-bold text-gray-200">404</Title>
        <Title className="mt-4">Page not found</Title>
        <Text color="dimmed" size="lg" className="mt-2">
          The page you are looking for doesn't exist or has been moved
        </Text>
        <Group justify="center" className="mt-6">
          <Button variant="subtle" size="md" onClick={() => navigate(-1)}>
            Go back
          </Button>
          <Button variant="filled" size="md" onClick={() => navigate("/")}>
            Take me home
          </Button>
        </Group>
      </div>
    </Container>
  );
}
