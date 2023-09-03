"use client";
import History from "./History";
import Message from "./Message";
import Image from "@/node_modules/next/image";
import Link from "next/link";
import Chat from "./Chat";
import { useState } from "react";
export default function HomePage() {
  const data: { date: string; task: string }[] = [];
  const [temp, setData] = useState<string>("");
  function clean(text: any) {
    for (let i = 0; i < text.length; i++) {
      if (i + 2 < text.length && text.slice(i, i + 3) === "Day") {
        let date = "";
        let task = "";
        while (i < text.length && text[i] !== ":") {
          date += text[i];
          i += 1;
        }

        while (i + 2 < text.length && text.slice(i, i + 3) !== "Day") {
          task += text[i];
          i += 1;
        }

        i -= 1;

        const inputed = { date: date, task: task };
        data.push(inputed);
      }
    }
  }
  clean(temp);

  console.log(data);
  const encodedData = encodeURIComponent(JSON.stringify(data));
  return (
    <div className="flex justify-center mt-5">
      <div className="w-5/12">
        <img
          src="/Fresh Folk Teaching.png"
          alt={""}
          className="m-5 w-[200rem]"
        />
        <History />
      </div>
      <div className="w-7/12">
        <div className="mb-24 my-16">
          <p className="text-center text-3xl m-4">
            customized learning path just for you
          </p>
          <Link href={`/learning?data=${encodedData}`}>
            <button
              onClick={() => {
                clean(temp);
                console.log(data);
              }}
              className="ml-80 m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Add a Course
            </button>
          </Link>
        </div>
        <Chat setData={setData} />
      </div>
    </div>
  );
}
