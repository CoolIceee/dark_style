import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ISubcategories } from '../../types/model'

export const productApi = createApi({
  reducerPath: 'product/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7777/subcategories/'
  }),
  endpoints: (build) => ({
    getDataCategory: build.query<ISubcategories[], string>({
      query: (search: string) => ({
        url: `sub/${search}`
      })
    })
  })
})

export const { useGetDataCategoryQuery } = productApi
