import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { ListData } from "./ListForm";
import CommentList from "./CommentList";

export default function ViewForm() {
  const { id } = useParams();
  const [data, setData] = useState<ListData | null>(null);
  const [comment, setComment] = useState("");

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

  return (
    <>
      <div className=" w-[1140px] mx-auto my-[100px] border-[#dfdfdf] shadow-3xl border-solid border-[1px] rounded-[20px] overflow-hidden">
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
          <form className="w-full flex p-[20px]  justify-between">
            <textarea
              name="coment"
              placeholder="댓글을 입력하세요."
              className="w-[83%] p-[10px] border-[1px] border-[#999] min-h-[150px]"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <button className="w-[15%] bg-point-color text-white">
              작성하기
            </button>
          </form>
        </div>
      </div>
      <CommentList />
    </>
  );
}
