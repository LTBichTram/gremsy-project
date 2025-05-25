import { ActionIcon } from "@mantine/core";
import { IconSettings, IconUser } from "@tabler/icons-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { path } from "../../routes/path";
import { cn } from "../../utils/common";
import ThemeSwitcher from "../ThemeSwitcher";

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
  return (
    <header className="flex items-center justify-between px-4 bg-white size-full text-sm gap-6">
      <Link to={path.home} className="flex-shrink-0 cursor-pointer">
        <img
          src={logo}
          alt="Gremsy Logo"
          className="h-10 w-auto bg-sky-600 rounded-sm"
        />
      </Link>
      <nav className="flex-1 ml-8">
        <ul className="flex gap-6 items-center">
          {menu.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  cn(
                    `text-gray-700 hover:text-sky-600 font-medium transition-colors`,
                    isActive && "text-sky-600"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4 ml-4">
        <div className="flex items-center gap-2 ml-4">
          <ActionIcon
            size={30}
            variant="default"
            color="gray"
            aria-label="Toggle theme"
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
    </header>
  );
}
