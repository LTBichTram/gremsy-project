import { zodResolver } from "@hookform/resolvers/zod";
import { ActionIcon, Button, TextInput } from "@mantine/core";
import { IconCopy, IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const pipConfigSchema = z.object({
  positionX: z
    .string()
    .regex(/^\d+$/, "Must be a positive number")
    .refine((val) => Number(val) >= 0, "Must be a positive number"),
  positionY: z
    .string()
    .regex(/^\d+$/, "Must be a positive number")
    .refine((val) => Number(val) >= 0, "Must be a positive number"),
  width: z
    .string()
    .regex(/^\d+$/, "Must be a positive number")
    .refine((val) => Number(val) >= 0, "Must be a positive number"),
  height: z
    .string()
    .regex(/^\d+$/, "Must be a positive number")
    .refine((val) => Number(val) >= 0, "Must be a positive number"),
});

type FormValues = z.infer<typeof pipConfigSchema>;

export default function PipConfiguration() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(pipConfigSchema),
    defaultValues: {
      positionX: "12",
      positionY: "96",
      width: "23",
      height: "23",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Applied:", values);
    setIsEditing(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const values = watch();

  return (
    <>
      <p className="text-gray-600 mb-4">
        Configure the Picture-in-Picture position and size settings for the
        video display.
      </p>
      <div className="p-6 bg-gray-50 rounded-lg mx-auto relative">
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full max-w-lg mx-auto">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Position X
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.positionX?.message}
                  {...register("positionX")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:!opacity-100",
                  }}
                  disabled={!isEditing}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.positionX)}
                  className="ml-2"
                >
                  <IconCopy size={16} />
                </ActionIcon>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Position Y
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.positionY?.message}
                  {...register("positionY")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:!opacity-100",
                  }}
                  disabled={!isEditing}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.positionY)}
                  className="ml-2"
                >
                  <IconCopy size={16} />
                </ActionIcon>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Width
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.width?.message}
                  {...register("width")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:!opacity-100",
                  }}
                  disabled={!isEditing}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.width)}
                  className="ml-2"
                >
                  <IconCopy size={16} />
                </ActionIcon>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Height
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.height?.message}
                  {...register("height")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:!opacity-100",
                  }}
                  disabled={!isEditing}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.height)}
                  className="ml-2"
                >
                  <IconCopy size={16} />
                </ActionIcon>
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
