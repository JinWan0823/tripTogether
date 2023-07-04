import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

interface Comment {
  postId: string;
  content: string;
  date: string;
  name: string;
}

export default function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsRef = collection(db, "comment");
        const q = query(commentsRef, where("postId", "==", id));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const commentsData: Comment[] = [];
          querySnapshot.forEach((doc) => {
            const commentData = doc.data() as Comment;
            commentsData.push({
              postId: commentData.postId,
              content: commentData.content,
              date: commentData.date,
              name: commentData.name,
            });
          });
          setComments([...commentsData]);
        });
        return () => unsubscribe();
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [id]);

  useEffect(() => {
    const updateCommentsLength = async () => {
      try {
        const travelDocRef = doc(collection(db, "travel"), id);
        const travelDoc = await getDoc(travelDocRef);
        if (travelDoc.exists()) {
          const currentCommentsLength = travelDoc.data().comments.length;
          if (currentCommentsLength !== comments.length) {
            await updateDoc(travelDocRef, { comments: comments.length });
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateCommentsLength();
  }, [comments, id]);

  return (
    <>
      <div className="p-[20px] py-[10px] w-full bg-[#f5f5f5]">
        <p className="font-bold  text-[18px]">
          댓글 <span className="text-point-color">{comments.length}</span>
        </p>
      </div>
      <ul className="border-b-[1px] border-solid border-[#dfdfdf]">
        {comments.map((comment, idx) => (
          <li
            key={idx}
            className="p-[20px] py-[10px] border-t-[1px] border-[#dfdfdf] border-solid"
          >
            {/* {comment.content}
            {comment.date}
            {comment.name} */}
            <div>
              <p className="text-[#666]">
                {comment.name} ({comment.date})
              </p>
              <p className="text-[18px]">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
