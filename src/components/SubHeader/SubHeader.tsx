import { FunctionComponent } from "react";
import Image from "../../assets/images/banner1-1.png";
import "./SubHeader.scss";
import { Button } from "../Button";
import { FaBars } from "react-icons/fa";

interface SubHeaderProps {
  title?: string;
  text?: string;
  textOne?: string;
}
export const SubHeader: FunctionComponent<SubHeaderProps> = ({
  title,
  text,
  textOne,
}) => {
  return (
    <div className="Logo">
      <div className="container">
        <div className="LogoImg">
          <div className="ImgLogo">
            <h1 className="Title">{title}</h1>
            <h2 className="Text">{text}</h2>
            <h2 className="Text">{textOne}</h2>
            <Button label="BUY NOW" svgIcon={<FaBars />} primary />
          </div>
          <img src={Image} className="Img" />
        </div>
      </div>
    </div>
  );
};
