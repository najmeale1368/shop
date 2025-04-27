import { DataNewest, DataPopular, DataProduct } from "@/mock/Data";
import { useState } from "react";
import { CardProduct } from "../CardProduct/CardProduct";
import "./Tabs.scss";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabData = [
        {
            label: "Products",
            data: DataProduct,
        },
        {
            label: "Most Popular",
            data: DataPopular,
        },
        {
            label: "Newest",
            data: DataNewest,
        },
    ];

    return (
        <div className="Tabs">
            <div className="TabHeaders">
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="TabContent">
                <div className="row">
                    {tabData[activeTab].data.map((Data: any, index: number) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div className="Section">
                                <CardProduct
                                    src={Data.src}
                                    srcOne={Data.srcOne}
                                    srcTwo={Data.srcTwo}
                                    title={Data.title}
                                    subTitle={Data.subTitle}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Tabs;

