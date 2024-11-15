import { createSlice } from "@reduxjs/toolkit";


export const userRoleSlice = createSlice({
    initialState : {
        value : localStorage.getItem("access_token") || "User"
    },

    reducers: {
        
    }
})