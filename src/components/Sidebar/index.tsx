import { NavLink } from "@mantine/core";
import type { Icon } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { cn } from "../../utils/common";

interface SidebarItem {
  icon: Icon;
  label: string;
  link: string;
}

interface SidebarProps {
  items: SidebarItem[];
  className?: string;
}

export function Sidebar({ items, className }: SidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.link.replace("#", ""));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      className={cn(
        "w-56 bg-white border-r border-gray-200 p-4 sticky top-0",
        className
      )}
    >
      <div className="mr-4">
        {items.map((item) => {
          const Icon = item.icon;
          const sectionId = item.link.replace("#", "");

          return (
            <NavLink
              key={item.link}
              label={item.label}
              leftSection={<Icon size={20} stroke={1.5} />}
              variant="light"
              active={activeSection === sectionId}
              className={cn(
                "rounded-r-md hover:bg-gray-100 transition-colors",
                {
                  "bg-gray-100 font-medium border-l-2 border-l-sky-600":
                    activeSection === sectionId,
                }
              )}
              style={{
                borderLeft: "1px solid #ccc",
                borderColor:
                  activeSection === sectionId ? "var(--color-sky-600)" : "#ccc",
              }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(sectionId)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
