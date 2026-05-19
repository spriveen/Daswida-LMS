import React from "react";

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {

  return (

    <input
      type={type}
      name={name}
      placeholder={placeholder}
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
    />

  );
};

export default InputField;