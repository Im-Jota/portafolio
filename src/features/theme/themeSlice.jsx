import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const theme = localStorage.getItem('theme');
let the, sThe;

if(theme === null) {
    the = 'light';
    sThe = 'dark';
    localStorage.setItem("theme", "light");
} else {
    if(theme === 'light'){
        the = theme
        sThe = 'dark'
    } else {
        the = theme
        sThe = 'light'
    }
}

const initialState = {
    theme: the,
    selectedTheme: sThe
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.selectedTheme = state.theme
            state.theme = action.payload
            localStorage.setItem('theme', action.payload)
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer