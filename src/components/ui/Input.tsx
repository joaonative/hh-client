import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      className="overflow-hidden w-72 lg:w-96 p-3 border border-background rounded-lg bg-background border-backbg-background transition duration-300 text-base leading-6 "
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
