export default function LoginButton(props: { children: React.ReactNode }) {
  return (
    <>
      <button className="w-full mt-[10px] bg-point-color text-white p-2">
        {props.children}
      </button>
    </>
  );
}
