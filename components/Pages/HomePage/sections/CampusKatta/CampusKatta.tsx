import Gallery from "@/components/Common/Gallery/Gallery";
import React from "react";
import Background from "../../../../Common/Background/Background";
import Button from "../../../../Common/Buttons/Button";

// Config
import { config } from "../../config";

// Lib
import { getConfig } from "@lib/get-config";

const CampusKatta = ({ config: configuration }: any) => {
  // Section Configuration

  return (
    <section id={configuration?.id}>
      <Background
        backgroundImage={configuration?.backgroundImage}
        backgroundColor="bg-secondary/90"
      >
        <div className="wrapper  flex flex-col justify-center py-[7rem] gap-[5rem] ">
          <div className=" flex justify-between gap-[5rem] basis-1/4">
            <div className="flex flex-col gap-[3rem]">
              <div className="text-h3 font-6">{configuration.title}</div>
              <div className="text-h6 font-4 ">{configuration.description}</div>
            </div>
            <div>
              <Button
                type="primary"
                icon="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                url="/"
              >
                {configuration.buttonText}
              </Button>
            </div>
          </div>

          {/* <div className="0">
            <Gallery />
          </div> */}
        </div>
      </Background>
    </section>
  );
};

export default CampusKatta;
