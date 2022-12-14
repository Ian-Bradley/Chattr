import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    prefs: {
        showTimestamps: false,
        show24HourTime: false,
    },
};

let preferencesSlice = createSlice({
    name: 'prefs',
    initialState: initialState,
    reducers: {
        /*================================================*/
        /*================================================*/
        toggleTimestamps: function (state) {
            state.prefs.showTimestamps = !state.prefs.showTimestamps;
        },

        /*================================================*/
        /*================================================*/
        toggle24HourTime: function (state) {
            state.prefs.show24HourTime = !state.prefs.show24HourTime;
        },

        /*================================================*/
        /*================================================*/
    },
});
export const { toggleTimestamps, toggle24HourTime } = preferencesSlice.actions;
export default preferencesSlice.reducer;
