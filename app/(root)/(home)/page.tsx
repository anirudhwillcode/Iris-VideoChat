"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import React from 'react';

const Home: React.FC = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
  const date = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeZone: "Asia/Kolkata",
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[503px] rounded-[20px] bg-dark-2">
        <div className="flex flex-col justify-center items-start p-5 w-full lg:w-1/3">
          <div className="text-xl lg:text-3xl font-bold">{date}</div>
          <div className="text-lg lg:text-2xl font-semibold">{time}</div>
        </div>
        <div className="w-full lg:w-2/3 mt-5 lg:mt-0">
          <img
            src="/icons/chips.gif"
            alt="Hero GIF"
            className="w-60px h-full object-cover rounded-[20px]"
            style={{ animation: "infinite-loop 1s linear infinite" }}
          />
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
