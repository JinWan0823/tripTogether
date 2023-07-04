import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ListData } from "./ListForm";
import ScrollTo from "../commonFunction/scrollTo";

interface ListCardProps {
  item: ListData;
}

export default function ListCard({ item }: ListCardProps) {
  const [isViewed, setIsViewed] = useState(false);

  const updateViews = async () => {
    if (!isViewed) {
      try {
        const travelDocRef = doc(db, "travel", item.id);
        await updateDoc(travelDocRef, { views: item.views + 1 });
        setIsViewed(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <li
      className="flex items-center border-b-[1px] border-solid border-[#dfdfdf] w-full p-[30px] b px-[10px]"
      onClick={updateViews}
    >
      <div className="write_name w-[15%] text-center">
        <p>{item.name}</p>
      </div>
      <div className="write_tit w-[60%]">
        <Link to={`/view/${item.id}`} onClick={ScrollTo}>
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
      <div className="write_date w-[15%] text-center">
        <p>{item.date}</p>
      </div>
      <div className="write_views w-[5%] text-center">
        <p>{item.comments}</p>
      </div>
      <div className="write_views w-[5%] text-center">
        <p>{item.views}</p>
      </div>
    </li>
  );
}
