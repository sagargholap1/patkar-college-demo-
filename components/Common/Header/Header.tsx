import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Config
// import { config } from "./config";

// Lib
import { getConfig } from "@lib/get-config";

const Header = () => {
  // Section Configuration
  // const { header: configuration } = config;

  const [configData, setConfigData] = useState<any>(null);

  // Update States
  useEffect(() => {
    getConfig("header").then((config: any) => {
      setConfigData(config);
    });
  }, []);

  return (
    <>
      <header className="bg-secondary text-white ">
        <nav className="h-[10rem] w-[90%] mx-auto  900:hidden flex items-center justify-between gap-[1rem] ">
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
        <nav className="h-[10rem] w-[90%] mx-auto hidden 900:flex items-center justify-between gap-[1rem] ">
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
            </div>
          </div>
        </nav>
        <nav className="bg-primary text-white h-[8rem]"></nav>
      </header>
    </>
  );
};

export default Header;
