import { createReducer} from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isvalid:false
},(builder)=>{
    builder.addCase("login",(state,action)=>{
        state.user=action.payload;
        state.isvalid=true;
        }).addCase( "logout",(state,action)=>{
            state.user=null;
            state.isvalid=false;
        }).addCase("load",(state,action)=>{
            state.user=action.payload.data;
            state.isvalid=true;
            state.token = action.payload.token;
        }).addCase("sub",(state,action)=>{
            state.sub=action.payload;
        })
    
});