import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useParams } from "react-router-dom";

export default function CommentForm() {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const userInfo = useContext(AuthContext);
  const addComment = async () => {
    try {
      if (!userInfo) {
        alert("로그인 회원만 작성 가능합니다!");
      }

      if (comment && id) {
        const commentData = {
          postId: id, // 해당 게시물의 ID로 설정
          content: comment,
          date: new Date().toISOString().slice(0, 10),
          name: userInfo?.displayName, // 댓글 작성자 이름 설정
        };
        const commentRef = collection(db, "comment");
        await addDoc(commentRef, commentData);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="w-full flex p-[20px]  justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
      >
        <textarea
          name="comment"
          placeholder="댓글을 입력하세요."
          className="w-[83%] p-[10px] border-[1px] border-[#999] min-h-[150px]"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button type="submit" className="w-[15%] bg-point-color text-white">
          작성하기
        </button>
      </form>
    </>
  );
}
