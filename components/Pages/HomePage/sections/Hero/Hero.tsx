import React from "react";

// Config
import { config } from "../../config";

//Components
import Background from "../../../../Common/Background/Background";
import Button from "../../../../Common/Buttons/Button";
import Link from "next/link";

// Carousel Library
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = ({ config: configuration }: any) => {
  let carouselRef: any;
  // Section Configuration
  // const { heroSection: configuration } = config;

  // Responsive
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  // Arrows
  const CustomLeftArrow = ({ ...rest }) => {
    return (
      <div className="absolute left-[0rem] top-[50%] translate-y-[-50%]">
        <Button
          type="primary"
          rounded={true}
          icon="https://i.ibb.co/LC8N71j/arrow-95-64.png"
          onClick={() => {
            carouselRef.previous();
          }}
        />
      </div>
    );
  };

  const CustomRightArrow = ({ ...rest }) => {
    return (
      <div className="absolute right-[0rem] top-[50%] translate-y-[-50%]">
        <Button
          type="primary"
          rounded={true}
          icon="https://i.ibb.co/bbPNRfC/arrow-30-64.png"
          onClick={() => {
            carouselRef.next();
          }}
        />
      </div>
    );
  };

  return (
    <section id={configuration?.id}>
      <Background
        backgroundImage={configuration?.backgroundImage}
        backgroundColor="bg-secondary/90"
      >
        <div className="flex flex-col items-center justify-center gap-[5rem]  h-[calc(100vh-10rem-8rem)] 1100:h-[100%] 1100:py-[5rem]">
          {/* Top Section */}
          <div className=" w-[90%] flex justify-between gap-[5rem]  items-center 900:items-start 900:flex-col-reverse">
            {/* LEFT */}
            <div className="flex flex-col basis-1/2 1500:gap-[5rem] gap-[6rem] ">
              <div className="1500:text-h3 font-5 text-h3 900:text-subtitle2 ">
                {configuration?.title}
              </div>
              <div className="1500:text-h5 text-h5 font-4 900:text-subtitle-2 ">
                {configuration?.description}
              </div>
              <div className="w-[25%] 1200:w-[50%] ">
                <Button
                  type="primary"
                  icon="https://i.ibb.co/bbPNRfC/arrow-30-64.png"
                  url="/"
                >
                  {configuration?.button_text_primary}
                </Button>
              </div>
            </div>
            {/* RIGHT */}
            <div className="basis-1/2 ">
              <div className="flex flex-col items-end 900:items-center justify-between  900:flex-row gap-[5rem]">
                <Button
                  type="outline"
                  icon="https://i.ibb.co/MVSwZ8X/Vector1.png"
                  url="/"
                >
                  {configuration?.button_text_outline1}
                </Button>
                <Button
                  type="outline"
                  icon="https://i.ibb.co/Rh3j5wd/Vector.png"
                  url="/"
                >
                  {configuration?.button_text_outline2}
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Notices Section */}

          <div className="flex items-center justify-center w-[90%]">
            {/* <div
              className="uppercase tracking-[.5rem] font-8 p-[3rem] text-[2rem] rotate-180  self-center text-white "
              style={{ writingMode: "vertical-rl" }}
            >
              {configuration.notice_header}
            </div> */}

            <div id="notices-container" className="w-[100%] justify-center">
              <Carousel
                ref={(el) => (carouselRef = el)} // Saving component ref to use component features such as next & prev
                responsive={responsive}
                swipeable={true}
                draggable={true}
                ssr={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                {configuration?.notices?.map((notice: any, index: any) => (
                  <Link href={notice.url}>
                    <div
                      className="1000:w-[20rem] 1000:h-[15rem] 1100:text-[1.4rem] 1350:w-[10rem] 1350:h-[21rem] 1600:w-[30rem] 1600:h-[21rem] w-[35rem] h-[21rem]  1500:text-[2rem] flex flex-col justify-between border-2 p-[2rem] text-[2.6rem] mx-auto"
                      key={index}
                    >
                      <p>{notice.message}</p>
                      <p>{notice.date}</p>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
};

export default Hero;
