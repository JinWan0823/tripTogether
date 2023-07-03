import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.svg";
import { auth } from "../../firebase";
import { signOut } from "@firebase/auth";
import ScrollTo from "../../commonFunction/scrollTo";

export default function Header() {
  const userInfo = useContext(AuthContext);
  return (
    <>
      <header className="w-full fixed z-50">
        <div className="header-inner shadow-4xl flex justify-between w-11/12 mx-auto py-4 px-8 items-center bg-[#fff] m-2 rounded-3xl">
          <div className="flex items-center">
            <Link to={"/"} onClick={ScrollTo}>
              <img src={Logo} alt="logo" />
            </Link>
            <ul className="flex text-m text-[#666] font-semibold ml-20">
              <li>
                <Link to="/community/list" onClick={ScrollTo}>
                  Community
                </Link>
              </li>
              <li className="ml-10">
                <Link to="/travel" onClick={ScrollTo}>
                  Travel
                </Link>
              </li>
              <li className="ml-10">
                <Link to="/festival" onClick={ScrollTo}>
                  Festival
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {userInfo ? (
              <button
                className="py-2 px-6 bg-[#333] text-white rounded-3xl font-semibold"
                onClick={(e: React.FormEvent) => {
                  e.preventDefault();
                  signOut(auth);
                }}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/Login"
                className="py-2 px-6 bg-[#333] text-white rounded-3xl font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
