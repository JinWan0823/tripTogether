interface TravelMenuProps {
  category: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function CategoryTabMenu({
  category,
  onClick,
  children,
}: TravelMenuProps) {
  const isActive = category === children;

  return (
    <>
      <li
        className={`mx-2 rounded-2xl  py-1 px-4 text-white hover:bg-[#09847F] cursor-pointer ${
          isActive ? "bg-point-color" : "bg-[#666]"
        }`}
        onClick={onClick}
      >
        {children}
      </li>
    </>
  );
}
