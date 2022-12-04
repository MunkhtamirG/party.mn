import React from "react";
import { Select } from "antd";

export default function Index() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="main text-white flex flex-col gap-5 justify-center items-center h-[100%]">
      <p className="text-3xl font-semibold">Төрөлөө сонгоно уу!</p>
      <Select
        defaultValue="choose"
        onChange={handleChange}
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
            value: "disabled",
            label: "Disabled",
          },
          {
            value: "Yiminghe",
            label: "yiminghe",
          },
        ]}
      />
    </div>
  );
}
