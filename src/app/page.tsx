//use client
import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/navigation-bar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main>
      <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1 p-8">
        <div className="row">
          <ModeToggle />
        </div>
        <div className="row">
          <NavigationBar />
        </div>
        
      </div>
      <div className="min-h-screen flex-col items-center justify-between p-20 container col-auto">
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
          iaculis non nisl ut iaculis. Curabitur iaculis enim in tristique
          gravida. Vivamus diam sem, cursus eget sodales ac, hendrerit eu risus.
          Donec maximus massa tellus, at finibus elit molestie et. Pellentesque
          pharetra egestas ornare. Vestibulum consequat eros turpis, sed
          lobortis orci rutrum in. Proin quis ante tortor. Mauris ultricies
          magna vehicula nisl fringilla, vitae porttitor turpis suscipit.
          Aliquam malesuada magna eu mauris dapibus volutpat nec et ante.
          Maecenas tincidunt libero eget condimentum consequat. Etiam mattis
          blandit mi, et tristique lacus. Vivamus vehicula erat eu diam
          sollicitudin, eu cursus augue fringilla. Aliquam pulvinar facilisis
          tellus vitae volutpat. Integer vitae leo sodales, consectetur nunc ac,
          venenatis ex. Ut sit amet ultrices quam, et eleifend leo. Nunc
          pellentesque auctor ullamcorper. Ut imperdiet metus nec libero
          ullamcorper, vitae ullamcorper risus hendrerit. Maecenas iaculis
          posuere convallis. Morbi ac bibendum neque. Vestibulum id lacinia
          augue. Morbi sit amet suscipit enim. Nunc pulvinar arcu nisi, non
          luctus est elementum at. Mauris posuere ut eros nec imperdiet. In
          posuere eu arcu sit amet aliquet. Curabitur libero quam, tempus vel
          magna sit amet, bibendum suscipit lacus. Praesent non faucibus mauris.
          Mauris tincidunt mauris vel libero egestas, eu sagittis odio posuere.
          Proin non sagittis purus, sit amet sodales lectus. Nam pretium et nisl
          efficitur vehicula. Vestibulum finibus enim eget ligula lobortis, sed
          congue tellus dignissim. Mauris arcu tellus, rhoncus id lacus nec,
          rutrum convallis nisi. Fusce eu diam vel ante interdum efficitur ut a
          risus. Praesent ultricies, velit non tincidunt vulputate, orci nisl
          suscipit tellus, vehicula tempus ligula odio a felis. Aliquam
          tristique augue eget dui gravida, sit amet placerat arcu luctus. Nunc
          ante leo, ultricies a risus vitae, pretium tincidunt nisl. Nunc
          interdum sem eget pharetra sodales. Praesent semper ipsum at lacinia
          auctor. Maecenas nec enim facilisis mi mollis venenatis sit amet quis
          ex. Donec non nibh blandit, tincidunt nisi id, luctus ligula. Nulla
          rhoncus tortor vitae tortor tempor elementum. Nunc eget nunc id mauris
          hendrerit tristique. Sed ac venenatis leo. Nullam nec tellus erat.
          Aliquam erat volutpat. Vivamus mollis quam pretium, tempus diam sit
          amet, rhoncus sem.
        </div>
        <div className="text-center">
          <Button>Test bUtton</Button>
        </div>
      </div>
    </main>
  );
}
