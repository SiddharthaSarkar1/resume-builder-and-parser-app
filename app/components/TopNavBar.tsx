"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";

const TopNavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <header
        aria-label="Site Header"
        className={cx(
          "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
          isHomePage && "bg-dot"
        )}
      >
        <div className="flex h-10 w-full items-center justify-between">
          <Link href="/">
            <h2 className="text-xl text-primary">
              Build And Parse Your Resume
            </h2>
          </Link>
          <nav
            aria-label="Site Nav Bar"
            className="flex items-center gap-2 text-sm font-medium"
          >
            
          </nav>
        </div>
      </header>
    </>
  );
};

export default TopNavBar;
