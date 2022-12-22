import { configureStore } from '@reduxjs/toolkit'

import { getApi } from './get.api/get.api'

export const store = configureStore({
  reducer: {
    [getApi.reducerPath]: getApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getApi.middleware)
})

export default store
