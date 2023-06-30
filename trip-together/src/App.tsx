import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import TravelProduct from "./pages/TravelProduct";
import TravelList from "./pages/TravelList";
import FestivalList from "./pages/FestivalList";
import WritePage from "./board/WritePage";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import ListPage from "./board/ListPage";

function App() {
  const userInfo = useContext(AuthContext);
  console.log("로그인 상태", userInfo);

  const CollectionRef = collection(db, "travel");

  useEffect(() => {
    const getDB = async () => {
      const data = await getDocs(CollectionRef);
      console.log(data);
    };
    getDB();
  }, []);

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
          <Route path={"/comunity/write"} element={<WritePage />}></Route>
          <Route path={"/comunity/list"} element={<ListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
