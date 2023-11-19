"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Question } from "@/lib/types";

import StartQuiz from "@/components/quiz/start";
import PersonSelect from "@/components/quiz/personSelect";
import NamePeople from "@/components/quiz/namePeople";
import ContextQuestions from "@/components/quiz/contextQuestions";

export default function Page() {
  const [progress, setProgress] = useState(-1);

  const [date, setDate] = useState<Date>(new Date());

  return (
    <main className="flex min-h-screen w-screen items-start justify-center overflow-x-hidden pt-24">
      <div className="flex h-full w-full max-w-screen-lg flex-col items-start justify-start px-4">
        {progress <= -1 ? (
          <StartQuiz
            progress={progress}
            setProgress={setProgress}
            date={date}
            setDate={setDate}
          />
        ) : progress === 0 ? (
          <PersonSelect setProgress={setProgress} date={date} />
        ) : progress === 1 ? (
          <NamePeople setProgress={setProgress} date={date} />
        ) : progress === 2 ? (
          <ContextQuestions setProgress={setProgress} date={date} />
        ) : null}
      </div>
    </main>
  );
}

// function Question({ q, progress }: { q: Question; progress: number }) {
//   return (
//     <>
//       <div className="mt-12 text-2xl font-medium">
//         <span className="text-blue-600">{progress}.</span> {q.question}
//       </div>
//       <Input
//         placeholder="Answer the question here."
//         className="mt-8 h-14 w-full text-lg"
//       />
//       <Button size="lg" className="mt-8 text-lg  font-medium">
//         Submit <ArrowRight className="ml-3 h-4 w-4" />
//       </Button>
//     </>
//   );
// }
