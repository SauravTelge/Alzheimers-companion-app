"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex min-h-screen w-screen items-start justify-center overflow-x-hidden pt-24">
      <div className="flex h-full w-full max-w-screen-lg flex-col items-start justify-start px-4">
        <div className="grid  w-full grid-cols-3 gap-3 pb-8">
          <DashboardCard link="quiz" navigate={navigate}>
            <div className="flex items-center text-lg font-medium">
              Daily Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </DashboardCard>
          <DashboardCard link="logs" navigate={navigate}>
            <div className="flex items-center text-lg font-medium">
              Activity Logs
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </DashboardCard>
          <DashboardCard link="contacts" navigate={navigate}>
            <div className="flex items-center text-lg font-medium">
              Friends &amp; Contacts
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </DashboardCard>
          <DashboardCard className="col-span-3 !h-72">
            <div className="flex items-center text-lg font-medium">
              Memory Scores
            </div>
            <div className="text-red-500">line graph over time</div>
          </DashboardCard>
        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  children,
  link,
  navigate,
  className,
}: {
  children: React.ReactNode;
  link?: string;
  navigate?: (path: string) => void;
  className?: string;
}) {
  return (
    <Card
      onClick={link && navigate ? () => navigate(link) : undefined}
      tabIndex={0}
      className={`${className} h-52 w-full ${
        link && navigate ? "cursor-pointer" : ""
      } p-4`}
    >
      {children}
    </Card>
  );
}
