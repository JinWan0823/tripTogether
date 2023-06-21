import { useEffect, useState } from "react";
import axios from "axios";
import TravelCard from "./TravelCard";
import CategoryTabMenu from "./CategoryTabMenu";
import LoadingCircle from "./common/LoadingCircle";

interface Doc {
  title: string;
  modifiedtime: number;
  firstimage: string;
  addr1: string;
  contentid: number;
  tel: string;
}

export default function TravelRecommend() {
  const [category, setCategory] = useState("서울");
  const [data, setData] = useState<Doc[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const cachedData: { [key: string]: Doc[] } = {};

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      let keyword;
      switch (category) {
        case "서울":
          keyword = "%EC%84%9C%EC%9A%B8";
          break;
        case "제주":
          keyword = "%EC%A0%9C%EC%A3%BC";
          break;
        case "경기":
          keyword = "%EA%B2%BD%EA%B8%B0";
          break;
        case "강원":
          keyword = "%EA%B0%95%EC%9B%90";
          break;
      }

      if (cachedData[category]) {
        setData(cachedData[category]);
      } else {
        const res = await axios(
          `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=6&MobileOS=ETC&MobileApp=TripTogether&_type=json&arrange=Q&keyword=${keyword}&contentTypeId=12&serviceKey=2fn2wynhVTJUv2jVWDS3ZU1J9%2Fz1sqtrIEexyzI08LjxNIFDRzEjRauhYrjk%2Ffdiao9pqyVWrbwQw0HW7FpimQ%3D%3D`
        );
        const result = res.data.response.body.items.item;
        setData(result);

        cachedData[category] = result;
      }
      setIsLoading(false);
    }

    getData();
  }, [category]);

  return (
    <section className="w-full mb-[150px]">
      <div className="inner w-[1240px] mx-auto my-20">
        <h2 className="font-black text-4xl text-center">지역별 여행지</h2>
        <ul className="flex justify-center my-4">
          <CategoryTabMenu
            category={category}
            onClick={() => {
              setCategory("서울");
            }}
          >
            서울
          </CategoryTabMenu>
          <CategoryTabMenu
            category={category}
            onClick={() => {
              setCategory("제주");
            }}
          >
            제주
          </CategoryTabMenu>
          <CategoryTabMenu
            category={category}
            onClick={() => {
              setCategory("강원");
            }}
          >
            강원
          </CategoryTabMenu>
          <CategoryTabMenu
            category={category}
            onClick={() => {
              setCategory("경기");
            }}
          >
            경기
          </CategoryTabMenu>
        </ul>
        {isLoading ? (
          <LoadingCircle />
        ) : (
          // 데이터 로딩이 완료된 경우의 UI
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
        )}
      </div>
    </section>
  );
}
