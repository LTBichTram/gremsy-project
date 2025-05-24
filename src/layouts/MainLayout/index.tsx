import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 48 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
