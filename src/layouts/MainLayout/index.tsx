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
    >
      <AppShell.Header px={16} mx="auto" h={48}>
        <div className="max-w-[1440px] size-full mx-auto">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header />
        </div>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main px={16} mx="auto">
        <div className="max-w-[1440px] size-full relative flex mx-auto">
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
