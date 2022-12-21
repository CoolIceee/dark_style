import { configureStore } from '@reduxjs/toolkit'

import { categoryApi } from './category/category.api'

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware)
})

export default store
