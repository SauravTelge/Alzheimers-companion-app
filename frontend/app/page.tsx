import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-start justify-center overflow-hidden pt-32">
      <nav className="flex w-full max-w-screen-lg flex-col items-center justify-start px-4">
        <h1 className="text-center text-4xl font-semibold">
          Alzheimer&apos;s Disease{" "}
          <span className="text-blue-600">Detection &amp; Monitoring</span>
        </h1>
      </nav>
    </main>
  );
}
