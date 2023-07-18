import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/CartSlice';
import wishlistSlice from './slices/WishlistSlice';

const store= configureStore({
    reducer:{
        cart:cartSlice,
        wishlist:wishlistSlice
    }
})

export default store;