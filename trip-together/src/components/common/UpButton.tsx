import upbtn from "../../assets/icon/upbtn.svg";
export default function UpButton() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="w-[60px] h-[60px] rounded-full bg-point-color fixed bottom-[20px] left-[20px]  flex items-center justify-center"
    >
      <img src={upbtn} alt="up-btn" className="w-[50px]" />
    </button>
  );
}
