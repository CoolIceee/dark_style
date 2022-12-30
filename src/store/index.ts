import { configureStore } from '@reduxjs/toolkit'

import categorySlice from './features/categorySlice'
import productSlice from './features/productSlice'
import subcategoriesSlice from './features/subcategoriesSlice'
export const store = configureStore({
  reducer: {
    category: categorySlice,
    subcategory: subcategoriesSlice,
    product: productSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
