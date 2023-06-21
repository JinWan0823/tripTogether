import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCarousel.css";

interface Img {
  imgname: string;
  originimgurl: string;
  smallimageurl: string;
}

export default function SlickCarousel() {
  const [img, setImg] = useState<Img[]>([]);
  const { contentid } = useParams();
  const slider1Ref = useRef<any>(null);
  const slider2Ref = useRef<any>(null);

  useEffect(() => {
    async function getImg() {
      const res = await axios(
        `https://apis.data.go.kr/B551011/KorService1/detailImage1?MobileOS=ETC&MobileApp=TripTogether&_type=json&contentId=${contentid}&imageYN=Y&subImageYN=Y&serviceKey=2fn2wynhVTJUv2jVWDS3ZU1J9%2Fz1sqtrIEexyzI08LjxNIFDRzEjRauhYrjk%2Ffdiao9pqyVWrbwQw0HW7FpimQ%3D%3D`
      );
      const result = res.data.response.body.items.item;
      setImg(result);
      console.log(result);
    }
    getImg();
  }, []);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slider2Ref.current,
  };

  const dotsSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: slider1Ref.current,
    className: "custom-slide",
    centerPadding: "0px",
  };

  return (
    <>
      <Slider {...sliderSettings} ref={slider1Ref}>
        {img.map((image) => (
          <div key={image.originimgurl}>
            <img src={image.originimgurl} alt={image.imgname} />
          </div>
        ))}
      </Slider>
      <Slider {...dotsSettings} ref={slider2Ref}>
        {img.map((image) => (
          <div key={image.originimgurl}>
            <img src={image.originimgurl} alt={image.imgname} />
          </div>
        ))}
      </Slider>
    </>
  );
}
