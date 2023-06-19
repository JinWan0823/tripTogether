import React, { useState } from "react";
import Header from "../components/Header";
import back from "../assets/fooback.jpg";
import LoginButton from "../components/LoginButton";
import FooLogo from "../assets/logo.svg";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export default function Login() {
  console.log(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // async function loginWithEamil(email, password) {
  //   try {
  //     let data;
  //     data = await signInWithEmailAndPassword(authService, email, password);
  //     console.log(data);
  //     window.alert("로그인 성공!");
  //   } catch (e) {
  //     return e.message.replace("Firebase: Error ", "");
  //   }
  // }

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // loginWithEamil(email, password);
            }}
          >
            <div>
              <input
                type="text"
                placeholder="ID를 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mt-[10px]">
              <input
                type="password"
                placeholder="PASSWORD를 입력하세요."
                className="w-full border p-2 text-[14px]"
                autoComplete="new-password"
                onChange={handlePasswordChange}
              />
            </div>
            <LoginButton>로그인</LoginButton>
            <LoginButton>구글 로그인</LoginButton>
            <Link to={"/signup"}>회원가입</Link>
          </form>
        </div>
      </div>
    </>
  );
}
