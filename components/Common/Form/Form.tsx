import React from "react";

// Icons
import { MdOutlineClose } from "react-icons/md";

// React Toastify
import { toast } from "react-toastify";
import Button from "../Buttons/Button";

// Types
import { config } from "../../Common/Form/formconfig";

const Form = () => {
  const { contactForm: configuration } = config;

  // States
  // const { activeCard, card1, card2 } = cardConfig;
  // const currentCard = cardNum === 1 ? card1 : cardNum === 2 ? card2 : card1;
  // const currentCardKey =
  //   cardNum === 1 ? "card1" : cardNum === 2 ? "card2" : "card1";

  // Handle Change
  const handleChange = (label: string, value: string | number) => {
    const inputs = configuration.form.content.inputs.map((input) => {
      if (input.label === label) return { ...input, value };
      else return input;
    });
  };

  return (
    <>
      <div className="w-[25%] flex flex-col content-center gap-[2rem] border p-[2rem]">
        {/* <h4 className="text-center">{currentCard.content.heading}</h4> */}

        {configuration.form.content.inputs.map((input, index) => {
          const inputClass =
            "bg-transparent focus:outline-none border-2 border-secondary-main focus:border-secondary-surface h-[4rem] px-[1rem] placeholder-secondary-main focus:placeholder-secondary-surface";

          return (
            <label
              className="text-body-3  flex flex-col gap-[0.6rem]"
              key={index}
            >
              <div className="font-6">
                {input.title}{" "}
                {input.isRequired ? (
                  <span className="text-red-500">*</span>
                ) : (
                  <span>(Optional)</span>
                )}
              </div>

              {input.type === "text" ||
              input.type === "email" ||
              input.type === "password" ||
              input.type === "number" ? (
                <input
                  className={inputClass}
                  name={input.name}
                  required={input.isRequired}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e: any) =>
                    handleChange(input.label, e.target.value)
                  }
                />
              ) : (
                <select
                  className={`${inputClass} ${
                    input.value
                      ? "text-neutral-50"
                      : "text-secondary-main focus:text-secondary-surface"
                  }`}
                  name={input.name}
                  required={input.isRequired}
                  value={input.value}
                >
                  {[...[""], ...(input?.options as string[])].map(
                    (option, index) => {
                      if (index === 0) {
                        return (
                          <option key={index} value="" selected disabled hidden>
                            {input.placeholder}
                          </option>
                        );
                      } else {
                        return (
                          <option
                            key={index}
                            value={option}
                            className="bg-neutral-50 text-neutral-900"
                          >
                            {option}
                          </option>
                        );
                      }
                    }
                  )}
                </select>
              )}
            </label>
          );
        })}

        <div className="max-w-max m-auto">
          <Button type="primary" url="/">
            {configuration.form.content.buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Form;
