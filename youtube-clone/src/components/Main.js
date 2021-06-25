import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import * as videoActions from "../actions/VideoActions";

function Main() {
  const dispatch = useDispatch();
  const youtubeData = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(videoActions.fetchVideos());
  }, []);

  return (
    <div className="w-full custom-body">
      <Sidebar />
      <Home videos={youtubeData.videos} />
    </div>
  );
}

export default Main;
