import type { User } from "@repo/database";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/global/mode-toggle";

interface NavigationProps {
  user?: null | User;
}

function Navigation(_props: NavigationProps): JSX.Element {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between p-4">
      <aside className="flex items-center gap-2">
        <Image
          alt="logo"
          height={40}
          src="./assets/ketone-logo.svg"
          width={40}
        />
        <span className="text-xl font-bold"> Ketone.</span>
      </aside>
      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-2">
        <Link
          className="bg-primary hover:bg-primary/80 rounded-md p-2 px-4 text-white"
          href="/agency"
        >
          Login
        </Link>
        <ModeToggle />
      </aside>
    </div>
  );
}

export { Navigation };
