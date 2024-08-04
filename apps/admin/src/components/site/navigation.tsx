import type { User } from "@repo/database";
import React from "react";
import { ModeToggle } from "@/components/global/mode-toggle";

interface NavigationProps {
  user?: null | User;
}

function Navigation(_props: NavigationProps): JSX.Element {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between p-4">
      <aside className="flex items-center gap-2">
        <img alt="logo" height={40} src="./assets/ketone-logo.svg" width={40} />
        <span className="text-xl font-bold"> Ketone.</span>
      </aside>
      <aside className="flex items-center gap-2">
        <a
          className="bg-primary hover:bg-primary/80 rounded-md p-2 px-4 text-white"
          href="/"
        >
          Login
        </a>
        <ModeToggle />
      </aside>
    </div>
  );
}

export { Navigation };
