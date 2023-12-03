import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMessage } from "../../services/message";

const initialState = {
    loading: false,
    data: [],
    eror: "",
};

export const fetchMessage = createAsyncThunk("tweet/fetchMessage", async () => {
    try {
        const response = await getMessage();
        if (response) {
            return { data: response.data.data };
        }
    } catch (e) {
        console.log(e);
    }
});

const messageSlice = createSlice({
    name: "message",
    initialState: { ...initialState },
    reducers: {
        reset: () => initialState,
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchMessage.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.eror = action.error.message;
        });
    },
});

export const { reset, setData } = messageSlice.actions;
export default messageSlice.reducer;
