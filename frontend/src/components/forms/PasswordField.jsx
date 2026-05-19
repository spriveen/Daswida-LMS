// src/components/forms/PasswordField.jsx

import React from "react";

const PasswordField = ({
  name,
  placeholder,
  value,
  onChange,
}) => {

  return (

    <input
      type="password"
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

export default PasswordField;