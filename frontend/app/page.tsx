import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-start justify-center overflow-hidden pt-32">
      <div className="flex w-full max-w-screen-lg flex-col items-center justify-start px-4">
        <h1 className=" text-center text-5xl font-semibold">
          <span className="text-blue-600">
            Alzheimer&apos;s Disease Monitoring
          </span>
          <br />
          Through Memories and AI
        </h1>
        <div className="mt-8 flex space-x-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </main>
  );
}
