import { Link } from "react-router-dom";

export default function TravelCard(props: {
  title: string;
  firstimage: string;
  addr1: string;
  contentid: number;
}) {
  const { title, firstimage, addr1, contentid } = props;
  return (
    <li className="w-[30%] ml-[3%]">
      <Link to={`${contentid}`}>
        <img
          src={firstimage}
          alt="관광지 대표사진"
          className="w-full object-cover"
        />
        <h3>{title}</h3>
        <p>{addr1}</p>
      </Link>
    </li>
  );
}
