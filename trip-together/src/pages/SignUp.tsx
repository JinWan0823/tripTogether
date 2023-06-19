import React, { useContext, useState } from "react";
import Header from "../components/Header";
import back from "../assets/fooback.jpg";
import LoginButton from "../components/LoginButton";
import FooLogo from "../assets/logo.svg";
import { AuthContext } from "../context/authContext";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

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

    createUserWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        alert("회원가입 성공");
      })
      .catch((e) => {
        alert(e);
      });
  };

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
          <form onSubmit={handleSubmit}>
            <div>
              <p>ID</p>
              <input
                type="text"
                placeholder="ID를 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handleEmail}
              />
            </div>
            <div className="mt-[10px]">
              <p>비밀번호</p>
              <input
                type="password"
                placeholder="PASSWORD를 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handlePwd}
              />
            </div>
            <LoginButton>회원가입</LoginButton>
          </form>
        </div>
      </div>
    </>
  );
}
