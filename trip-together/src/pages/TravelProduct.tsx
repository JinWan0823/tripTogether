import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SubBanner from "../components/Subpage/SubBanner";
import Weather from "../components/common/Weater";
import TableRow from "../components/TableRow";
import SlickCarousel from "../components/Subpage/SlickCarousel";
import UpButton from "../components/common/UpButton";
import ScrollTo from "../commonFunction/scrollTo";

interface Doc {
  title: string;
  overview: string;
  firstimage: string;
  addr1: string;
  homepage: string;
  infocenter: string;
  chkbabycarriage: string;
  chkcreditcard: string;
  chkpet: string;
  restdate: string;
}

export default function TravelProduct() {
  const [data, setData] = useState<Doc[]>([]);
  const [info, setInfo] = useState<Doc[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const contentType = location.state.contentType;

  const { contentid } = useParams();
  useEffect(() => {
    async function getProduct() {
      const res = await axios(
        `https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=TripTogether&_type=json&contentId=${contentid}&contentTypeId=${contentType}&defaultYN=Y&firstImageYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=N&overviewYN=Y&serviceKey=2fn2wynhVTJUv2jVWDS3ZU1J9%2Fz1sqtrIEexyzI08LjxNIFDRzEjRauhYrjk%2Ffdiao9pqyVWrbwQw0HW7FpimQ%3D%3D`
      );
      const result = res.data.response.body.items.item;
      setData(result);
    }
    getProduct();
  }, []);

  useEffect(() => {
    async function getInfo() {
      const res = await axios(
        `https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=TripTogether&_type=json&contentId=${contentid}&contentTypeId=12&serviceKey=2fn2wynhVTJUv2jVWDS3ZU1J9%2Fz1sqtrIEexyzI08LjxNIFDRzEjRauhYrjk%2Ffdiao9pqyVWrbwQw0HW7FpimQ%3D%3D`
      );
      const result = res.data.response.body.items.item;
      setInfo(result);
    }
    getInfo();
  }, []);

  const handleList = () => {
    ScrollTo();
    navigate(-1);
  };

  return (
    <>
      <Header />
      {data.length > 0 && <SubBanner firstimage={data[0].firstimage} />}
      <Weather />
      <div className="w-[1300px] mx-auto py-[40px] px-[20px] my-[100px] border-solid rounded-[10px] border-2 border-[#eaeaea] shadow-4xl">
        <div className="flex justify-between ">
          <div id="imgWrap" className="w-[400px]">
            {data.length > 0 && (
              <SlickCarousel firstimage={data[0].firstimage} />
            )}
          </div>
          <div className="w-[calc(100%-440px)]">
            <h2 className="font-bold text-2xl">
              {data.length > 0 && data[0].title}
            </h2>
            <table className="w-full mt-[20px]">
              <caption className="h-0 text-[0px]">관광지 정보</caption>
              <tbody className="text-center border-t border-[#eaeaea] border-solid">
                <TableRow
                  label="주소"
                  value={
                    data.length > 0 && data[0].addr1 ? data[0].addr1 : undefined
                  }
                />
                {data.length > 0 && data[0].homepage && (
                  <tr className="border-b border-[#eaeaea] border-solid">
                    <th className="w-[40%] p-[10px] bg-[#f8f8f8]">홈페이지</th>
                    <td className="w-[60%] p-[10px]">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.length > 0 && data[0].homepage,
                        }}
                      ></p>
                    </td>
                  </tr>
                )}
                <TableRow
                  label="문의 및 안내"
                  value={
                    info.length > 0 && info[0].infocenter
                      ? info[0].infocenter
                      : undefined
                  }
                />
                <TableRow
                  label="유모차 대여여부"
                  value={
                    info.length > 0 && info[0].chkbabycarriage
                      ? info[0].chkbabycarriage
                      : undefined
                  }
                />
                <TableRow
                  label="애완동물 동반 가능여부"
                  value={
                    info.length > 0 && info[0].chkpet
                      ? info[0].chkpet
                      : undefined
                  }
                />
                <TableRow
                  label="신용카드 가능여부"
                  value={
                    info.length > 0 && info[0].chkcreditcard
                      ? info[0].chkcreditcard
                      : undefined
                  }
                />
                <TableRow
                  label="쉬는날"
                  value={
                    info.length > 0 && info[0].restdate
                      ? info[0].restdate
                      : undefined
                  }
                />
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-[20px] p-[10px]">
          <p className="font-bold text-2xl">개요</p>
          <p className="mt-[20px] text-lg leading-8">
            {data.length > 0 && data[0].overview}
          </p>
        </div>
        <button
          type="button"
          className="bg-point-color text-white w-[160px] rounded-[10px] h-[55px] mt-[40px]  text-lg"
          onClick={handleList}
        >
          이전
        </button>
      </div>
      <Footer />
      <UpButton />
    </>
  );
}
