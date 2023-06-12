import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.svg";

export default function Header() {
  return (
    <>
      <header className="w-full fixed">
        <div className="header-inner shadow-3xl flex justify-between w-11/12 mx-auto py-4 px-8 items-center bg-[#fff] m-2 rounded-3xl">
          <div className="flex items-center">
            <h1 className="logo text-3xl font-bold text-white">
              <img src={Logo} alt="logo" />
            </h1>
            <ul className="flex text-m text-[#666] font-semibold ml-20">
              <li>
                <Link to="/signup">Communite</Link>
              </li>
              <li className="ml-10">
                <Link to="/signup">Travel</Link>
              </li>
              <li className="ml-10">
                <Link to="/signup">Festival</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link
              to="/signup"
              className="py-2 px-6 bg-[#333] text-white rounded-3xl font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
