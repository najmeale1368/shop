import React, { FunctionComponent } from "react";
import "./FooterLinks.scss"

interface FooterLinksProps {
    title: string;
    menu: string[];
}

export const FooterLinks: FunctionComponent<FooterLinksProps> = ({ title, menu }) => {

    return (
        <div className="FooterLinks">
            <h4 className="FooterTitle">{title}</h4>
            <ul className="FooterList">
                {menu.map((item, index) => (
                    <li key={index} className="FooterItem">{item}</li>
                ))}
            </ul>
        </div>
    )
}