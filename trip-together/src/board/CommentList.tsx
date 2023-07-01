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

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.postId}>
          {comment.content}
          {comment.date}
          {comment.name}
        </div>
      ))}
    </>
  );
}
