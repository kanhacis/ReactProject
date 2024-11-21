import { createSlice } from "@reduxjs/toolkit";


export const userRoleSlice = createSlice({
    name: "user_role",
    initialState : {
        value : localStorage.getItem("access_token") || "User"
    },

    reducers: {
        setRole: (state, action) => {
            state.value = action.payload
        }
    }
})