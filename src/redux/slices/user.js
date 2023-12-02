import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    eror: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: { ...initialState },
    reducers: {
        reset: () => initialState,
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { reset, setUser } = userSlice.actions;
export default userSlice.reducer;
