import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface iExplorerState {
    folders: [];
    isError: boolean;
    isSuccess: boolean,
    isLoading: boolean,
    message: any | string;
}

const initialState: iExplorerState = {
    folders: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Get folders
export const getFolders = createAsyncThunk(
    'folders/get',
    async (url: string | undefined, thunkAPI: any) => {
        try {            
            const response = await axios.get(`${url}`);
            return response.data;
        } catch (error: any) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const explorerSlice = createSlice({
    name: 'explorer',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFolders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFolders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.folders = action.payload;
            })
            .addCase(getFolders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { reset } = explorerSlice.actions;
export default explorerSlice.reducer;