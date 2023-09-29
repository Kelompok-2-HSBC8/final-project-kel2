import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_TREND_URL =
    "https://65033966a0f2c1f3faebac66.mockapi.io/api/v1/TrendPage";
const BASE_SIDE_TREND_URL =
    "https://65033966a0f2c1f3faebac66.mockapi.io/api/v1/SideTrendPage";

const initialState = {
    loading: false,
    data: [],
    eror: "",
};

export const fetchTrend = createAsyncThunk("trend/fetchTrend", async () => {
    try {
        const data = await axios.get(BASE_TREND_URL);
        return { data: data.data };
    } catch (e) {
        console.log(e);
    }
});

export const fetchSideTrend = createAsyncThunk("sideTrend/fetchSideTrend", async () => {
    try {
        const data = await axios.get(BASE_SIDE_TREND_URL);
        return { data: data.data };
    } catch (e) {
        console.log(e);
    }
});

const trendSlice = createSlice({
    name: "trend",
    initialState: { ...initialState },
    reducers: {
        reset: () => initialState,
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrend.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTrend.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchTrend.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.eror = action.error.message;
        });
        builder.addCase(fetchSideTrend.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchSideTrend.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchSideTrend.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.eror = action.error.message;
        });
    },
});

export const { reset, setUser } = trendSlice.actions;
export default trendSlice.reducer;
