import React, { FunctionComponent } from "react";
import { DataMenu } from "@/mock/Data";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./Menu.scss";

interface MenuProps {}
export const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <ul className="Menu">
      {DataMenu.map((Data) => {
        return (
          <li>
            <NavLink to={"/"} className="title">
              <IoIosArrowDown className="iconArrow" />
              {Data.menu}
            </NavLink>
            {Data.child && (
              <div className="menuData">
                {Data.child.map((ch) => {
                  return (
                    <>
                      <ul className="menuChild">
                        <li className="menuNav">{ch.title}</li>
                        <div className="menuItem">
                          <div className="wrapperMenu">
                            <div className="dd">
                              {ch.subMenu.map((sub) => {
                                return <li className="menuWrapper">{sub}</li>;
                              })}
                            </div>
                            <div>
                              {ch.src && (
                                <img src={ch.srcOne} className="img" />
                              )}
                            </div>
                          </div>
                          <div className="imgProduct">
                            <div className="imgData">
                              {ch.subData?.map((su) => {
                                return <li className="imgProductOne">{su}</li>;
                              })}
                            </div>
                            {ch.src && <img src={ch.src} className="img" />}
                          </div>
                        </div>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
