import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "./slices/tweet";
import userSlice from "./slices/user";
import trendSlice from "./slices/trend";
import messageSlice from "./slices/message";
import selectedTweetSlice from "./slices/selectedTweet";

const store = configureStore({
    reducer: {
        tweet: tweetSlice,
        user: userSlice,
        trend: trendSlice,
        message: messageSlice,
        selectedTweet: selectedTweetSlice,
    },
});

export default store;
