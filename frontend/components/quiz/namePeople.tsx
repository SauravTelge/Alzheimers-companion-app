"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Separator } from "../ui/separator";
import Bubbles from "./bubbles";

export default function NamePeople({
  setProgress,
  date,
}: {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  date: Date;
}) {
  return (
    <>
      <div className="flex w-full items-center justify-start">
        <Button
          variant="secondary"
          onClick={() => setProgress((prev) => prev - 1)}
          className="mr-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="text-lg font-medium">
          Memory Quiz —{" "}
          <span className="text-blue-600">{date.toDateString()}</span>
        </div>
      </div>

      <div className="mt-12 text-2xl font-medium">
        Can you identify who this is? (In the picture)
      </div>

      <Bubbles />

      <Button
        size="lg"
        onClick={() => setProgress((prev) => prev + 1)}
        className="mt-4 text-lg font-medium transition-all"
      >
        Continue <ArrowRight className="ml-3 h-4 w-4" />
      </Button>
    </>
  );
}
