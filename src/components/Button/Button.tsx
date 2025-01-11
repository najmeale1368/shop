import { FunctionComponent, ReactElement } from "react";
import "./Button.scss";

interface ButtonProps {
  label?: string;
  secondary?: string;
  className?: string;
  svgIcon?: ReactElement;
  primary?: boolean;
}
export const Button: FunctionComponent<ButtonProps> = ({
  label,
  svgIcon,
  className,
  primary,
}) => {
  return (
    <button className={`btn ${className} ${primary ? "primary" : ""}`}>
      {svgIcon && <div className="svg">{svgIcon}</div>}
      <div>{label}</div>
    </button>
  );
};
