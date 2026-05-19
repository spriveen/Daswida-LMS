// src/components/forms/SelectField.jsx

import React from "react";

const SelectField = ({
  name,
  value,
  onChange,
  options,
}) => {

  return (

    <select
      name={name}
      value={value}
      onChange={onChange}
      className="
        h-[52px]
        px-4
        rounded-xl
        bg-black
        border
        border-gray-700
        text-white
        outline-none
        focus:border-yellow-400
      "
    >

      {options.map((option, index) => (

        <option
          key={index}
          value={option.value}
        >
          {option.label}
        </option>

      ))}

    </select>

  );

};

export default SelectField;