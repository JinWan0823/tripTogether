import React, { useState } from "react";
import Header from "../components/common/Header";
import back from "../assets/fooback.jpg";
import LoginButton from "../components/LoginButton";
import FooLogo from "../assets/logo.svg";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [pwd2, setPwd2] = useState("");

  const [errorMessage, setError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };
  const handlePwd2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd2(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (pwd !== pwd2) {
      setError("비밀번호가 같지 않습니다.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, pwd)
      .then((res) => {
        updateProfile(res.user, { displayName: name });
        alert("회원가입 성공");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.code);
        switch (e.code) {
          case "auth/email-already-in-use":
            setError("이미 사용중인 이메일입니다.");
            break;
          case "auth/invalid-email":
            setError("유효하지 않은 이메일입니다.");
            break;
          case "auth/weak-password":
            setError("비밀번호가 6자리 이상 필요합니다.");
            break;
        }
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
            <div className="mt-[10px] w-full">
              <p>이름</p>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handleName}
                required
              />
            </div>
            <div className="w-full">
              <p>E-mail</p>
              <input
                type="text"
                placeholder="이메일을 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handleEmail}
                required
              />
            </div>
            <div className="mt-[10px] w-full">
              <p>비밀번호</p>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handlePwd}
                required
              />
            </div>
            <div className="mt-[10px] w-full">
              <p>비밀번호 확인</p>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                className="w-full border p-2 text-[14px]"
                onChange={handlePwd2}
                required
              />
            </div>
            <p
              className={`text-[14px] mt-[5px] text-red-500 ${
                errorMessage ? "opacity-1" : "opacity-0"
              }`}
            >
              * {errorMessage}
            </p>
            <LoginButton>회원가입</LoginButton>
            <Link to={"/login"} className="text-[#666] underline mt-[5px]">
              로그인
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
