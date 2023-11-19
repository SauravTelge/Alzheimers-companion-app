"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Separator } from "../ui/separator";
import Bubbles from "./bubbles";
import { Input } from "../ui/input";

export default function ContextQuestions({
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
        <span className="text-blue-600">1.</span> question
      </div>
      <Input
        placeholder="Answer the question here."
        className="mt-8 h-14 w-full text-lg"
      />
      <Button size="lg" className="mt-8 text-lg  font-medium">
        Submit <ArrowRight className="ml-3 h-4 w-4" />
      </Button>

      <Separator className="my-4" />

      <Button
        size="lg"
        onClick={() => setProgress((prev) => prev + 1)}
        className="text-lg font-medium transition-all"
      >
        Continue <ArrowRight className="ml-3 h-4 w-4" />
      </Button>
    </>
  );
}
