export default function LoadingCircle() {
  return (
    <>
      <div className="h-[400px] flex items-center justify-center flex-col">
        <div className="animate-spin w-[100px] h-[100px] border-solid rounded-full border-4 border-[#cecbcb] border-y-[#09847F]"></div>
        <p className="font-bold mt-[10px] text-[20px]">Loading...</p>
      </div>
    </>
  );
}
