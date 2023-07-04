import Header from "../components/common/Header";
import Banner from "../components/Banner";
import TravelRecommend from "../components/TravelRecommend";
import LinkBanner from "../components/Mainpage/LinkBanner";
import Footer from "../components/common/Footer";
import UpButton from "../components/common/UpButton";

export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <TravelRecommend />
      <LinkBanner />
      <Footer />
      <UpButton />
    </>
  );
}
