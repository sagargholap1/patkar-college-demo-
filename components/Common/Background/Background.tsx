import React from "react";
import Image from "next/image";

// Types
type Props = {
  backgroundImage: string;
  backgroundColor: string;
  children: React.ReactNode;
  containerClasses?: string;
  mainClasses?: string;
};

const Background = ({
  backgroundImage,
  backgroundColor,
  children,
  containerClasses,
  mainClasses,
}: Props) => {
  const defaultClass = "text-white z-[1]";

  return (
    <div className={`relative z-[1] ${mainClasses}`}>
      <div
        className={`z-[-1] w-full h-full absolute inset-0 ${backgroundColor}`}
      />
      <div className="z-[-2] absolute inset-0">
        <Image
          src={backgroundImage as string}
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={
          containerClasses
            ? `${containerClasses} ${defaultClass}`
            : defaultClass
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
