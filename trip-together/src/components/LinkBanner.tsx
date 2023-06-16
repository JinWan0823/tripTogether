import { Link } from "react-router-dom";

export default function LinkBanner() {
  return (
    <section className="relative h-[100px]">
      <div className="w-[1300px] mx-auto bg-[#09847F] rounded-[90px] flex shadow-3xl absolute left-[50%] translate-x-[-50%]">
        <Link
          to={"/"}
          className="flex-[50%] px-[70px] py-[75px] text-white relative after:w-0.5 after:h-[60%] after:bg-[#dcdcdc] after:content-[''] after:absolute after:right-1 after:top-[50%] after:translate-y-[-50%]"
        >
          <h3 className="font-bold text-3xl text-white">커뮤니티</h3>
          <p className="mt-3 text-xl relative">
            커뮤니티에서 함께할 사람을 찾아보세요.
          </p>
          <i className="fa-solid fa-user-group absolute top-[50%] translate-y-[-50%] right-[60px] text-5xl"></i>
        </Link>
        <Link
          to={"/"}
          className="flex-[50%] px-[70px] py-[75px] text-white relative"
        >
          <h3 className="font-bold text-3xl text-white">여행/행사 정보</h3>
          <p className="mt-3 text-xl relative">
            더 많은 여행지/행사를 찾아보세요.
          </p>
          <i className="fa-regular fa-map absolute top-[50%] translate-y-[-50%] right-[60px] text-5xl"></i>
        </Link>
      </div>
    </section>
  );
}
