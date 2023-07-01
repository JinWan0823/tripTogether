import SubBanner from "../components/Subpage/SubBanner";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import firstimage from "../assets/sub/banner.png";
import Weather from "../components/common/Weater";
import UpButton from "../components/common/UpButton";
import ViewForm from "./ViewForm";

export default function ViewPage() {
  return (
    <>
      <Header />
      <SubBanner firstimage={firstimage} />
      <Weather />
      <ViewForm />
      <Footer />
      <UpButton />
    </>
  );
}
