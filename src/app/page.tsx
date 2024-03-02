//use client
import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/navigation-bar";
import { ModeToggle } from "@/components/mode-toggle";
import { ResizableHero } from "@/components/resizable-hero";
 
export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1 p-8 max-w-full">
        <div className="row">
          <ModeToggle />
        </div>
        <div className="row">
          <NavigationBar />
        </div>
      </div>
      <div className="min-h-max flex-col items-center justify-between pl-20 pr-20 container col-auto">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl italic">
      Hi, I'm Garry Shi.
    </h1>
    <h4 className="scroll-m-20 text-xl tracking-tight pb-4 pt-4">
      I'm a work-in-progress. Just like this website.
    </h4>
        <div className="z-10 max-w-1xl w-full items-center justify-between text-md lg:flex">
    
    
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          suscipit sapien sed neque consectetur molestie. Praesent tempor eros
          sit amet lectus interdum, eget posuere ligula aliquam. Integer feugiat
          augue ut lacus tincidunt lobortis. Duis vestibulum arcu eu lectus
          posuere interdum. Phasellus eget aliquet diam. Praesent dapibus orci
          non nibh tincidunt, non viverra libero sodales. Sed ut sapien in est
          lobortis hendrerit et a felis. Curabitur bibendum tellus vitae
          pulvinar eleifend. Vivamus in orci blandit, porttitor erat ac, aliquam
          mauris. Nullam eu risus ac nisi porta lobortis ac vel risus. Nullam
          aliquet neque urna, et vulputate odio porta sit amet. Curabitur vitae
          suscipit urna. Sed dapibus dui id aliquet feugiat. Donec vulputate
          ornare sapien non mollis. Vestibulum arcu sapien, ultrices id sagittis
          a, imperdiet id est. Mauris tincidunt mauris id risus lacinia, eu
          suscipit enim aliquet. Integer porttitor dui a bibendum aliquam. Duis
          iaculis non nisl ut iaculis. 
        </div>
        <div className="text-center">
        </div>
      </div>
    </main>
  );
}
