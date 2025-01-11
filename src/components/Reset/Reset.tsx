import React, { FunctionComponent, useState } from "react";
import "./Reset.scss";
import { Button, Input, LinkButton } from "@/components";

interface ResetProps {
  onClick?: () => void;
}
export const Reset: FunctionComponent<ResetProps> = ({ onClick }) => {
  let initialDataReset = { username: "" };

  const [dataReset, setDataReset] = useState(initialDataReset);

  const handleChangeReset = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataReset({ ...dataReset, [event.target.name]: event.target.value });
  };
  return (
    <div className="Reset">
      <header className="head">
        <h3>Reset password</h3>
        <span>Recover your password</span>
      </header>
      <form className="form">
        <Input
          type="text"
          name="username"
          label="Username"
          onChange={handleChangeReset}
          value={dataReset.username}
        />
        <Button label="Send My Password" className="sizeBtn" />
        <div className="text">A password will be e-mailed to you</div>
      </form>
      <div className="textReset">
        <div className="tReset">Back to</div>
        <div className="Link" onClick={onClick}>
          <LinkButton />
        </div>
      </div>
    </div>
  );
};
