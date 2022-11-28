import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Component
import SubHeader from "./SubHeader/SubHeader";

// Config
import { config } from "../Header/config";

// Lib
import { getConfig } from "@lib/get-config";

import { RiCloseCircleLine } from "react-icons/ri";

const Header = () => {
  // Section Configuration
  // const { header: configuration } = config;

  const [configData, setConfigData] = useState<any>(null);
  // States
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Update States
  useEffect(() => {
    getConfig("header").then((config: any) => {
      setConfigData(config);
    });
  }, []);

  return (
    <>
      <header className="bg-secondary text-white ">
        <nav className="h-[10rem] w-[90%] mx-auto wrapper 1200:hidden flex items-center justify-between gap-[1rem] ">
          {/* LEFT */}
          <div className="flex items-center gap-[3rem]">
            <Link href="/">
              <div className="inline-block relative overflow-hidden w-[6rem] h-[7rem]">
                <Image src={configData?.header?.collegeLogo} alt="Logo" fill />
              </div>
            </Link>
            <div className="font-6 900:hidden">
              <p>{configData?.header?.educationSocietyName}</p>
              <p>{configData?.header?.collegeNameLine1}</p>
              <p>{configData?.header?.collegeNameLine2}</p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex items-center gap-[3rem]">
            <div className="leading-[2.2rem]">
              <p className="text-right text-caption ">
                {configData?.header?.grade1}
              </p>

              <p className="text-right text-caption">
                {configData?.header?.grade2}
              </p>
            </div>
            <div className="inline-block relative overflow-hidden w-[6rem] h-[7rem]">
              <Image
                src={configData?.header?.gradeLogo}
                alt="Grade Logo"
                fill
              />
            </div>
          </div>
        </nav>

        {/* Mobile SubHeader */}
        <nav className="h-[10rem] w-[90%] mx-auto hidden 1200:flex items-center justify-between gap-[1rem] ">
          {/* LEFT */}
          <div className="flex items-center gap-[3rem]">
            <Link href="/">
              <div className="inline-block relative overflow-hidden w-[6rem] h-[7rem]">
                <Image src={configData?.header?.collegeLogo} alt="Logo" fill />
              </div>
            </Link>
          </div>
          {/* RIGHT */}
          <div className="flex items-center justify-center gap-[3rem]">
            <div className="inline-block relative overflow-hidden w-[3.2rem] h-[3.2rem]">
              <Image
                src={configData?.header?.searchicon}
                alt="Grade Logo"
                fill
              />
            </div>
            <div className="inline-block relative overflow-hidden w-[3.2rem] h-[3.2rem]">
              <Image src={configData?.header?.hamicon} alt="Grade Logo" fill />
              <nav className="wrapper flex items-center justify-between gap-[3rem]">
                {showMobileNav && (
                  <div
                    className={`hidden 1200:block w-screen h-screen fixed left-0 right-0 bottom-0 top-0 bg-black/20 backdrop-blur-sm z-[10]`}
                    onClick={() => setShowMobileNav(false)}
                  />
                )}

                <ul
                  className={`flex items-center justify-center gap-[5rem] text-body-2 text-textWhite font-6 1200:fixed 1200:top-0 1200:bottom-0 1200:right-0 1200:h-screen 1200:w-[40rem] 1200:shadow-xl 1200:bg-primary 1200:flex-col 1200:z-[15] 500:!w-screen ${
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
                    <li key={d.name} className={`h-[9rem] 1200:h-max text-h6`}>
                      <Link
                        href={d.url}
                        onClick={() => setShowMobileNav(false)}
                        className={`h-[9rem] 1200:h-max flex items-center justify-center `}
                      >
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div
                  className={`hidden 1200:block 1200:text-secondary 1200:text-[3.4rem] 1200:pointer`}
                  onClick={() => setShowMobileNav(true)}
                >
                  <Image
                    src={configData?.header?.hamicon}
                    alt="Grade Logo"
                    fill
                  />
                </div>
              </nav>
            </div>
          </div>
        </nav>
        <div className="1200:hidden">
          <SubHeader />
        </div>
      </header>
    </>
  );
};

export default Header;
