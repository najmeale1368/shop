import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import IMG from "../../assets/images/Panasonic.jpg";
import IMGO from "../../assets/images/maxresdefault.jpg";

import 'swiper/css';
import 'swiper/css/navigation';
import './DynamicSwiper.scss';

const images = [
    IMG,
    IMGO,
    IMG,
    IMGO,
    IMG,
    IMGO,
    IMG,
    IMGO,
    IMG,
    IMGO,
    IMG,
    IMGO,
    IMGO,
    IMG,
    IMGO,
    IMG,
    IMGO,
];

const ImageSlider: React.FC = () => {
    return (
        <div className="image-slider-container">
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                loop={false}
                speed={800}
                slidesPerGroup={3}
                className="myImageSwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <img src={src} alt={`Slide ${index + 1}`} />
                            <h3 className="slide-title">Sample post title with format Video</h3>
                            <p>All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was…</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
