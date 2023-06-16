import React from "react";
import Header from "../components/Header";
import back from "../assets/fooback.jpg";
import LoginButton from "../components/LoginButton";
import FooLogo from "../assets/logo.svg";

export default function SignUp() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen relative bg-cover"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[400px] p-[30px] py-[50px]">
          <div className="flex justify-center mb-[30px]">
            <img src={FooLogo} alt="logo" />
          </div>
          <form action="">
            <div>
              <input
                type="text"
                placeholder="ID를 입력하세요."
                className="w-full border p-2 text-[14px]"
              />
            </div>
            <div className="mt-[10px]">
              <input
                type="password"
                placeholder="PASSWORD를 입력하세요."
                className="w-full border p-2 text-[14px]"
              />
            </div>
            <LoginButton>로그인</LoginButton>
            <LoginButton>회원가입</LoginButton>
            <LoginButton>구글 로그인</LoginButton>
          </form>
        </div>
      </div>
    </>
  );
}
