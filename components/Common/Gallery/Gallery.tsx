import Image from "next/image";
import React from "react";

import { config } from "../../Common/Gallery/config";

// Lib
import { getConfig } from "@lib/get-config";

// type Props = {
//   id: string;
// };

const Gallery = () => {
  const { gallery: configuration } = config;

  return (
    <>
      {/* <div className="flex gap-[5rem] 1100:flex-col h-full items-center justify-center max-h-[60rem] bg-red-400 overflow-hidden">
        <div className=" 1100:basis=0 h-[60rem]">
          <div className="relative w-[40rem]  h-[50rem] ">
            <Image
              src={configuration.image1.imgUrl}
              alt={configuration.image1.title}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="basis-3/4 900:basis=0 h-[60rem] flex-col w-full items-center justify-center ">
          <div className="flex gap-[5rem]  w-[100rem] flex-wrap">
            {configuration.images.map((item, index) => (
              <div key={index} className="relative w-[100%] h-[30rem]">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="bg-primary gap-[2rem] flex w-full">
        <div className="relative object-cover">
          <Image
            src={config.gallery.image1.imgUrl}
            alt={""}
            width={500}
            height={400}
            layout="responsive"
            // objectFit="cover"
          />
        </div>
        <div className="bg-orange-400 w-full ">
          <div className="flex flex-wrap gap-[2rem]">
            {configuration.images.map((item, index) => (
              <div
                key={index}
                className="relative w-[100%] h-[25rem] object-fill"
              >
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-3 grid-rows-2 gap-[2rem] w-full items-center  1100:grid-cols-1">
        <div className="w-full col-span-1 1100:row-span-1 row-span-2 object-cover ">
          <img
            src="https://i.ibb.co/VQMV4zH/Student.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className=" w-full  flex flex-col justify-between row-span-2 col-span-2 gap-[2rem]">
          <div className="w-full object-cover ">
            <img
              src="https://i.ibb.co/VjMGJRv/college-view.png"
              alt=""
              className=""
            />
          </div>
          <div className="flex 1100:flex-col items-center justify-between 1000:justify-center w-full gap-[2rem]">
            <div className="w-full 1000:w-[75%] object-cover">
              <img
                src="https://i.ibb.co/vvScMV9/canteen-facilities.png"
                alt=""
                className=""
              />
            </div>
            <div className="w-full 1000:w-[75%] object-cover ">
              <img
                src="https://i.ibb.co/8X59xnH/college-library.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      {/* <div className="grid grid-cols-3 1250:grid-cols-1 grid-rows-2 gap-[2rem] pt-[6rem] pb-[4rem]">
        <div className=" row-span-2  650:h-[35vh]  ">
          <div className="z-[0] relative w-[100%] h-[100%]">
            <Image
              src={config.gallery.image1.imgUrl}
              layout="fill"
              objectFit="cover"
              className=""
              alt=""
            />
          </div>
        </div>

        <div className="col-span-2 650:col-span-1  w-[100%] h-[35vh] bg-[100%] ">
          <div className="z-[0] relative w-[100%] h-[100%]">
            <Image
              src={config.gallery.image2.imgUrl}
              layout="fill"
              objectFit="cover"
              className=""
              alt=""
            />
          </div>
        </div>

        <div className="col-span-1 650:h-[35vh] w-[100%] h-[100%]">
          <div className="  relative w-[100%] h-[100%]">
            <Image
              src={config.gallery.image3.imgUrl}
              layout="fill"
              objectFit="cover"
              className=""
              alt=""
            />
          </div>
        </div>

        <div className="col-span-1 650:h-[35vh] w-[100%] h-[100%]">
          <div className=" first-letter: relative w-[100%] h-[100%]">
            <Image
              src={config.gallery.image4.imgUrl}
              layout="fill"
              objectFit="cover"
              className=""
              alt=""
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Gallery;

// if (config.gallery.id === "1") {
//   return (
//     <div className="w-[100%] h-full col-span-1 1100:row-span-1 row-span-2 bg-black ">
//       <img
//         src="https://i.ibb.co/VQMV4zH/Student.png"
//         alt=""
//         className="w-[full]"
//       />
//     </div>
//   );
// }
// if (config.gallery.id === "2") {
//   return (
//     <div className="w-[100%] h-full col-span-1 1100:row-span-1 row-span-2 bg-black ">
//       <img
//         src="https://i.ibb.co/VQMV4zH/Student.png"
//         alt=""
//         className="w-[full]"
//       />
//     </div>
//   );
// }
