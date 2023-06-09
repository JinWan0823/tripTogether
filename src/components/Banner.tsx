import BannerImg from "../assets/banner01.jpg";
import MainText from "../assets/mainText.png";
import Weather from "./common/Weater";

export default function Banner() {
  return (
    <>
      <div
        className="w-full h-[calc(100vh-32px)] bg-cover relative"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <img
          src={MainText}
          alt="mainText"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <Weather />
    </>
  );
}
