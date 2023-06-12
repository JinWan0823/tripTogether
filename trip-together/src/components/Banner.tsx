import React from "react";
import BannerImg from "../assets/banner01.jpg";

export default function Banner() {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>
    </>
  );
}
