import { Link } from "react-router-dom";

interface ListCardProps {
  item: {
    writer: string;
    title: string;
    date: string;
    views: number;
    recruit: string;
    name: string;
    id: string;
    nowDate: string;
  };
}

export default function ListCard({ item }: ListCardProps) {
  console.log(item.id);
  return (
    <li className="flex items-center border-b-[1px] border-solid border-[#dfdfdf] w-full p-[30px] b px-[10px]">
      <div className="write_name w-[15%] text-center">
        <p>{item.name}</p>
      </div>
      <div className="write_tit w-[55%]">
        <Link to={`/view/${item.id}`}>
          <p className="text-[20px] font-bold">
            {item.title}
            <span
              className={`font-normal inline-block ml-[15px] rounded-[5px] recruit text-[18px]  px-[15px] py-[1px]  text-white ${
                item.recruit === "on" ? "bg-point-color" : "bg-[#666]"
              }`}
            >
              {item.recruit}
            </span>
          </p>
        </Link>
      </div>
      <div className="write_date w-[20%] text-center">
        <p>{item.date}</p>
      </div>
      <div className="write_views w-[10%] text-center">
        <p>{item.views}</p>
      </div>
    </li>
  );
}
