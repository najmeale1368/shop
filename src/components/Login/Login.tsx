import React, { FunctionComponent, useState } from "react";
import "./Login.scss";
import { Input, Checked, Button } from "@/components";
import { NavLink } from "react-router-dom";

interface LoginProps {
  onClick?: () => void;
}
export const Login: FunctionComponent<LoginProps> = ({ onClick }) => {
  let initialData = { username: "", password: "" };

  const [dataLogin, setDataLogin] = useState(initialData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin({ ...dataLogin, [event.target.name]: event.target.value });
  };
  return (
    <div className="login">
      <header className="header">
        <h3>Log In</h3>
        <span>Become a part of our community!</span>
      </header>
      <form className="Form">
        <Input
          label="Username"
          type="text"
          name="username"
          onChange={handleChange}
          value={dataLogin.username}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={dataLogin.password}
        />
        <Checked type="checkbox" label="Remember me" />
        <Button label="LOGIN" className="sizeBtn" />
        <div className="fogetPass">
          <NavLink to={""} className="forgetLink" onClick={onClick}>
            Forgot your password? Get help
          </NavLink>
        </div>
      </form>
    </div>
  );
};
