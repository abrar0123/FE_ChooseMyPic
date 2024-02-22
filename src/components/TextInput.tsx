import React, { Children } from "react";
import NavBar from "./Navbar";

interface TextInputI {
  children?: React.ReactNode;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: () => void;

  type?: "text" | "password" | "email";
}

const TextInput = (props: TextInputI) => {
  const { children, label, placeholder, type, value, onChange } = props;
  return (
    <React.Fragment>
      <label className="block text-gray-700 text-[16px] mb-2">{label}</label>
      <input
        type={type}
        // className="w-72 bg-inputinside outline-0 border-istroke border px-3 py-1 rounded-sm "
        className="font-sans shadow-sm appearance-none focus:border-blue-900 hover:border-primary border-[1px] w-full px-3 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export default TextInput;
