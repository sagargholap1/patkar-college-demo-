import Image from "next/image";
import React from "react";
import Button from "../../../../Common/Buttons/Button";

import { config } from "../../config";

// Lib
import { getConfig } from "@lib/get-config";

const College = ({ config: configuration }: any) => {
  return (
    <section
      id={configuration.id}
      className=" py-[7rem]  relative flex flex-col gap-[10rem] "
    >
      {/* Top part */}

      <div className=" wrapper flex-row 900:flex-col 900:items-center flex justify-between gap-[5rem] ">
        <div className="flex flex-col gap-[3rem] w-[25%] items-center 900:w-full">
          <div className="text-h3 font-6">{configuration.title}</div>
          <div className="text-h6 font-4 ">{configuration.description}</div>
          <div className="self-center">
            <div className="flex flex-col gap-[2rem] items-start">
              {config.college.collegeButtons.map((button, index) => (
                <div
                  className="hover:text-primary hover:font-8 text-h6"
                  key={index}
                >
                  <Button type="text">{button.buttonText}</Button>
                </div>
              ))}
            </div>
          </div>
          <div className="self-center">
            <Button
              type="primary"
              icon="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              url="/"
            >
              {configuration.button_text_primary}
            </Button>
          </div>
        </div>

        {/* Image and Description */}
        <div className="flex flex-col justify-end items-end right-0 900:top-[0]  w-[100%]">
          <div className=" absolute 1100:relative w-[40%] 1100:w-[100%] 900:w-[100%] top-[7rem] right-0 1100:right-[0] ">
            <Image
              src={configuration.imgUrls.url}
              alt={configuration.imgUrls.alt}
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
          {/* <div>{config.college.imgUrls.text}</div> */}
          <div className=" bg-background border z-[1] w-[75%] 900:w-[100%] gap-[1rem] drop-shadow-lg ">
            {config.college.imgUrls.textDescriptions.map((text, index) => (
              <div
                className="gap-[.5rem] font-6 flex flex-col justify-between px-[2rem] py-[1rem] 1100:text-subtitle-2"
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*========================== Bottom Part ==========================*/}
      <div id="images-sec" className="wrapper">
        <div className="flex justify-between 1100:flex-col gap-[3rem]  1100:items-center">
          {config.college.imgUrls.images.map((image, index) => (
            <div key={index}>
              <div className="relative 1100:w-[50rem]">
                <Image src={image.imageUrl} alt={""} width={450} height={250} />
              </div>
              <div className="text-primary fill-red-600">
                <Button
                  fontBold={true}
                  type="text"
                  icon="https://img.icons8.com/ios-filled/512/long-arrow-right.png"
                  url="/"
                >
                  {image.title}
                </Button>
              </div>
              {/* <span className=" flex text-red-text text-[2.4rem] font-semibold">
                {image.title}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default College;

// w-[42rem] h-[23rem]
