import { FunctionComponent } from "react";
import "./Checked.scss";

interface CheckedProps {
  type?: string;
  label?: string;
}
export const Checked: FunctionComponent<CheckedProps> = ({ type, label }) => {
  return (
    <div className="Checked">
      <input type={type} className="checkInput" id="checkboxId" />
      <label className="labelInput" htmlFor="checkboxId">
        {label}
      </label>
    </div>
  );
};
