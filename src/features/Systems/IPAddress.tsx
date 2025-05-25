import { zodResolver } from "@hookform/resolvers/zod";
import { ActionIcon, Button, TextInput } from "@mantine/core";
import { IconCopy, IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ipAddressSchema = z.object({
  payloadAddress: z
    .string()
    .regex(/^(\d{1,3}\.){3}\d{1,3}$/, "Invalid IP address format")
    .refine((val) => {
      const nums = val.split(".").map(Number);
      return nums.every((num) => num >= 0 && num <= 255);
    }, "Each octet must be between 0 and 255"),
  netmask: z
    .string()
    .regex(/^(\d{1,3}\.){3}\d{1,3}$/, "Invalid netmask format")
    .refine((val) => {
      const nums = val.split(".").map(Number);
      return nums.every((num) => num >= 0 && num <= 255);
    }, "Each octet must be between 0 and 255"),
  gateway: z
    .string()
    .regex(/^(\d{1,3}\.){3}\d{1,3}$/, "Invalid gateway format")
    .refine((val) => {
      const nums = val.split(".").map(Number);
      return nums.every((num) => num >= 0 && num <= 255);
    }, "Each octet must be between 0 and 255"),
});

type FormValues = z.infer<typeof ipAddressSchema>;

export default function IPAddress() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(ipAddressSchema),
    defaultValues: {
      payloadAddress: "192.168.55.100",
      netmask: "255.255.255.0",
      gateway: "192.168.55.1",
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
        This form allows users to configure the network settings for the payload
        device, including the IP address, subnet mask, and gateway information.
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
                Payload Address
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.payloadAddress?.message}
                  {...register("payloadAddress")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                  disabled={!isEditing}
                  styles={{
                    input: {
                      color: "#000000 !important",
                      cursor: "default",
                      opacity: "1 !important",
                    },
                  }}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.payloadAddress)}
                  className="ml-2"
                >
                  <IconCopy size={16} />
                </ActionIcon>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Netmask
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.netmask?.message}
                  {...register("netmask")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                  disabled={!isEditing}
                  styles={{
                    input: {
                      color: "#000000 !important",
                      cursor: "default",
                      opacity: "1 !important",
                    },
                  }}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.netmask)}
                  className="ml-2"
                >
                  <IconCopy size={16} />
                </ActionIcon>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="sm:flex sm:items-center">
              <label className="block font-medium text-sm mb-1 sm:mb-0 sm:w-48">
                Gateway
              </label>
              <div className="flex items-center w-full flex-1">
                <TextInput
                  className="flex-1"
                  error={errors.gateway?.message}
                  {...register("gateway")}
                  classNames={{
                    input:
                      "!text-black disabled:!text-black disabled:opacity-100 cursor-default",
                  }}
                  disabled={!isEditing}
                  styles={{
                    input: {
                      color: "#000000 !important",
                      cursor: "default",
                      opacity: "1 !important",
                    },
                  }}
                />
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={() => handleCopy(values.gateway)}
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
