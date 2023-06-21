import React from "react";
import Header from "../components/common/Header";
import Banner from "../components/Banner";
import TravelRecommend from "../components/TravelRecommend";
import LinkBanner from "../components/Mainpage/LinkBanner";
import Footer from "../components/common/Footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <TravelRecommend />
      <LinkBanner />
      <Footer />
    </>
  );
}
