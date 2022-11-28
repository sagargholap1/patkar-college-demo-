import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// Icons
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

// Configuration
import { config } from "../config";

const Header = () => {
  // Next Router
  const router = useRouter();

  // States
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="bg-primary">
      <nav className="wrapper flex items-center justify-between gap-[3rem]">
        {showMobileNav && (
          <div
            className={`hidden 1200:block w-screen h-screen fixed left-0 right-0 bottom-0 top-0 bg-black/20 backdrop-blur-sm z-[10]`}
            onClick={() => setShowMobileNav(false)}
          />
        )}

        <ul
          className={` w-[75%] flex items-center justify-between gap-[5rem] text-body-2 text-textWhite font-6 1200:fixed 1200:top-0 1200:bottom-0 1200:right-0 1200:h-screen 1200:w-[40rem] 1200:shadow-xl 1200:bg-primary 1200:flex-col 1200:z-[15] 500:!w-screen ${
            showMobileNav ? `1200:flex` : `1200:hidden`
          }`}
        >
          <li
            className={`hidden 1200:block 1200:text-[3.5rem] 1200:pointer 1200:absolute 1200:top-[2rem] 1200:right-[2rem] 1200:text-secondary`}
            onClick={() => setShowMobileNav(false)}
          >
            <RiCloseCircleLine />
          </li>
          {config.header.mainLinks.map((d) => (
            <li
              key={d.name}
              className={`h-[9rem] 1200:h-max text-h6 flex items-center justify-between gap-[.5rem]`}
            >
              <Link
                href={d.url}
                onClick={() => setShowMobileNav(false)}
                className={`h-[9rem] 1200:h-max flex items-center justify-center ${
                  router.pathname === d.url ? "text-secondary" : ""
                }`}
              >
                {d.name}
              </Link>
              <div className="relative w-[1.5rem] h-[1.5rem] font-3">
                <Image src={config.header.downicon} alt="Icon" fill />
              </div>
            </li>
          ))}
        </ul>
        <div className="inline-block relative overflow-hidden w-[3.2rem] h-[3.2rem]">
          <Image src={config?.header?.searchicon} alt="Grade Logo" fill />
        </div>

        <div
          className={`hidden 1200:block 1200:text-secondary 1200:text-[3.4rem] 1200:pointer`}
          onClick={() => setShowMobileNav(true)}
        >
          <HiOutlineViewGrid />
        </div>
      </nav>
    </header>
  );
};
export default Header;
