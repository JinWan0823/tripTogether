import { Link } from "react-router-dom";
import ScrollTo from "../commonFunction/scrollTo";

export default function TravelCard(props: {
  title: string;
  firstimage: string;
  addr1: string;
  contentid: number;
  tel: string;
  contentType?: number;
}) {
  const { title, firstimage, addr1, contentid, tel, contentType } = props;
  const validContentType = contentType !== undefined ? contentType : 12;
  return (
    <li className="w-[30%] mt-[40px] bg-[#f9f9f9] rounded-xl overflow-hidden">
      <Link
        to={`/${contentid}`}
        state={{ contentType: validContentType }}
        onClick={ScrollTo}
      >
        <div className="overflow-hidden">
          <img
            src={firstimage}
            alt="관광지 대표사진"
            className="w-full object-cover duration-300 hover:scale-110 h-[430px]"
          />
        </div>
        <div className="p-[10px] py-[20px] text-[#999]">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="mt-[5px]">{addr1}</p>
          <p>{tel}</p>
        </div>
      </Link>
    </li>
  );
}
