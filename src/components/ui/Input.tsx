import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  number?: boolean;
  styles?: string;
}

function Input({ placeholder, value, onChange, number, styles }: InputProps) {
  return (
    <input
      className={`overflow-hidden w-72 lg:w-96 p-3 border border-background rounded-lg bg-background transition duration-300 text-base leading-6 ${styles}`}
      type={number ? "number" : "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={280}
      required
    />
  );
}

export default Input;
