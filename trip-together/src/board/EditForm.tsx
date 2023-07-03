import { useState, useEffect, useContext, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { db } from "../firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const { id } = useParams();
  const [radio, setRadio] = useState("on");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const postRef = doc(collection(db, "travel"), id);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const docSnap = await getDoc(postRef);
        if (docSnap.exists()) {
          const postData = docSnap.data();
          console.log(postData);
          setTitle(postData.title);
          setEmail(postData.email);
          setDate(postData.date);
          setContent(postData.content);
          setRadio(postData.recruit);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPostData();
  }, []);

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setRadio(event.currentTarget.value);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDoc(postRef, {
        title: title,
        email: email,
        date: date,
        content: content,
        recruit: radio,
      });
      alert("수정이 완료되었습니다.");
      navigate(`/view/${id}`);
    } catch (error) {
      console.error("Error updating post:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  // ...

  return (
    <>
      <div className=" w-[1140px] mx-auto my-[100px] border-[#dfdfdf] shadow-4xl border-solid border-[1px] rounded-[20px] p-[40px] py-[45px]">
        <form onSubmit={handleSubmit}>
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
              onChange={handleTitleChange}
              value={title}
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
                onChange={handleEmailChange}
                value={email}
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
                onChange={handleDateChange}
                value={date}
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
                onChange={handleContentChange}
                value={content}
              ></textarea>
            </div>
            <div className="w-[48%]">
              <div className="w-full">
                <p className="text-[20px] font-bold">
                  모집중 <span className="text-point-color">*</span>
                </p>
                <div className="flex mt-[15px] justify-between">
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
                      onChange={handleRadio}
                      checked={radio === "on"} // 추가: 선택된 상태일 때 체크되도록 설정
                    />
                  </div>
                  <div className="w-[48%]">
                    <label
                      htmlFor="off"
                      className={`w-full h-[50px] text-white font-bold text-[18px] inline-flex items-center justify-center rounded-[10px]  cursor-pointer ${
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
                      onChange={handleRadio}
                      checked={radio === "off"} // 추가: 선택된 상태일 때 체크되도록 설정
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-[50px] bg-point-color inline-flex items-center justify-center rounded-[10px] text-white font-bold mt-[20px]"
                onClick={handleSubmit}
              >
                수정하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
