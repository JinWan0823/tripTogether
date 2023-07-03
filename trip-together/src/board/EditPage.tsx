import SubBanner from "../components/Subpage/SubBanner";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import firstimage from "../assets/sub/banner.png";
import Weather from "../components/common/Weater";
import UpButton from "../components/common/UpButton";
import EditForm from "./EditForm";

export default function EditPage() {
  return (
    <>
      <Header />
      <SubBanner firstimage={firstimage} />
      <Weather />
      <EditForm />
      <Footer />
      <UpButton />
    </>
  );
}
