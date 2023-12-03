import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "./slices/tweet";
import userSlice from "./slices/user";
import trendSlice from "./slices/trend";
import messageSlice from "./slices/message";

const store = configureStore({
    reducer: {
        tweet: tweetSlice,
        user: userSlice,
        trend: trendSlice,
        message: messageSlice,
    },
});

export default store;
