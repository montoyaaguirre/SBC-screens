import { createFileRoute } from "@tanstack/react-router";
import { Workspace } from "../components/Workspace/Workspace";

export const Route = createFileRoute("/")({
  component: () => <Workspace />,
});
