import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";


const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults:[],
    nextPageToken: null,
    recommendedVideo:[]
    
}

const ucontSlice = createSlice({
    name: "ucontApp",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            try {
                if (action.payload && action.payload.parsedData) {
                  state.videos = action.payload.parsedData;
                  state.nextPageToken = action.payload.nextPageToken;
                }
            } catch (error) {
                console.log(error)
            }
    })
    }
})

export default ucontSlice.reducer;