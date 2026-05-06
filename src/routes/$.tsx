import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/$")({
  component: SpaCatchAll,
});

function SpaCatchAll() {
  return (
    <ClientOnly fallback={<div className="min-h-screen" />}>
      <App />
    </ClientOnly>
  );
}
