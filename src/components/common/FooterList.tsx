import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import FooterListCard from "./FooterListCard";

interface ListData {
  writer: string;
  title: string;
  date: string;
  views: number;
  recruit: string;
  name: string;
  id: string;
  nowDate: string;
  content: string;
  comments: number;
}

export default function FooterList() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const getList = async () => {
      const q = query(
        collection(db, "travel"),
        orderBy("views", "desc"),
        limit(4)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot) {
        const dataList = querySnapshot.docs.map(
          (doc) => doc.data() as ListData
        );
        setList(dataList);
      }
    };

    getList();
  }, []);

  return (
    <>
      <div className="py-[220px] w-[640px] mx-auto">
        <h2 className="text-center text-white font-bold text-[45px]">
          동행 <span className="text-point-color text-[60px]">HOT</span> 인기글
        </h2>
        <ul>
          {list.map((item, idx) => (
            <FooterListCard key={idx} item={item} idx={idx} />
          ))}
        </ul>
      </div>
    </>
  );
}
