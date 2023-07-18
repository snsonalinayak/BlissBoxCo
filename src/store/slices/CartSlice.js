const { createSlice } = require("@reduxjs/toolkit");

const cartSlice= createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        add_to_cart(state,action){
            state.push(action.payload)
        },
        remove_from_cart(state,action){
            state.splice(action.payload,1);
        },
    }
});


export const {add_to_cart, remove_from_cart}= cartSlice.actions;
export default cartSlice.reducer;