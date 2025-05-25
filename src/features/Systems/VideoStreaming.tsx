import { Button, Select, TextInput, Radio } from "@mantine/core";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IconEdit } from "@tabler/icons-react";

const videoStreamingSchema = z.object({
  autoConnect: z.string(),
  bitrate: z.string(),
  mountPoint: z.string(),
  port: z.string(),
  resolution: z.string(),
  encoder: z.string(),
  frameRate: z.string(),
  individualIRStream: z.string(),
});

type FormValues = z.infer<typeof videoStreamingSchema>;

export default function VideoStreaming() {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(videoStreamingSchema),
    defaultValues: {
      autoConnect: "Disable",
      bitrate: "512 Kbps",
      mountPoint: "payload",
      port: "8554",
      resolution: "1920x1080",
      encoder: "H.264",
      frameRate: "",
      individualIRStream: "Disable",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Applied:", values);
    setIsEditing(false);
  };

  return (
    <>
      <p className="text-gray-600 mb-4">
        Configure video streaming settings including resolution, bitrate, and
        encoding options.
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
                Auto Connect
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="autoConnect"
                  control={control}
                  render={({ field }) => (
                    <Radio.Group {...field} className="flex-1">
                      <div className="flex gap-4">
                        <Radio
                          value="Disable"
                          label="Disable"
                          disabled={!isEditing}
                          classNames={{
                            label:
                              "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                          }}
                        />
                        <Radio
                          value="Enable"
                          label="Enable"
                          disabled={!isEditing}
                          classNames={{
                            label:
                              "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                          }}
                        />
                      </div>
                    </Radio.Group>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Bitrate
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="bitrate"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["256 Kbps", "512 Kbps", "1 Mbps", "2 Mbps"]}
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
                Mount Point
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  {...register("mountPoint")}
                  className="flex-1"
                  disabled={!isEditing}
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
                Port
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  {...register("port")}
                  className="flex-1"
                  disabled={!isEditing}
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
                Resolution
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="resolution"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["1280x720", "1920x1080", "2560x1440", "3840x2160"]}
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
                Encoder
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="encoder"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["H.264", "H.265"]}
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
                Frame Rate
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  {...register("frameRate")}
                  className="flex-1"
                  disabled={!isEditing}
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
                Individual IR Stream
              </label>
              <div className="flex items-center w-full flex-1">
                <Controller
                  name="individualIRStream"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="flex-1"
                      data={["Disable", "Enable"]}
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
