import FileUpload from "@/components/form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center p-12">
      <FileUpload />
    </div>
  );
}
