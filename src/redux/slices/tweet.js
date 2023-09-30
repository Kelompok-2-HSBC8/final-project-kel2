import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_TWEET_URL =
    "https://64fe9394f8b9eeca9e28d2eb.mockapi.io/api/v1/tweet";

const initialState = {
    loading: false,
    data: [],
    eror : ''
};

export const fetchTweets = createAsyncThunk("tweet/fetchTweet", async () => {
    try {
        const data = await axios.get(BASE_TWEET_URL);
        return { data: data.data };
    } catch (e) {
        console.log(e);
    }
});

const tweetSlice = createSlice({
    name: "tweet",
    initialState: { ...initialState },
    reducers: {
        reset: () => initialState,
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTweets.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTweets.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchTweets.rejected, (state,action) => {
            state.loading = false;
            state.data = [];
            state.eror = action.error.message
        })
    },
});

export const { reset, setUser } = tweetSlice.actions;
export default tweetSlice.reducer;
