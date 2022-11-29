// React
import React from "react";

// Next
import Image from "next/image";

// Components
import Background from "../../../../Common/Background/Background";
import Button from "../../../../Common/Buttons/Button";

// Config
// import { config } from "../../config";

// Libs
import { getConfig } from "@lib/get-config";

const CampusKatta = ({ config: configuration }: any) => {
  // JSX
  return (
    <section id={configuration?.id}>
      <Background
        backgroundImage={configuration?.backgroundImage}
        backgroundColor="bg-secondary/90"
      >
        <div className="wrapper flex flex-col gap-[4rem] py-[4rem]">
          <div className="flex flex-col gap-[2rem]">
            <div className="text-h3 font-6 leading-[1]">
              {configuration?.title}
            </div>
            <div className="text-h6 font-4">{configuration?.description}</div>
            <Button
              type="primary"
              icon="https://i.ibb.co/bbPNRfC/arrow-30-64.png"
            >
              {configuration?.buttonText}
            </Button>
          </div>

          <div className="grid grid-cols-12 gap-[2rem]">
            {configuration?.gallery?.images?.map((img: any, i: any) => {
              const imgOneClass =
                "col-span-4 row-span-2 1200:row-span-1 1200:col-span-6 900:!col-span-12 h-[82rem] 1200:h-[40rem] object-contain";
              const imgTwoClass =
                "col-span-8 1200:col-span-6 900:!col-span-12 900:!h-[45rem] h-[40rem]";
              const otherImgClass =
                "col-span-4 1200:col-span-6 900:!col-span-12 h-[40rem]";
              const finalClass = `${
                i === 0 ? imgOneClass : i === 1 ? imgTwoClass : otherImgClass
              } relative object-contain`;
              return (
                <div className={`${finalClass}`} key={i}>
                  <Image src={img.imgUrl} alt={img.title} fill />
                </div>
              );
            })}
          </div>
        </div>
      </Background>
    </section>
  );
};

export default CampusKatta;
