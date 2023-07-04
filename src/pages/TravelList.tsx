import SubBanner from "../components/Subpage/SubBanner";
import TravelTotalList from "../components/Subpage/TravelTotalList";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import firstimage from "../assets/sub/banner.png";
import Weather from "../components/common/Weater";
import UpButton from "../components/common/UpButton";

export default function TravelList() {
  return (
    <>
      <Header />
      <SubBanner firstimage={firstimage} />
      <Weather />
      <TravelTotalList />
      <Footer />
      <UpButton />
    </>
  );
}
