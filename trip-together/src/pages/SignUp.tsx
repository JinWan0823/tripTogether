import React from "react";
import Header from "./Header";

export default function SignUp() {
  return (
    <>
      <Header />
      <div>
        <form action="">
          <input type="text" className="border-2 border-black-500" />
          <input type="password" className="border-2 border-black-500" />
          <button type="submit">제출하기</button>
        </form>
      </div>
    </>
  );
}
