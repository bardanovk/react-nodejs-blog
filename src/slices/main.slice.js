import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../common/enums";

const initialState = {
    requestStatus: LoadingStatuses.idle,
    user: {},
    userIsLogging: false,
};

const mainSlice = createSlice({
    name: 'Main',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserIsLogging: (state, action) => {
            state.userIsLogging = action.payload;
        },
        setRequestStatus: (state, action) => {
            state.requestStatus = action.payload;
        },
    }
});

export const {
    setRequestStatus,
    setUserIsLogging,
    setUser,
} = mainSlice.actions;

export const selectRequestStatus = (state) => state.main.requestStatus;

export const selectUser = (state) => state.main.user;

export const selectUserIsLogging = (state) => state.main.userIsLogging;

export const mainReducer = mainSlice.reducer;