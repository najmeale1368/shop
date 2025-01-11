import React, { FunctionComponent, SetStateAction, useState } from "react";
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
  const [isHoverd, setIsHoverd] = useState(false);
  const [isShowImage, setIsShowImage] = useState(0);

  const myMoveFunction = (index: SetStateAction<number>) => {
    setIsHoverd(true);
    setIsShowImage(index);
  };
  return (
    <NavLink className="CardProduct" to={""}>
      <div className="Product">
        <div className="CardShop">
          <div className="ProductImg">
            {!isHoverd && isShowImage === 0 && (
              <img
                src={src}
                className={`CardProductImg ${secondary ? "secondary" : ""}`}
              />
            )}
          </div>
          <div
            className="SwitchInput"
            onMouseEnter={() => myMoveFunction(0)}
          ></div>
          {isHoverd && (
            <div>
              {srcOne && !isShowImage && (
                <img
                  src={srcOne}
                  className={`ImgProwOne ${secondary ? "secondary" : ""}`}
                />
              )}
            </div>
          )}
          <div
            onMouseEnter={() => myMoveFunction(1)}
            className="shopInput"
          ></div>
          {isHoverd && (
            <div>
              {srcTwo && isShowImage === 1 && (
                <img src={srcTwo} className="ImgProwTwo" />
              )}
            </div>
          )}
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
