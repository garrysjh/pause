/* eslint-disable react/no-unescaped-entities */
//use client
import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/navigation-bar";
import { ModeToggle } from "@/components/mode-toggle";
import { ResizableHero } from "@/components/resizable-hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1 p-8 mb-8 max-w-full">
        <div className="row">
          <ModeToggle />
        </div>
        <div className="row max-w-4/5 ">
          <NavigationBar />
        </div>
      </div>
      <div className="min-h-max flex-col items-center justify-between container col-auto">
        <h1 className="scroll-m-20 text-6xl font-semibold tracking-tight sm:text-7xl italic">
          Hi, I'm Garry Shi.
        </h1>
        <h4 className="scroll-m-20 text-4xl tracking-tight pt-6 pb-6">
          I'm a work in progress.
        </h4>
        {/* <h4 className="scroll-m-20 text-xl tracking-tight pl-16 pb-4">
      Just like this website.
    </h4> */}
        <div className="z-10 max-w-1xl text-2xl w-full items-center justify-between text-md lg:flex">
          Professionally, I am a student, but an aspiring developer, engineer,
          designer and artist. Praesent tempor eros sit amet lectus interdum,
          eget posuere ligula aliquam. Integer feugiat augue ut lacus tincidunt
          lobortis. Duis vestibulum arcu eu lectus posuere interdum. Phasellus
          eget aliquet diam. Praesent dapibus orci non nibh tincidunt, non
          viverra libero sodales. Sed ut sapien in est lobortis hendrerit et a
          felis. Curabitur bibendum tellus vitae pulvinar eleifend. Vivamus in
          orci blandit, porttitor erat ac, aliquam mauris. Nullam eu risus ac
          nisi porta lobortis ac vel risus. Nullam aliquet neque urna, et
          vulputate odio porta sit amet. Curabitur vitae suscipit urna. Sed
          dapibus dui id aliquet feugiat. Donec vulputate ornare sapien non
          mollis. Vestibulum arcu sapien, ultrices id sagittis a, imperdiet id
          est. Mauris tincidunt mauris id risus lacinia, eu suscipit enim
          aliquet. Integer porttitor dui a bibendum aliquam. Duis iaculis non
          nisl ut iaculis.
        </div>
        <div className="text-center"></div>
      </div>
    </main>
  );
}
