import React, { useState } from "react";

// Components
import Form from "./Form";

// Types
export type CardType = {
  heading: string;
  content: {
    heading: string;
    inputs: {
      title: string;
      label: string;
      name: string;
      type: string;
      isRequired: boolean;
      value: string;
      options?: string[];
      placeholder: string;
    }[];
  };
};
export type configType = {
  activeCard: string;
  card1: CardType;
  card2: CardType;
};
type Props = {
  cardConfig: configType;
  bgImage: string;
};

const FormsCard = (props: Props) => {
  // States
  const [cardConfig, setCardConfig] = useState<Props["cardConfig"]>(
    props.cardConfig
  );

  return (
    <div>
      <div className="flex gap-[2rem] h-[30rem] 1100:h-[60rem] 1100:flex-col">
        <div className="relative flex-1 overflow-y-auto hide-scrollbar p-[2rem] flex flex-col">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormsCard;
