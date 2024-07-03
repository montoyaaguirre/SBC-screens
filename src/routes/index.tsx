import { createFileRoute } from "@tanstack/react-router";
import { Workspace } from "../components/Workspace/Workspace";
import { originalPlatforms } from "../data/originalPlatforms";
import { z } from "zod";
import { sbcDevices } from "../data/emulationHardware";

const sbcKeys = Object.keys(sbcDevices);
const ORIGINAL_PLATFORM_KEYS = Object.keys(originalPlatforms);

const workspaceConfigSchema = z.object({
  console: z
    .enum([ORIGINAL_PLATFORM_KEYS[0], ...ORIGINAL_PLATFORM_KEYS])
    .catch(ORIGINAL_PLATFORM_KEYS[1]),
  device: z.enum([sbcKeys[0], ...sbcKeys]).catch(sbcKeys[0]),
  integerScaling: z.boolean().catch(true),
});

export const Route = createFileRoute("/")({
  component: () => <Workspace />,
  validateSearch: (search) => workspaceConfigSchema.parse(search),
});
