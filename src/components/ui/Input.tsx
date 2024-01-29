import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  number?: boolean;
}

function Input({ placeholder, value, onChange, number }: InputProps) {
  return (
    <input
      className="overflow-hidden w-72 lg:w-96 p-3 border border-background rounded-lg bg-background border-backbg-background transition duration-300 text-base leading-6 "
      type={number ? "number" : "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default Input;
