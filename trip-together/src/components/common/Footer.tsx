import FooLogo from "../../assets/logo.svg";
import Fooback from "../../assets/fooback.jpg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#333] rounded-ss-[250px] overflow-hidden">
      <div
        className="h-[750px] w-full bg-cover"
        style={{ backgroundImage: `url(${Fooback})` }}
      ></div>
      <div className="w-[full] bg-[#000] py-[40px]">
        <div className="w-[1300px] mx-auto flex justify-between items-center">
          <div className="text-[#dfdfdf]">
            <p>제작자 : 박진완 | E-mail : dhksl823@gmail.com</p>
            <p>
              Tel : 010-9974-1134 | gitHub 주소 :
              https://github.com/JinWan0823/tripTogether
            </p>
            <p className="mt-[25px]">
              Copyright (c) 2023 TripTogether all rights reserved
            </p>
          </div>
          <div>
            <img src={FooLogo} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
