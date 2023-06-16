import { useEffect, useState } from "react";
import axios from "axios";
import TravelCard from "./TravelCard";

interface Doc {
  title: string;
  modifiedtime: number;
  firstimage: string;
  addr1: string;
  contentid: number;
  tel: string;
}

export default function TravelRecommend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios(
        `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=6&MobileOS=ETC&MobileApp=TripTogether&_type=json&arrange=R&keyword=%EC%84%9C%EC%9A%B8&contentTypeId=12&serviceKey=2fn2wynhVTJUv2jVWDS3ZU1J9%2Fz1sqtrIEexyzI08LjxNIFDRzEjRauhYrjk%2Ffdiao9pqyVWrbwQw0HW7FpimQ%3D%3D`
      );
      console.log(res);
      const result = res.data.response.body.items.item;
      setData(result);
      console.log(result);
    }

    getData();
  }, []);

  return (
    <section className="w-full mb-[150px]">
      <div className="inner w-[1240px] mx-auto my-20">
        <h2 className="font-black text-4xl text-center">지역별 여행지</h2>
        <ul className="flex justify-center my-4">
          <li className="mx-2 rounded-2xl bg-[#666] py-1 px-4 text-white hover:bg-[#333] cursor-pointer">
            서울
          </li>
          <li className="mx-2 rounded-2xl bg-[#666] py-1 px-4 text-white hover:bg-[#333] cursor-pointer">
            경기
          </li>
          <li className="mx-2 rounded-2xl bg-[#666] py-1 px-4 text-white hover:bg-[#333] cursor-pointer">
            경기
          </li>
          <li className="mx-2 rounded-2xl bg-[#666] py-1 px-4 text-white hover:bg-[#333] cursor-pointer">
            경기
          </li>
        </ul>
        <ul className="flex flex-wrap justify-between items-start">
          {data.map((doc: Doc) => (
            <TravelCard
              key={doc.modifiedtime}
              title={doc.title}
              firstimage={doc.firstimage}
              addr1={doc.addr1}
              contentid={doc.contentid}
              tel={doc.tel}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
