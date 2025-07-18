import { FunctionComponent, SetStateAction, useState } from "react";
import "./CardProduct.scss";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { FaBars } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

interface CardProductProps {
  src?: string;
  title?: string;
  srcOne?: string;
  subTitle?: string;
  srcTwo?: string;
  onmousemove?: string;
  active?: any;
  isIndex?: any;
  id?: any;
  secondary?: any;
}
export const CardProduct: FunctionComponent<CardProductProps> = ({
  src,
  title,
  subTitle,
  srcOne,
  srcTwo,
  secondary,
}) => {
  const [isShowImage, setIsShowImage] = useState(0);

  const myMoveFunction = (index: SetStateAction<number>) => {
    setIsShowImage(index);
  };
  return (
    <NavLink className="CardProduct" to={""}>
      <div className="Product">
        <div className="CardShop">
          <div className="ProductImg">
            {isShowImage === 0 && (
              <img
                src={src}
                className={`CardProductImg ${secondary ? "secondary" : ""}`}
              />
            )}
            {isShowImage === 1 && srcOne && (
              <img
                src={srcOne}
                className={`ImgProwOne ${secondary ? "secondary" : ""}`}
              />
            )}
            {isShowImage === 2 && srcTwo && (
              <img src={srcTwo} className="ImgProwTwo" />
            )}
          </div>
          <div
            className="SwitchInput"
            onMouseEnter={() => myMoveFunction(1)}
          ></div>
          <div
            className="shopInput"
            onMouseEnter={() => myMoveFunction(2)}
          ></div>
          <div className="ProdWrrapper">
            <div className="ProHeart">
              <div className="btnWrapperHeart">
                <FaRegHeart />
              </div>
              <div className="toolTipWishlist">Wishlist</div>
            </div>
          </div>
          <div className="ProBtnQuikview">
            <div className="btnQuikview">Quick View</div>
          </div>
          <div className="ProductWrapperShuffle">
            <div className="ProShuffle">
              <div className="btnWrapperShuffle">
                <FaShuffle />
              </div>
              <div className="toolTipCompare">Compare</div>
            </div>
          </div>
        </div>
        <div className="Title">{title}</div>
        <div className="ProductSubTitle">{subTitle}</div>
        <div className="ProductButton">
          <Button label="Add to cart" svgIcon={<FaBars />} />
        </div>
      </div>
    </NavLink>
  );
};
