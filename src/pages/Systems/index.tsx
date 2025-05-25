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
      />
      <div className="sm:px-6 ml-0 lg:ml-64 ">
        {sidebarItems.map((item) => (
          <section
            key={item.link}
            id={item.link.replace("#", "")}
            className="pt-12 lg:pt-24 lg:-mt-12"
          >
            <h2 className="text-2xl font-bold mb-4">{item.label}</h2>
            {item.component}
          </section>
        ))}
      </div>
    </>
  );
}
