import { Button, Select } from "@mantine/core";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IconEdit } from "@tabler/icons-react";

const storageSchema = z.object({
  irImageType: z.string(),
  videoFormat: z.string(),
  recordFormat: z.string(),
  recordBitrateEO: z.string(),
  recordBitrateIR: z.string(),
});

type FormValues = z.infer<typeof storageSchema>;

export default function Storage() {
  const [isEditing, setIsEditing] = useState(false);
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(storageSchema),
    defaultValues: {
      irImageType: "JPEG",
      videoFormat: "MP4",
      recordFormat: "H.265",
      recordBitrateEO: "20 Mbps",
      recordBitrateIR: "4 Mbps",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Applied:", values);
    setIsEditing(false);
  };

  return (
    <>
      <p className="text-gray-600 mb-4">
        Configure storage settings including image type, video format, and
        recording options.
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
                Thermal Image Format
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="irImageType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["JPEG", "PNG", "TIFF", "RAW"]}
                      disabled={!isEditing}
                      classNames={{
                        input:
                          "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Video Container Format
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="videoFormat"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["MP4", "MOV", "AVI", "MKV"]}
                      disabled={!isEditing}
                      classNames={{
                        input:
                          "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Video Codec Format
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="recordFormat"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["H.265", "H.264", "MJPEG", "ProRes"]}
                      disabled={!isEditing}
                      classNames={{
                        input:
                          "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                EO Camera Bitrate
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="recordBitrateEO"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={[
                        "10 Mbps",
                        "15 Mbps",
                        "20 Mbps",
                        "25 Mbps",
                        "30 Mbps",
                      ]}
                      disabled={!isEditing}
                      classNames={{
                        input:
                          "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Thermal Camera Bitrate
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="recordBitrateIR"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["2 Mbps", "4 Mbps", "6 Mbps", "8 Mbps", "10 Mbps"]}
                      disabled={!isEditing}
                      classNames={{
                        input:
                          "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                      }}
                    />
                  )}
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
