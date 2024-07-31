import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: "",
    nextPageToker: null,
    recommendedVideo:[]
    
}

const ucontSlice = createSlice({
    name: "ucontApp",
    initialState,
    reducers: {
        
    },
    extraReducer: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
        
    })
    }
})

export default ucontSlice.reducer;