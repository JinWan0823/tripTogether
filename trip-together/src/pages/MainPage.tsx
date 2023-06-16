import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelRecommend from "../components/TravelRecommend";
import LinkBanner from "../components/LinkBanner";
import Footer from "../components/Footer";

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
