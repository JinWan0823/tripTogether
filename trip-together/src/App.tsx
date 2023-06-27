import React, { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import TravelProduct from "./pages/TravelProduct";
import TravelList from "./pages/TravelList";
import FestivalList from "./pages/FestivalList";

function App() {
  const userInfo = useContext(AuthContext);
  console.log("로그인 상태", userInfo);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/signup"} element={<SignUp />}></Route>
          <Route path={"/travel"} element={<TravelList />}></Route>
          <Route path={"/festival"} element={<FestivalList />}></Route>
          <Route path={":contentid"} element={<TravelProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
