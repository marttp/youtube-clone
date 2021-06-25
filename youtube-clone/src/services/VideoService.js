import { firebaseDatabase } from "../firebase/firebase";

export const fetchVideos = async () => {
  const leafRoot = "videos";
  const snapshot = await firebaseDatabase.ref(leafRoot).once("value");
  return snapshot.val();
};
