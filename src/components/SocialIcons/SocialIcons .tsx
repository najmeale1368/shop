import React, { FunctionComponent } from "react";
import "./SocialIcons.scss";

interface SocialIconsProps {
    icon: React.ElementType;
}

export const SocialIcons: FunctionComponent<SocialIconsProps> = ({ icon: Icon }) => {
    return (
        <div className="socialIconCircle">
            <Icon className="socialIcon" />
        </div>
    );
};
