import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { ListData } from "./ListForm";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { AuthContext } from "../context/authContext";
import ScrollTo from "../commonFunction/scrollTo";

export default function ViewForm() {
  const { id } = useParams();
  const [data, setData] = useState<ListData | null>(null);
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const docRef = doc(db, "travel", id);
          const docSnap = await getDoc(docRef);
          console.log(docSnap);
          if (docSnap.exists()) {
            const docData = docSnap.data();
            setData(docData as ListData);
          } else {
            console.log("데이터가 없습니다.");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const isEditable = userInfo?.email === data.writer;

  const handleDelete = async () => {
    const check = confirm("정말 삭제하시겠습니까?");

    try {
      if (id && check) {
        await deleteDoc(doc(db, "travel", id));
        navigate("/community/list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    ScrollTo();
    navigate(`/edit/${id}`);
  };

  const handleLIST = () => {
    ScrollTo();
    navigate("/community/list");
  };

  return (
    <>
      <div className="w-[1140px] mx-auto my-[100px]">
        <div className="w-full border-[#dfdfdf] shadow-4xl border-solid border-[1px] rounded-[20px] relative">
          {isEditable && (
            <div className="absolute top-[-10px] right-[5px] translate-y-[-100%] ">
              <button
                onClick={handleEdit}
                className="bg-point-color p-[10px] py-[4px] rounded-[5px] text-white mr-[10px]"
              >
                수정
              </button>
              <button
                onClick={handleDelete}
                className="bg-point-color p-[10px] py-[4px] rounded-[5px] text-white"
              >
                삭제
              </button>
            </div>
          )}
          <div>
            <ul>
              <li className="flex font-bold border-b-[1px] border-[#dfdfdf] border-solid">
                <p className="w-[15%] p-[20px] py-[15px] text-center border-r-[1px] border-solid border-[#dfdfdf]">
                  제목
                </p>
                <p className="w-[85%] p-[20px] py-[15px] pl-[30px]">
                  {data.title}
                </p>
              </li>
              <li className="flex font-bold border-b-[1px] border-[#dfdfdf] border-solid">
                <div className="flex w-[33.333%] border-r-[1px] border-[#dfdfdf] border-solid">
                  <p className="w-[45%] p-[20px] py-[15px] text-center border-r-[1px] border-solid border-[#dfdfdf]">
                    작성자
                  </p>
                  <p className="w-[55%] p-[20px] py-[15px] pl-[30px]">
                    {data.name}
                  </p>
                </div>
                <div className="flex w-[33.333%] border-r-[1px] border-[#dfdfdf] border-solid">
                  <p className="w-[45%] p-[20px] py-[15px] text-center border-r-[1px] border-solid border-[#dfdfdf]">
                    작성일
                  </p>
                  <p className="w-[55%] p-[20px] py-[15px] pl-[30px]">
                    {data.nowDate}
                  </p>
                </div>
                <div className="flex w-[33.333%]">
                  <p className="w-[45%] p-[20px] py-[15px] text-center border-r-[1px] border-solid border-[#dfdfdf]">
                    여행예정 날짜
                  </p>
                  <p className="w-[55%] p-[20px] py-[15px] pl-[30px]">
                    {data.date}
                  </p>
                </div>
              </li>
            </ul>

            <div className="w-full p-[30px] min-h-[350px] border-b-[1px] border-solid border-[#dfdfdf]">
              <p>{data.content}</p>
            </div>
            <CommentList />
            <CommentForm />
          </div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <button
            type="button"
            className="flex justify-center items-center bg-point-color text-white w-[160px] rounded-[10px] h-[55px] mt-[40px]  text-lg"
            onClick={handleLIST}
          >
            목록
          </button>
        </div>
      </div>
    </>
  );
}
