import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TravelCard from "../TravelCard";
import LoadingCircle from "../common/LoadingCircle";
import CategoryTabMenu from "../CategoryTabMenu";

interface Doc {
  title: string;
  modifiedtime: number;
  firstimage: string;
  addr1: string;
  contentid: number;
  tel: string;
}

export default function TravelTotalList() {
  const [data, setData] = useState<Doc[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [category, setCategory] = useState("제목순");
  const [title, setTitle] = useState<string>("여행지");
  const prevKeywordRef = useRef<string>("");
  const [contentType, setContentType] = useState<number>(12);
  const prevPathRef = useRef<string>("");

  const location = useLocation();

  const getList = async () => {
    setIsLoading(true);

    const param = location.pathname.split("/")[1];

    if (param === "festival") {
      setTitle("페스티벌");
      setContentType(15); // 페스티벌인 경우 contentType 값을 15로 설정
    } else {
      setTitle("여행지");
      setContentType(12); // 여행지인 경우 contentType 값을 12로 설정
    }

    let keyword = "O";
    switch (category) {
      case "제목순":
        keyword = "O";
        break;
      case "최신순":
        keyword = "R";
        break;
    }

    if (
      prevKeywordRef.current !== keyword ||
      prevPathRef.current !== location.pathname
    ) {
      setPageNum(1);
      setData([]);
      prevKeywordRef.current = keyword;
      prevPathRef.current = location.pathname;
    }

    const res = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1?numOfRows=6&pageNo=${pageNum}&MobileOS=ETC&MobileApp=TripTogether&serviceKey=2fn2wynhVTJUv2jVWDS3ZU1J9%2Fz1sqtrIEexyzI08LjxNIFDRzEjRauhYrjk%2Ffdiao9pqyVWrbwQw0HW7FpimQ%3D%3D&_type=json&showflag=1&arrange=${keyword}&contentTypeId=${contentType}`
    );

    const result = res.data.response.body.items.item;

    setData((prevData) => [...prevData, ...result]);
    setIsLoading(false);
  };

  useEffect(() => {
    getList();
  }, [pageNum, category, location.pathname, contentType]);

  const handleLoadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setPageNum(1); // 카테고리 변경 시 pageNum을 1로 초기화
    setData([]); // 카테고리 변경 시 data를 초기화
  };

  return (
    <>
      <div className="w-[1340px] mx-auto  my-[100px] flex flex-col items-center justify-center">
        <h2 className="font-black text-4xl text-center">전국 {title}</h2>
        <ul className="flex justify-center my-4">
          <CategoryTabMenu
            category={category}
            onClick={() => handleCategoryChange("제목순")}
          >
            제목순
          </CategoryTabMenu>
          <CategoryTabMenu
            category={category}
            onClick={() => handleCategoryChange("최신순")}
          >
            최신순
          </CategoryTabMenu>
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
              contentType={contentType}
            />
          ))}
        </ul>

        {isLoading ? (
          <LoadingCircle />
        ) : (
          <button
            className="bg-[#09847F] text-white w-[160px] rounded-[10px] h-[55px] mt-[40px]  text-lg"
            onClick={handleLoadMore}
          >
            더 보기
          </button>
        )}
      </div>
    </>
  );
}
