import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserStore {
    user?: any
}

const initialState: UserStore = {
    user: undefined,
}

export const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },    
    },
});

export const {setUserAction} = userSlice.actions
export default userSlice.reducer