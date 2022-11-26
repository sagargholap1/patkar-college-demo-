import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Lodash
import _ from "lodash";

// Lib
import { getConfig } from "@lib/get-config";

//  Configuration
// import { config } from "./config";
import { useEffect } from "react";

const Footer = ({ config: configuration }: any) => {
  const [configData, setConfigData] = useState<any>(null);
  const [socialLinks, setSocialLinks] = useState<any>(null);
  const [otherLinks, setOtherLinks] = useState<any>(null);
  const [smallLinks, setSmallLinks] = useState<any>(null);
  // console.log(socialLinks, otherLinks, smallLinks);

  const updateLinks = (links: any) => {
    const socialLinks = links?.filter(
      (link: any) => link?.type === "Social Links"
    );
    const smallLinks = links?.filter(
      (link: any) => link?.type === "Small Links"
    );
    const otherLinks = links
      ?.map((link: any) => {
        if (link?.type !== "Social Links" && link?.type !== "Small Links") {
          return link;
        }
      })
      .filter((link: any) => link);

    setSocialLinks(socialLinks);
    setSmallLinks(smallLinks);
    setOtherLinks(_.groupBy(otherLinks, "type"));
  };

  // Update States
  useEffect(() => {
    getConfig("footer").then((config: any) => {
      setConfigData(config);
      updateLinks(config?.footer?.links);
    });
  }, []);

  return (
    <>
      {configData && otherLinks && socialLinks && otherLinks && (
        <>
          <footer className="bg-secondary text-background w-[100%] py-[3rem]">
            <div className="wrapper flex flex-col gap-[3rem]">
              <div
                id="social-icons"
                className="text-white-text flex gap-[5rem]"
              >
                <p className="text-h5">{configData.footer.header}</p>

                <ul id="logos" className="flex gap-[3rem] list-none ">
                  {socialLinks?.map(
                    ({ iconImage, name, url }: any, i: number) => (
                      <li key={i} className="text-white">
                        <Link href={url}>
                          <div className="hover:text-secondary-main transition-all text-head-5 text-white invert">
                            <Image
                              src={iconImage}
                              alt={name}
                              width={24}
                              height={24}
                            />
                          </div>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div
                id="actual-links"
                className="650:flex-col 650:justify-center 650:items-center 650:gap-[5rem] py-[3rem] border border-y-1 border-x-0 flex gap-[10rem] 650:text-center 650:text-[50%]"
              >
                {Object.keys(otherLinks)?.map((key: any, index: number) => (
                  <div key={index} className="flex flex-col gap-[1rem]">
                    <h3 className="text-body-1 text-secondary-main hover:text-primary-color transition-all uppercase cursor-default">
                      {key}
                    </h3>
                    <ul className="flex flex-col gap-[1rem] py-[1rem]">
                      {otherLinks[key]?.map((link: any, i: number) => (
                        <li key={i} className="py-[.5rem]">
                          <Link href={link?.url}>
                            <div className="hover:text-primary-color transition-all text-[1.6rem]">
                              {link?.name}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                id="footer-info"
                className="flex 650:flex-col 650:justify-center 650:items-center justify-between text-[1.6rem] font-medium"
              >
                <h1 className="font-medium">
                  {configData.footer.copyRightText}
                </h1>
                <ul className="flex items-center gap-[2rem] 650:flex-col 650:justify-center 650:items-center capitalize font-medium">
                  {smallLinks?.map((link: any, i: number) => (
                    <li key={i}>
                      <Link href={link?.url}>
                        <div className="hover:text-secondary-main transition-all">
                          {link?.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* <ul className="flex 650:flex-col 650:justify-center 650:items-center capitalize justify-around w-[45%]  font-light">
              <li>legal</li>
              <li>privacy policy</li>
              <li>Contact us</li>
              <li>Sitemap</li>
            </ul> */}
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
