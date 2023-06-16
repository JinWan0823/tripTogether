export default function LoginButton(props: { children: React.ReactNode }) {
  return (
    <>
      <button
        type="submit"
        className="w-full mt-[10px] bg-[#333] text-white p-2"
      >
        {props.children}
      </button>
    </>
  );
}
