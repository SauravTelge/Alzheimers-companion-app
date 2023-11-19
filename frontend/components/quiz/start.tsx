"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Question } from "@/lib/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { DatePickerWithPresets } from "./datePicker";

export default function StartQuiz({
  progress,
  setProgress,
  date,
  setDate,
}: {
  progress: number;
  setProgress: (progress: number) => void;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  return (
    <>
      <div className="text-2xl font-medium">Start A Memory Quiz</div>

      <div className="mb-2 mt-8">
        Select which date you'd like to be tested on:
      </div>
      <DatePickerWithPresets date={date} setDate={setDate} />

      <Button
        onClick={() => setProgress(0)}
        size="lg"
        // disabled={questions.length <= 0}
        className="mt-8 text-lg  font-medium"
      >
        Start Quiz <ArrowRight className="ml-3 h-4 w-4" />
      </Button>
    </>
  );
}
