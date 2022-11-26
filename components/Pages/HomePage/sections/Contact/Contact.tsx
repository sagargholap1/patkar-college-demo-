import Image from "next/image";
import React from "react";

import { config } from "../../config";

// Lib
import { getConfig } from "@lib/get-config";
import Form from "@/components/Common/Form/Form";

const Contact = ({ config: configuration }: any) => {
  return (
    <section
      className=" py-[7rem] flex flex-col gap-[5rem] wrapper"
      id={configuration.id}
    >
      {/* DETAILS PART */}
      <div className="flex-col flex justify-end gap-[3rem] w-full">
        <div className="text-h3 font-6">{configuration.title}</div>
        <div className="text-base2 font-6 ">{configuration.description}</div>
        <div className="flex flex-row  1100:flex-col 1100:gap-[2rem]  justify-between items-center text-primary ">
          {configuration?.details?.map((detail: any, index: any) => (
            <div
              className="flex justify-evenly items-center gap-[1rem] font-7"
              key={index}
            >
              <div className="relative w-[1.5rem] h-[1.5rem]">
                <Image src={detail.img} alt={""} fill />
              </div>
              <div>{detail.text}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Form Part */}

      {/* <div>
        <FormsCard cardConfig={configuration.card} bgImage={""} />
      </div> */}

      <div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
