import React, { FunctionComponent } from "react";
import "./Input.scss";

interface InputProps {
  label: string;
  type: "text" | "password" | "email" | "number" | "checkbox";
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const Input: FunctionComponent<InputProps> = ({
  label,
  type,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="Input">
      <input
        type={type}
        name={name}
        className="userInput"
        onChange={onChange}
        value={value}
      />
      <label className="Label">{label}</label>
      <div className="labelLine"></div>
    </div>
  );
};
