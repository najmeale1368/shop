import React, { FunctionComponent, useState } from "react";
import "./Modal.scss";
import { Login, Reset } from "@/components";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  onClick?: () => void;
}
export const Modal: FunctionComponent<ModalProps> = ({ onClick }) => {
  const [isShowPassword, setIsShowPassword] = useState(true);

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <div className="modal" onClick={onClick}></div>
      <div className="mod">
        <IoClose className="closeButton" onClick={onClick} />
        {isShowPassword && <Login onClick={showPassword} />}
        {!isShowPassword && <Reset onClick={showPassword} />}
      </div>
    </>
  );
};
