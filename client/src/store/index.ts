import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slice/authSlice'
import basketSlice from './slice/basketAndLikeSlice'
import categorySlice from './slice/categorySlice'
import productCategorySlice from './slice/productCategorySlice'
import productSlice from './slice/productSlice'
import subcategoriesSlice from './slice/subcategoriesSlice'
import userSlice from './slice/userSlice'
export const store = configureStore({
  reducer: {
    category: categorySlice,
    subcategory: subcategoriesSlice,
    product: productSlice,
    auth: authSlice,
    user: userSlice,
    pCategory: productCategorySlice,
    basket: basketSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
