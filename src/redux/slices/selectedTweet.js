
import { createSlice } from '@reduxjs/toolkit';

const selectedTweetSlice = createSlice({
    name: 'selectedTweet',
    initialState: {
        data : {}
    },
    reducers: {
        setSelectedTweet: (state, action) => {
            state.data = action.payload;
        },
        clearSelectedTweet: (state) => {
            state.data = {};
        },
    },
});

export const { setSelectedTweet, clearSelectedTweet } = selectedTweetSlice.actions;

export default selectedTweetSlice.reducer;
