import { FunctionComponent, useRef } from "react";
import IMG from "../../assets/images/iStock_80745525_XXLARGE.png";
import IMG1 from "../../assets/images/shutterstock_190962332.jpg";
import IMG2 from "../../assets/images/studio_microphones_by_wulfman65-d4sas4u.jpg";
import "./Home.scss";
import { DataFeatured, DataProduct } from "@/mock/Data";
import { CardProduct } from "@/components/CardProduct/CardProduct";
import IMG3 from "../../assets/images/iStock_59834512_XLARGE.jpg";
import Tabs from "@/components/Tabs/Tabs";
import DynamicSwiper from "@/components/DynamicSwiper/DynamicSwiper";

interface HomeProps { }

export const Home: FunctionComponent<HomeProps> = () => {

  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="HomePage">
            <div className="col-lg-4">
              <div className="Hpage">
                <img src={IMG} className="Imgg" />
                <div className="ImgHome">
                  <p>Flips </p>
                  <p>hd650</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Hpage">
                <img src={IMG1} className="Img1" />
                <div className="ImgHome1">
                  <p>Free</p>
                  <p>Pop Filter</p>
                  <p>Easy to Make</p>
                  <p>Sounds Excellent</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Hpage">
                <img src={IMG2} className="Img2" />
                <div className="ImgHome2">
                  <p>akg Ip2</p>
                  <p>worth</p>
                  <p>$79</p>
                  <p>free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="Heading">
              <h1>NEW PRODUCTS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="DataProduct">
            {DataProduct?.map((Data: any, index: any) => (
              <div className="col-lg-3">
                <div className="Section">
                  <CardProduct
                    key={index}
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
      <div className="elementorSection">
        <div className="container">
          <div className="row">
            <div className="elementor">
              <div className="elementorHeading">Featured products</div>
              <div className="elementorHead">Today deals</div>
            </div>
          </div>
        </div>
        <div className="DataFeature">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <CardProduct
                  src={DataFeatured[0]?.src}
                  title={DataFeatured[0]?.title}
                  subTitle={DataFeatured[0]?.subTitle}
                  secondary
                />
              </div>
              <div className="col-12 col-md-8">
                <div className="row">
                  {DataFeatured.slice(1, 4).map((data: any, index: number) => (
                    <div className="col-12 col-md-4" key={index}>
                      <CardProduct
                        src={data.src}
                        title={data.title}
                        subTitle={data.subTitle}
                        secondary
                      />
                    </div>
                  ))}
                </div>
                <img src={IMG3} alt="image" className="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Tabs />
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="container">
          <DynamicSwiper />
        </div>
      </div>
    </div>
  );
};
