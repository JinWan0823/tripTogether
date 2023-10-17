import ListCard from "./ListCard";
import { useState, useEffect, ChangeEvent, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ScrollTo from "../commonFunction/scrollTo";

export interface ListData {
  writer: string;
  title: string;
  date: string;
  views: number;
  recruit: string;
  name: string;
  id: string;
  nowDate: string;
  content: string;
  comments: number;
}

export default function ListForm() {
  const [list, setList] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const listOpt = e.target.value;
    setSelectedOption(listOpt);
    setCurrentPage(1); // 옵션 변경 시 현재 페이지를 1로 초기화
  };

  useEffect(() => {
    const getList = async () => {
      let querySnapshot;
      if (selectedOption === "new") {
        const q = query(collection(db, "travel"), orderBy("nowDate", "desc"));
        querySnapshot = await getDocs(q);
      } else if (selectedOption === "hot") {
        const q = query(collection(db, "travel"), orderBy("views", "desc"));
        querySnapshot = await getDocs(q);
      }
      if (querySnapshot) {
        const dataList = querySnapshot.docs.map(
          (doc) => doc.data() as ListData
        );
        setList(dataList);
      }
    };

    getList();
  }, [selectedOption]);

  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return list.slice(indexOfFirstItem, indexOfLastItem);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleWrite = () => {
    if (!userInfo) {
      alert("로그인이 필요한 서비스입니다.");
    } else {
      ScrollTo();
      navigate("/community/write");
    }
  };

  return (
    <div className="w-[1140px] mx-auto my-[100px]">
      <h2 className="text-center font-bold text-[80px]">
        <span className="text-point-color">Contact</span> Trip
      </h2>
      <p className="text-[30px] text-center">함께 여행갈 사람을 찾아보세요.</p>
      <div className="relative w-full mt-[30px]  border-[#dfdfdf] shadow-4xl border-solid border-[1px] rounded-[20px]">
        <select
          name="list_opt"
          id="opt"
          className="absolute right-[10px] top-[-15px] translate-y-[-100%] border-[1px] py-[3px] px-[10px] border-[#dfdfdf]"
          onChange={selectChange}
          value={selectedOption}
        >
          <option value="new">최신순</option>
          <option value="hot">조회순</option>
        </select>
        <button
          className="flex justify-center items-center bg-point-color text-white w-[160px] rounded-[10px] h-[55px] mt-[40px]  text-lg absolute translate-y-[100%]  bottom-[-20px] right-[0px]"
          onClick={handleWrite}
        >
          작성하기
        </button>
        <ul>
          <li className="font-bold flex items-center  text-center border-b-[1px] border-solid border-[#dfdfdf] w-full p-[10px]">
            <div className="write_name w-[15%]">
              <p>작성자</p>
            </div>
            <div className="write_tit w-[60%]">
              <p>제목</p>
            </div>
            <div className="write_date w-[15%]">
              <p>여행 예정 날짜</p>
            </div>
            <div className="write_views w-[5%]">
              <p>댓글</p>
            </div>
            <div className="write_views w-[5%]">
              <p>조회수</p>
            </div>
          </li>
          {getCurrentItems().map((item, index) => (
            <ListCard key={index} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center mt-4">
        {/* 페이지네이션 버튼 */}
        {list.length > itemsPerPage && (
          <div className="flex">
            {Array(Math.ceil(list.length / itemsPerPage))
              .fill(0)
              .map((_, index) => (
                <button
                  key={index}
                  className={`px-2 py-1 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-point-color text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
