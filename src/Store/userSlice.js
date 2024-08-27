import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null 
    },
    reducers : {
        addUser : (state , action )=>{
            state.user = action.payload;    
        },
        deleteUser : (state  ) => {
            state.user = null;  
        },
        updateUserName : (state , action )=> {
            state.user.userName = action.payload; 
        },
        updateProfilePicture : (state , action )=> {
            state.user.profilePicture = action.payload; 
        }
    }
})

export const {addUser , deleteUser , updateProfilePicture ,updateUserName } = userSlice.actions ;
export default userSlice.reducer ;