import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./LinkButton.scss";

interface LinkButtonProps {}
export const LinkButton: FunctionComponent<LinkButtonProps> = () => {
  return (
    <NavLink to={""} className="linkButton">
      LOGIN
    </NavLink>
  );
};
