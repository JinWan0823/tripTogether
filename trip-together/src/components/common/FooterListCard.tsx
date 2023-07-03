import { Link } from "react-router-dom";
import { ListData } from "../../board/ListForm";
import { useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import ScrollTo from "../../commonFunction/scrollTo";
interface ListCardProps {
  item: ListData;
  idx: number;
}

export default function FooterListCard({ item, idx }: ListCardProps) {
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
    <>
      <li
        onClick={updateViews}
        className="p-[20px] mt-[40px] border-solid border-4 border-[#fff] rounded-[10px]"
      >
        <Link to={`/view/${item.id}`} onClick={ScrollTo}>
          <p className="text-white font-bold text-[20px]">
            {idx + 1}. {item.title}
          </p>
        </Link>
      </li>
    </>
  );
}
