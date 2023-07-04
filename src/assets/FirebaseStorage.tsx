import { getStorage, ref } from "firebase/storage";
import { app, storage } from "../firebase";

const getImage = async (imageName: string) => {
  const storageRef = storage.ref(`image/${imageName}`);
  const fileRef = storageRef.child(imageName);
  const url = await fileRef.getDownloadURL();

  return url;
};

const downloadImage = async (imageName) => {
  const storageRef = ref(storage);
  const fileRef = child(storageRef, "image/" + imageName);
  const url = await getDownloadURL(fileRef);
  console.log("이미지 다운로드 URL:", url);
};
