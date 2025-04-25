import { FunctionComponent, useState } from "react";
import "./Header.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";
import { SlDirections } from "react-icons/sl";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { Dropdown, Modal } from "@/components";
import Search from "../Search/Search";
import { IoSearchSharp } from "react-icons/io5";
import Logo from "../../assets/images/logo/logo-1.png";
import SelectInput from "../SelectInput/SelectInput";
import { IoCloseCircleOutline } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Menu } from "../Menu/Menu";
import { SubHeader } from "../SubHeader/SubHeader";
import { FaBars } from "react-icons/fa";

interface HeaderProps { }

export const Header: FunctionComponent<HeaderProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showClick, setShowClick] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  const DataLanguage = [
    {
      title: "English",
      icon: <FaFlagCheckered />,
    },
    {
      title: "French",
      icon: <FaFlagUsa />,
    },
    {
      title: "Test RTL",
      icon: <SlDirections />,
    },
  ];
  const Data = [
    {
      title: "USD",
      icon: <PiCurrencyGbpBold />,
    },
    {
      title: "GBP",
      icon: <FaDollarSign />,
    },
  ];

  const handleShow = () => {
    setShowClick(!showClick);
  };

  const [selectedValue, setSelectedValue] = useState<string | number>("");

  const options = [
    { value: 1, label: "Headphone" },
    { value: 2, label: "Gaming" },
    { value: 3, label: "Speaker" },
    { value: 4, label: "Wired" },
    { value: 4, label: "Wireless" },
  ];

  const handleSelectChange = (value: string | number) => {
    console.log("Selected value:", value);
    setSelectedValue(value);
  };

  return (
    <>
      <header className="TopHeader">
        <div className="container">
          <div className="TopSection">
            <div className="Header">
              <NavLink to={""} className="phone">
                <FaPhoneSquareAlt className="phoneIcon" />
                <span className="wrapper">Phone: + 123.456.789</span>
              </NavLink>
              <NavLink to={""} className="email">
                <MdOutlineEmail className="emailIcon" />
                <span className="wrapperText">Email: Hello@domain.com</span>
              </NavLink>
            </div>
            <ul className="menuItem">
              <li className="intemUser">
                <NavLink to={""} className="ittem" onClick={handleClick}>
                  <FaRegUser className="svgIcon" />
                  <span>Sign In / Join</span>
                </NavLink>
              </li>
              <li className="intemUser">
                <NavLink to={""}>
                  <Dropdown
                    data={DataLanguage}
                    title="Language"
                    icon={<BsGlobe2 />}
                  />
                </NavLink>
              </li>
              <li className="intemUser">
                <NavLink to={""}>
                  <Dropdown
                    data={Data}
                    title="Currency"
                    icon={<IoDiamondOutline />}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
          {showModal && <Modal onClick={handleClick} />}
        </div>
      </header>
      <div className="Headerr">
        <div className="container">
          {showClick && (
            <div className="HeaderSearch">
              <div className="HeaderWrapper">
                <img src={Logo} />
              </div>
              <Search />
              <SelectInput
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                placeholder="Please select an option"
              />
              <IoCloseCircleOutline className="IoClose" onClick={handleShow} />
            </div>
          )}
          {!showClick && (
            <div className="ShoppingCart">
              <FaBars className="Bars" />
              <div className="HeaderWrapper">
                <img src={Logo} />
              </div>
              <Menu />
              <li className="HiShopping">
                <NavLink to={""} className="HiShopp">
                  <HiShoppingCart className="HiShoppingCart" />
                  <div className="ShoppingOne">0</div>
                </NavLink>
                <div className="shopDropdown">
                  <p>No products in the cart.</p>
                </div>
              </li>
              <li className="FaReg">
                <NavLink to={""} className="Heart">
                  <FaRegHeart className="FaRegHeart" />
                  <div className="FaRegHeartOne">1</div>
                </NavLink>
              </li>
              <IoSearchSharp className="search" onClick={handleShow} />
            </div>
          )}
        </div>
      </div>
      <div className="SubHeader">
        <div className="container">
          <SubHeader
            title="Neumann tlm49"
            text="Vocal Optimised Transformerless Microphone"
            textOne="Features the K47 capsule from the legendary U47"
          />
        </div>
      </div>
    </>
  );
};
