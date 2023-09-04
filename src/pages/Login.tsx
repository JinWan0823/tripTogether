import React, { useState, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import Header from "../components/common/Header";
import back from "../assets/fooback.jpg";
import LoginButton from "../components/LoginButton";
import FooLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        alert("로그인 성공");
        console.log(`로그인성공`, userInfo);
        navigate(-1);
      })
      .catch((e) => {
        alert(e);
        console.log(`로그인 실패`, userInfo);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        alert("로그인 성공");
        navigate(-1);
      })
      .catch((e) => {
        alert(e);
        console.log(`로그인 실패`, userInfo);
      });
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen relative bg-cover"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[400px] p-[30px] py-[50px] rounded-[10px]">
          <div className="flex justify-center mb-[30px]">
            <img src={FooLogo} alt="logo" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center flex-col"
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="ID를 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handleEmail}
              />
            </div>
            <div className="mt-[10px] w-full">
              <input
                type="password"
                placeholder="PASSWORD를 입력하세요."
                className="w-full border p-2 text-[14px]"
                autoComplete="new-password"
                onChange={handlePwd}
              />
            </div>
            <LoginButton>로그인</LoginButton>
            {/* <LoginButton onClick={handleGoogleLogin}>구글 로그인</LoginButton> */}
            <div
              className="w-full mt-[10px] bg-[#333] text-white text-center p-2 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              구글로그인
            </div>
            <Link to={"/signup"} className="text-[#666] underline mt-[5px]">
              회원가입
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
