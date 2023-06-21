interface SubBannerProps {
  firstimage: string;
}

export default function SubBanner({ firstimage }: SubBannerProps) {
  return (
    <div
      className="w-full h-[450px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${firstimage})` }}
    >
      <div className="absolute w-full h-full bg-[#0000003d]"></div>
    </div>
  );
}
