import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function WriteForm() {
  const [radio, setRadio] = useState("on");

  const handleRadio = (e) => {
    setRadio(e.target.value);
  };
  const userInfo = useContext(AuthContext);
  console.log(userInfo?.displayName);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className=" w-[1140px] mx-auto my-[100px] border-[#dfdfdf] shadow-3xl border-solid border-[1px] rounded-[20px] p-[40px] py-[45px]">
        <div>
          <dl>
            <dt className="text-[80px] font-bold">
              <span className="text-point-color">CONTACT</span> US
            </dt>
            <dd className="text-[30px] pt-[10px]">
              함께 여행갈 사람을 찾아보세요.
            </dd>
            <dd className="text-[18px]">
              <span className="text-point-color">*</span>은 필수 기재
              사항입니다.
            </dd>
          </dl>
        </div>
        <form>
          <div className="mt-[45px]">
            <label htmlFor="text" className="text-[20px] font-bold">
              제목 <span className="text-point-color">*</span>
            </label>
            <input
              id="text"
              type="text"
              placeholder="제목을 입력해주세요"
              className="w-full border-[1px] p-[10px]"
              required
            />
          </div>
          <div className="flex w-full justify-between mt-[20px]">
            <div className="w-[48%]">
              <label htmlFor="email" className="text-[20px] font-bold">
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                className="w-full border-[1px] p-[10px]"
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="" className="text-[20px] font-bold">
                예상 날짜 <span className="text-point-color">*</span>
              </label>
              <input
                id="date"
                type="date"
                className="w-full border-[1px] p-[10px]"
                required
              />
            </div>
          </div>
          <div className="flex items-start justify-between mt-[20px]">
            <div className="w-[48%]">
              <label className="text-[20px] font-bold">
                내용 <span className="text-point-color">*</span>
              </label>
              <textarea
                name="wr_content"
                id="textarea"
                className="w-full p-[10px] border-[1px] min-h-[200px]"
                placeholder="- 내용을 입력해주세요."
                required
              ></textarea>
            </div>
            <div className="w-[48%]">
              <div className="w-full">
                <p className="text-[20px] font-bold">
                  모집중 <span className="text-point-color">*</span>
                </p>
                <div className="flex mt-[15px]">
                  <div className="w-[48%]">
                    <label
                      htmlFor="on"
                      className={`w-full h-[50px] text-white font-bold text-[18px] inline-flex items-center justify-center rounded-[10px] cursor-pointer ${
                        radio === "on" ? "bg-point-color" : "bg-[#666]"
                      }`}
                    >
                      On
                    </label>
                    <input
                      type="radio"
                      id="on"
                      name="recruit"
                      value="on"
                      className="hidden"
                      onClick={handleRadio}
                    />
                  </div>
                  <div className="w-[48%]">
                    <label
                      htmlFor="off"
                      className={`w-full h-[50px] ml-[10px] text-white font-bold text-[18px] inline-flex items-center justify-center rounded-[10px]  cursor-pointer ${
                        radio === "off" ? "bg-point-color" : "bg-[#666]"
                      }`}
                    >
                      Off
                    </label>
                    <input
                      type="radio"
                      id="off"
                      name="recruit"
                      value="off"
                      className="hidden"
                      onClick={handleRadio}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-[50px] bg-point-color inline-flex items-center justify-center rounded-[10px] text-white font-bold mt-[20px]"
              >
                작성하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
