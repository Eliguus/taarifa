"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "./Card";
import ProgressBar from "./Progressbar";

export default function LearningPage() {
  const router = useRouter();
  const searc = useSearchParams();
  const receivedData = searc.get("data");
  const decodedData = JSON.parse(decodeURIComponent(receivedData));
  return (
    <>
      <div className="w-1/2 m-8">
        <ProgressBar value={50} />
      </div>
      <p className="text-4xl text-left m-8">Course Detail</p>
      <div className="flex flex-wrap">
        {decodedData.map((item: any) => (
          <Card key={item.date} date={item.date} task={item.task} />
        ))}
      </div>
    </>
  );
}
