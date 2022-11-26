import React from "react";
import Link from "next/link";
import Image from "next/image";

// Types
type Props = {
  children?: React.ReactNode;
  icon?: string;
  type?: "primary" | "outline" | "text";
  htmlType?: "submit" | "button" | "reset";
  url?: string;
  text?: string;
  bgColor?: string;
  rounded?: boolean;
  onClick?: () => any;
  fullWidth?: boolean;
  fontBold?: boolean;
};

const Button = ({
  fullWidth,
  children,
  bgColor,
  icon,
  type,
  htmlType,
  url,
  rounded,
  fontBold,
  onClick,
}: Props) => {
  // Button Wrapper Component -> LINK | BUTTON
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (url) {
      return (
        <Link href={url}>
          <div>{children}</div>
        </Link>
      );
    } else {
      return (
        <button
          type={htmlType ? htmlType : "button"}
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          {children}
        </button>
      );
    }
  };

  // Button Classes/Styles
  const baseClass = `${fullWidth ? "w-full" : "w-max"} ${
    bgColor ? bgColor : "bg-primary-main"
  } ${rounded ? "rounded-full p-[1rem]" : "rounded-sm px-[2rem] py-[0.8rem]"} ${
    fontBold ? "font-6" : "font-5"
  }  1500:text-h6 text-h5 `;
  const primaryButtonClass = `${baseClass} bg-primary text-white`;
  const outlineButtonClass = `${baseClass} border-[2px]`;
  const textButtonClass = `${baseClass}`;
  const finalClass =
    type === "primary"
      ? primaryButtonClass
      : type === "outline"
      ? outlineButtonClass
      : type === "text"
      ? textButtonClass
      : primaryButtonClass;

  // JSX
  return (
    <Wrapper>
      <div className={finalClass}>
        <div className="flex items-center justify-center gap-[1rem]">
          {children && <span>{children}</span>}
          {icon && (
            <div className="relative w-[1.5rem] h-[1.5rem] align-middle">
              <Image src={icon} alt="Icon" fill />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Button;
