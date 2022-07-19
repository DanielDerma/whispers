import React from "react";

import Dark from "../../../utils/icons/theme/Dark";
import System from "../../../utils/icons/theme/System";
import Light from "../../../utils/icons/theme/Light";

const ThemeBtn = () => {
  const buttons = [
    {
      icon: <Dark className="w-6 h-6 mr-1 " />,
      value: "Dark",
    },
    {
      icon: <Light className="w-6 h-6 mr-1 " />,
      value: "Light",
    },
    {
      icon: <System className="w-6 h-6 mr-1 " />,
      value: "System",
    },
  ];
  return (
    <button className="group relative">
      <Light className="w-6 h-6 text-white transition-all " />
      <div className="hidden absolute right-0 z-10 group-hover:block bg-white p-2 rounded-xl">
        {buttons.map((button) => (
          <div
            key={button.value}
            className="flex items-center hover:bg-twich2-variant rounded-lg p-1 "
          >
            {button.icon}
            <p className="">{button.value}</p>
          </div>
        ))}
      </div>
    </button>
  );
};

export default ThemeBtn;
