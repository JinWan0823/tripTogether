import { Link } from "react-router-dom";

export default function TravelCard(props: {
  title: string;
  firstimage: string;
  addr1: string;
  contentid: number;
  tel: string;
}) {
  const { title, firstimage, addr1, contentid, tel } = props;
  return (
    <li className="w-[30%] mt-[40px] bg-[#f9f9f9] rounded-xl overflow-hidden">
      <Link to={`${contentid}`}>
        <div className="overflow-hidden">
          <img
            src={firstimage}
            alt="관광지 대표사진"
            className="w-full object-cover duration-300 hover:scale-110"
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
