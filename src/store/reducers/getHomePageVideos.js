import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "ucount/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      ucountApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video`
    );
      // console.log(response.data.items);
      
      const items = response.data.items;

      // console.log(items);
    const parsedData = await parseData(items);
    
    return { parsedData : [...videos,...parsedData],nextPageToken:nextPageTokenFromState}
  }
);
