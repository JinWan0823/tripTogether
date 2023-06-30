import ListCard from "./ListCard";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

interface ListData {
  writer: string;
  title: string;
  date: string;
  views: number;
  recruit: string;
  name: string;
  id: string;
  nowDate: string;
}

export default function ListForm() {
  const [list, setList] = useState<any[]>([]);
  const listCollectionRef = collection(db, "travel");

  useEffect(() => {
    const getList = async () => {
      const querySnapshot = await getDocs(listCollectionRef);
      console.log(querySnapshot);
      const dataList = querySnapshot.docs.map((doc) => doc.data() as ListData); // QuerySnapshot에서 문서 데이터를 가져와 배열로 변환
      console.log(dataList);
      setList(dataList);
    };

    getList();
  }, []);

  return (
    <div className="w-[1140px] mx-auto my-[100px]">
      <h2 className="text-center font-bold text-[80px]">
        <span className="text-point-color">Contact</span> Trip
      </h2>
      <p className="text-[30px] text-center">함께 여행갈 사람을 찾아보세요.</p>
      <div className=" w-full mt-[30px]  border-[#dfdfdf] shadow-3xl border-solid border-[1px] rounded-[20px] overflow-hidden">
        <ul>
          <li className="font-bold flex items-center  text-center border-b-[1px] border-solid border-[#dfdfdf] w-full p-[10px]">
            <div className="write_name w-[15%]">
              <p>작성자</p>
            </div>
            <div className="write_tit w-[55%]">
              <p>제목</p>
            </div>
            <div className="write_date w-[20%]">
              <p>여행 예정 날짜</p>
            </div>
            <div className="write_views w-[10%]">
              <p>조회수</p>
            </div>
          </li>
          {list.map((item, index) => (
            <ListCard key={index} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={"/community/write"}
          className="flex justify-center items-center bg-point-color text-white w-[160px] rounded-[10px] h-[55px] mt-[40px]  text-lg"
        >
          작성하기
        </Link>
      </div>
    </div>
  );
}
