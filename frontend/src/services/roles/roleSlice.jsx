import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    role: localStorage.getItem("role") || "User"
}

const roleSlice = createSlice({
    name: "user_role",
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const {setRole} = roleSlice.actions;
export default roleSlice.reducer;
