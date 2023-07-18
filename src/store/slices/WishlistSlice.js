const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice= createSlice({
    name:"wishlist",
    initialState:[],
    // initialState:{
//         age:[],
//         name:[] 
    // }
    reducers:{
        add_to_wishlist(state, action){
            state.push(action.payload)
        },
        remove_from_wishlist(state,action){
            state.splice(action.payload)
            
        }
    }

});

export const {add_to_wishlist, remove_from_wishlist}= wishlistSlice.actions;
export default wishlistSlice.reducer;