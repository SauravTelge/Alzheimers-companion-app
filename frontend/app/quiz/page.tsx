"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Question } from "@/lib/types";

import { testData } from "./testData";

export default function Page() {
  const [progress, setProgress] = useState(-1);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions(testData.data);
  }, []);

  const date = new Date();

  return (
    <main className="flex min-h-screen w-screen items-start justify-center overflow-x-hidden pt-24">
      <div className="flex h-full w-full max-w-screen-lg flex-col items-start justify-start px-4">
        <div className="flex w-full items-center justify-start">
          <div className="text-lg font-medium">
            Memory Quiz —{" "}
            <span className="text-blue-600">{date.toDateString()}</span>
          </div>
          <Button
            variant="secondary"
            disabled={progress <= -1}
            onClick={() => setProgress((prev) => prev - 1)}
            className="ml-6"
            size="icon"
          >
            <ArrowLeft className="h-4 w-4 " />
          </Button>
          <Button
            variant="secondary"
            disabled={progress >= questions.length - 1}
            onClick={() => setProgress((prev) => prev + 1)}
            className="ml-2"
            size="icon"
          >
            <ArrowRight className="h-4 w-4 " />
          </Button>
        </div>
        {progress <= -1 ? (
          <Button
            onClick={() => setProgress(0)}
            size="lg"
            disabled={questions.length <= 0}
            className="mt-8 text-lg  font-medium"
          >
            Start Quiz <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        ) : (
          <Question q={questions[progress]} progress={progress + 1} />
        )}
      </div>
    </main>
  );
}

function Question({ q, progress }: { q: Question; progress: number }) {
  return (
    <>
      <div className="mt-12 text-2xl font-medium">
        <span className="text-blue-600">{progress}.</span> {q.question}
      </div>
      <Input
        placeholder="Answer the question here."
        className="mt-8 h-14 w-full text-lg"
      />
      <Button size="lg" className="mt-8 text-lg  font-medium">
        Submit <ArrowRight className="ml-3 h-4 w-4" />
      </Button>
    </>
  );
}
