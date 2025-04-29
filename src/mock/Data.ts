import imgOne from "../assets/images/img.jpg";
import imgTwo from "../assets/images/imgOne.jpg";
import imgFive from "../assets/images/2-1.jpg";
import imgSix from "../assets/images/5-1.jpg";
import imgThree from "../assets/images/6-1.jpg";
import imgFour from "../assets/images/7-1.jpg";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";


export const DataMenu = [
  {
    menu: "HOME",
  },
  {
    menu: "SHOP",
    child: [
      {
        title: "Categories View",
        subMenu: [
          "Shop Left Sidebar",
          "Shop Right Sidebar",
          "Shop Full Width",
          "Shop Both Sidebars",
          "Shop 100 Full Width",
        ],
      },
      {
        title: "Shop Page",
        subMenu: ["My account", "Cart", "Wishlist", "Checkout"],
      },
      {
        title: "Product Types",
        subMenu: [
          "Bluetooth Headphone",
          "Wired Speaker Audio",
          "Gaming Headphone",
          "Red 1 BT Speaker",
          "TWS Headphone",
        ],
      },
      {
        title: "Best Sellers",
        subMenu: ["Red 1 BT Speaker", "$257.00"],
        src: imgTwo,
        subData: ["Army BT Speaker", "$130.00"],
        srcOne: `${imgOne}`,
      },
    ],
  },
  {
    menu: "BLOG",
  },
  {
    menu: "CONTACT",
  },
  {
    menu: "ABOUT",
  },
];

export const DataProduct = [
  {
    src: imgOne,
    title: "Army BT Speaker",
    subTitle: "$130.00",
  },
  {
    src: imgTwo,
    title: "Red 1 BT Speaker",
    subTitle: "$275.00",
  },
  {
    src: imgThree,
    srcOne: imgFour,
    srcTwo: imgFive,
    title: "Wired Speaker Audio",
    subTitle: "$120.00 - $135.00",
  },
  {
    src: imgSix,
    title: "Barda Headphone",
    subTitle: "$285.00",
  },

];

export const DataFeatured = [
  {
    src: imgTwo,
    title: "Red 1 BT Speaker",
    subTitle: "$275.00",
  },
  {
    src: imgTwo,
    title: "Red 1 BT Speaker",
    subTitle: "$275.00",
  },
  {
    src: imgSix,
    title: "Barda Headphone",
    subTitle: "$285.00",
  },
  {
    src: imgFive,
    title: "Army BT Speaker",
    subTitle: "$130.00",
  },
];
export const DataPopular = [
  {
    src: imgThree,
    title: "Army BT Speaker",
    subTitle: "$130.00",
  },
  {
    src: imgOne,
    title: "Red 1 BT Speaker",
    subTitle: "$275.00",
  },
  {
    src: imgTwo,
    srcOne: imgFour,
    srcTwo: imgFive,
    title: "Wired Speaker Audio",
    subTitle: "$120.00 - $135.00",
  },
  {
    src: imgFive,
    title: "Barda Headphone",
    subTitle: "$285.00",
  },
]
export const DataNewest = [
  {
    src: imgTwo,
    title: "Army BT Speaker",
    subTitle: "$130.00",
  },
  {
    src: imgSix,
    title: "Red 1 BT Speaker",
    subTitle: "$275.00",
  },
  {
    src: imgFour,
    srcOne: imgTwo,
    srcTwo: imgFive,
    title: "Wired Speaker Audio",
    subTitle: "$120.00 - $135.00",
  },
  {
    src: imgOne,
    title: "Barda Headphone",
    subTitle: "$285.00",
  },
]
export const DataFooterLinks = [
  {
    title: "Quick Links",
    menu: ["My Account", "My Wishlist", "Shopping", "About Us", "Terms & Condition", "Order Status"]
  },
  {
    title: "New & Info",
    menu: ["Press Releases", "About Sony", "Product Support", "Accessibility", "Product Manuals", "Product Registration"]
  },
  {
    title: "Other Links",
    menu: ["Sony Pictures", "Sony Music", "Sony Mobile", "Crackle", "Play Station", "Game Stock"]
  }
]

export const contactData = [
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: "163 North 39th Street, Suite 836"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "(+555) 0123 999 9999"
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@domain.com"
  },
  {
    icon: FaLink,
    label: "Website",
    value: "http://www.domain.com"
  }
];
export const socialIconsData = [
  { icon: FaFacebookF },
  { icon: FaTelegramPlane },
  { icon: FaInstagram },
  { icon: FaYoutube },
  { icon: FaWhatsapp }
];

