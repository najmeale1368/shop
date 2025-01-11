import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./Dropdown.scss";

interface DropdownProps {
  data?: any;
  title?: string;
  icon?: JSX.Element;
}
export const Dropdown: FunctionComponent<DropdownProps> = ({
  data,
  title,
  icon,
}) => {
  return (
    <li className="dropdown">
      <NavLink to={""} className="drop">
        <div className="dropIcon">{icon}</div>
        <span>{title}</span>
        <IoIosArrowDown className="drop2" />
      </NavLink>
      <ul className="drop1">
        {data.map((D: any) => (
          <li className="drop3">
            <NavLink to={""} className="drop4">
              {D.icon}
              {D.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
