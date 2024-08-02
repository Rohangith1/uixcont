import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {useAppDispatch,useAppSelector} from "../hooks/useApp"
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

const Home = () => {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.ucountApp.videos);
  useEffect(() => {
    dispatch(getHomePageVideos(false))

    try {
      console.log(videos);
    } catch (error) {
      console.log(error)
    }
    
},[dispatch])

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
