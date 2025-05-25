import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Select } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const generalSettingsSchema = z.object({
  lrfUnit: z.string(),
  gpsUnit: z.string(),
  trackingAutozoom: z.string(),
  cameraDefinitionLocation: z.string(),
});

type FormValues = z.infer<typeof generalSettingsSchema>;

export default function GeneralSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const { handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues: {
      lrfUnit: "Meters",
      gpsUnit: "Decimal Degrees - DD",
      trackingAutozoom: "Enable",
      cameraDefinitionLocation: "Online",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Applied:", values);
    setIsEditing(false);
  };

  return (
    <>
      <p className="text-gray-600 mb-4">
        Configure general settings including LRF unit, GPS unit, tracking
        autozoom, and camera definition location.
      </p>
      <div className="p-6 py-12 bg-gray-50 rounded-lg mx-auto relative">
        {!isEditing && (
          <div className="flex justify-end mb-4 absolute top-2 right-2">
            <Button
              variant="outline"
              color="gray"
              size="xs"
              leftSection={<IconEdit size={16} />}
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit
            </Button>
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mx-auto flex flex-col items-center"
        >
          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                LRF Unit
              </label>
              <div className="flex items-center w-full flex-1">
                <Select
                  className="flex-1"
                  data={["Meters"]}
                  disabled={!isEditing}
                  defaultValue="Meters"
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                GPS Unit
              </label>
              <div className="flex items-center w-full flex-1">
                <Select
                  className="flex-1"
                  data={["Decimal Degrees - DD"]}
                  disabled={!isEditing}
                  defaultValue="Decimal Degrees - DD"
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Tracking Autozoom
              </label>
              <div className="flex items-center w-full flex-1">
                <Select
                  className="flex-1"
                  data={["Enable", "Disable"]}
                  disabled={!isEditing}
                  defaultValue="Enable"
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Camera Definition Location
              </label>
              <div className="flex items-center w-full flex-1">
                <Select
                  className="flex-1"
                  data={["Online", "Offline"]}
                  disabled={!isEditing}
                  defaultValue="Online"
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="default"
                color="gray"
                onClick={() => setIsEditing(false)}
                w={120}
              >
                Cancel
              </Button>
              <Button type="submit" color="blue" w={120}>
                Apply
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
