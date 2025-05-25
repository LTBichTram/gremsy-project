import { ActionIcon, Menu, Drawer, Burger } from "@mantine/core";
import { IconSettings, IconUser, IconDots } from "@tabler/icons-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { path } from "../../routes/path";
import { cn } from "../../utils/common";
import ThemeSwitcher from "../ThemeSwitcher";
import React from "react";

const menu = [
  { label: "Systems", link: path.systems },
  { label: "Mavlinks", link: path.mavlink },
  { label: "Gimbal", link: path.gimbal },
  { label: "IR Camera", link: path.irCamera },
  { label: "Media Files", link: path.listFile },
  { label: "Remote Channels", link: path.sbusChanels },
  { label: "Custom Models", link: path.customModels },
  { label: "OTA Update", link: path.updateOta },
];

export default function Header() {
  const [visibleItems, setVisibleItems] = React.useState(menu);
  const [overflowItems, setOverflowItems] = React.useState<typeof menu>([]);
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (!navRef.current) return;

      const navWidth = navRef.current.offsetWidth;
      const isXlScreen = window.innerWidth >= 1280;
      const isMobileScreen = window.innerWidth <= 640;

      if (isMobileScreen) {
        setVisibleItems([]);
        setOverflowItems(menu);
      } else if (isXlScreen) {
        setVisibleItems(menu);
        setOverflowItems([]);
      } else {
        const itemWidth = 120;
        const maxItems = Math.floor(Math.min(navWidth, 800) / itemWidth);
        setVisibleItems(menu.slice(0, maxItems));
        setOverflowItems(menu.slice(maxItems));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white size-full text-sm">
      <Link to={path.home} className="flex-shrink-0 cursor-pointer">
        <img
          src={logo}
          alt="Gremsy Logo"
          className="h-9 sm:h-10 w-auto bg-sky-600 rounded-sm"
        />
      </Link>
      <nav className="flex-1 ml-8 hidden sm:block" ref={navRef}>
        <ul className="flex gap-6 items-center">
          {visibleItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  cn(
                    `text-gray-700 hover:text-sky-600 font-medium transition-colors text-nowrap`,
                    isActive && "text-sky-600"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {overflowItems.length > 0 && (
            <li>
              <Menu position="bottom-end" shadow="md">
                <Menu.Target>
                  <ActionIcon size={30} variant="default" color="gray">
                    <IconDots size={20} stroke={1.5} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  {overflowItems.map((item) => (
                    <Menu.Item
                      key={item.label}
                      component={NavLink}
                      to={item.link}
                    >
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          cn(
                            `text-gray-700 hover:text-sky-600 font-medium transition-colors text-nowrap`,
                            isActive && "text-sky-600"
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            </li>
          )}
        </ul>
      </nav>
      <div className="flex items-center gap-4 ml-4">
        <div className="block sm:hidden">
          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened(true)}
            size="sm"
          />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <ActionIcon
            size={30}
            variant="default"
            color="gray"
            aria-label="User profile"
          >
            <IconUser size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size={30}
            variant="default"
            color="gray"
            aria-label="Settings"
          >
            <IconSettings size={20} stroke={1.5} />
          </ActionIcon>
          <ThemeSwitcher />
        </div>
      </div>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        size="xs"
        position="left"
        title="Menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex-1">
            {menu.map((item) => (
              <NavLink
                key={item.label}
                to={item.link}
                onClick={() => setDrawerOpened(false)}
                className={({ isActive }) =>
                  cn(
                    `block py-3 px-4 text-gray-700 hover:text-sky-600 hover:bg-sky-50 font-medium transition-colors border-l border-gray-200 rounded-r-md`,
                    isActive && "text-sky-600 bg-sky-50 border-l border-sky-600"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="sm:hidden mt-auto px-4 py-5">
            <div className="flex items-center gap-4">
              <ActionIcon
                size={34}
                variant="default"
                color="gray"
                aria-label="User profile"
                className="hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                <IconUser size={20} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size={34}
                variant="default"
                color="gray"
                aria-label="Settings"
                className="hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                <IconSettings size={20} stroke={1.5} />
              </ActionIcon>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
