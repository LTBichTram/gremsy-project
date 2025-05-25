import {
  IconAddressBook,
  IconDatabase,
  IconMapPin,
  IconServer,
  IconSettings,
  IconVideo,
} from "@tabler/icons-react";
import { Sidebar } from "../../components/Sidebar";
import IPAddress from "../../features/Systems/IPAddress";
import Localization from "../../features/Systems/Localization";
import PipConfiguration from "../../features/Systems/PipConfiguration";
import Storage from "../../features/Systems/Storage";
import VideoStreaming from "../../features/Systems/VideoStreaming";
import GeneralSettings from "../../features/Systems/GeneralSettings";
import { Button } from "@mantine/core";

export default function Systems() {
  const sidebarItems = [
    {
      icon: IconAddressBook,
      label: "IP Address",
      link: "#ip-address",
      component: <IPAddress />,
    },
    {
      icon: IconVideo,
      label: "Video Streaming",
      link: "#video-streaming",
      component: <VideoStreaming />,
    },
    {
      icon: IconServer,
      label: "Storage",
      link: "#storage",
      component: <Storage />,
    },
    {
      icon: IconDatabase,
      label: "PiP Configuration",
      link: "#pip-configuration",
      component: <PipConfiguration />,
    },
    {
      icon: IconSettings,
      label: "General Settings",
      link: "#general-settings",
      component: <GeneralSettings />,
    },
    {
      icon: IconMapPin,
      label: "Localization",
      link: "#localization",
      component: <Localization />,
    },
  ];
  return (
    <>
      <Sidebar
        items={sidebarItems}
        className="fixed top-20 lg:inline-block hidden"
        actionSection={
          <div className="flex flex-col gap-3 w-full p-4">
            <div className="space-y-2">
              <Button
                fullWidth
                color="red"
                variant="light"
                className="hover:bg-red-100 transition-colors"
              >
                Factory Reset
              </Button>
              <Button
                fullWidth
                color="red"
                variant="light"
                className="hover:bg-red-100 transition-colors"
              >
                Restart Payload
              </Button>
              <Button
                fullWidth
                color="red"
                variant="light"
                className="hover:bg-red-100 transition-colors"
              >
                Reboot System
              </Button>
            </div>
            <div className="space-y-2">
              <Button
                fullWidth
                color="blue"
                variant="light"
                className="hover:bg-blue-100 transition-colors"
              >
                Export Settings
              </Button>
              <Button
                fullWidth
                color="blue"
                variant="light"
                className="hover:bg-blue-100 transition-colors"
              >
                Import Settings
              </Button>
            </div>
          </div>
        }
      />
      <div className="sm:pl-6 ml-0 lg:ml-64 ">
        {sidebarItems.map((item) => (
          <section
            key={item.link}
            id={item.link.replace("#", "")}
            className="pt-12 lg:py-24 lg:-my-12"
          >
            <h2 className="text-2xl font-bold mb-4">{item.label}</h2>
            {item.component}
          </section>
        ))}
      </div>
    </>
  );
}
