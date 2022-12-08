import React, { useState } from "react";
import { Select, Steps } from "antd";

export default function Index() {
  const [stepper, setStepper] = useState(0);
  const chooseType = (value) => {
    console.log(`selected ${value}`);
  };
  const stepHandler = (value) => {
    setStepper(value);
  };
  const items = [
    { title: "Төрөлөө сонгоно уу!" },
    { title: "second step" },
    { title: "third step" },
  ];

  return (
    <>
      <div className="main text-white flex flex-col gap-5 justify-around items-center h-[100%]">
        <div>
          <p className="text-3xl font-semibold">Төрөлөө сонгоно уу!</p>
          <Select
            defaultValue="choose"
            onChange={chooseType}
            className="w-[100%] mt-5"
            options={[
              {
                value: "choose",
                label: "Төрөлөө сонгоно уу!",
              },
              {
                value: "birthday",
                label: "Төрсөн өдөр",
              },
              {
                value: "anniversary",
                label: "Ойн баяр",
              },
            ]}
          />
        </div>
        <Steps
          items={items}
          className="px-20 text-white"
          onChange={stepHandler}
          current={stepper}
        />
      </div>
    </>
  );
}
