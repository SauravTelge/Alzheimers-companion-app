"use client";

import { BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="fixed flex h-16 w-screen items-center justify-center border-b border-border">
      <nav className="flex w-full max-w-screen-lg items-center justify-between px-4">
        <BrainCircuit className="h-6 w-6" />
        <div className="flex space-x-4 font-medium">
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </div>
  );
}
