import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_USER_URL = "https://64fe9394f8b9eeca9e28d2eb.mockapi.io/api/v1/user";
const initialState = {
    loading: false,
    data: [],
    eror : ''
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    try {
        const data = await axios.get(BASE_USER_URL);
        return { data: data.data };
    } catch (e) {
        console.log(e);
    }
})

const userSlice = createSlice({
    name: "user",
    initialState: { ...initialState },
    reducers: {
        reset: () => initialState,
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchUser.rejected, (state,action) => {
            state.loading = false;
            state.data = [];
            state.eror = action.error.message
        })
    }
});

export const { reset, setUser } = userSlice.actions;
export default userSlice.reducer;
