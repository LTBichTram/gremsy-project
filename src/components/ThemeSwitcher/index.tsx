import { UnstyledButton } from "@mantine/core";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "../../utils/common";

type ThemeOption = "auto" | "light" | "dark";

interface ThemeButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ThemeButton({ icon, label, isActive, onClick }: ThemeButtonProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      className={cn(
        "rounded-full p-1.5 transition-all duration-200",
        "hover:bg-gray-100 dark:hover:bg-gray-600",
        {
          "bg-white shadow-sm dark:bg-gray-700": isActive,
          "text-gray-600 dark:text-gray-400": !isActive,
        }
      )}
      aria-label={label}
      role="radio"
      aria-checked={isActive}
    >
      <div
        className={cn(
          "size-7 flex items-center justify-center rounded-full transition-all duration-200",
          {
            "bg-white": isActive,
          }
        )}
      >
        {icon}
      </div>
    </UnstyledButton>
  );
}

export default function ThemeSwitcher() {
  //   const { colorScheme, setColorScheme } = useMantineColorScheme()
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("auto");

  const handleThemeChange = (theme: ThemeOption) => {
    setSelectedTheme(theme);

    // switch (theme) {
    //   case "light":
    //     setColorScheme("light")
    //     break
    //   case "dark":
    //     setColorScheme("dark")
    //     break
    //   case "auto":
    //     setColorScheme("auto")
    //     break
    // }
  };

  const themes = [
    {
      key: "auto" as ThemeOption,
      label: "System theme",
      icon: <IconDeviceDesktop size={20} stroke={1.5} />,
    },
    {
      key: "light" as ThemeOption,
      label: "Light theme",
      icon: <IconSun size={20} stroke={1.5} />,
    },
    {
      key: "dark" as ThemeOption,
      label: "Dark theme",
      icon: <IconMoon size={20} stroke={1.5} />,
    },
  ];

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full p-0.5",
        "bg-gray-950/5 dark:bg-sky-500/10",
        "text-gray-950 dark:text-white"
      )}
      role="radiogroup"
      aria-label="Theme selection"
    >
      {themes.map((theme) => (
        <ThemeButton
          key={theme.key}
          icon={theme.icon}
          label={theme.label}
          isActive={selectedTheme === theme.key}
          onClick={() => handleThemeChange(theme.key)}
        />
      ))}
    </div>
  );
}
