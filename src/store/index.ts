import { configureStore } from '@reduxjs/toolkit'

import { categoryApi } from './category/category.api'
import { productApi } from './product/product.api'

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware, productApi.middleware)
})

export default store
