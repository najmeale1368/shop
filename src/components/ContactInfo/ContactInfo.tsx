import React, { FunctionComponent } from "react";
import "./ContactInfo.scss";

interface ContactInfoProps {
    label?: string;
    value?: string;
    icon?: any;
}

export const ContactInfo: FunctionComponent<ContactInfoProps> = ({ label, value, icon: Icon }) => {
    return (
        <div className="contactInfoItem">
            <Icon className="contactIcon" />
            <div className="contactText">
                <span className="contactLabel">{label}:</span>
                <span className="contactValue">{value}</span>
            </div>
        </div>
    );
}
