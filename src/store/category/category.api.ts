import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory } from '../../types/model'

export const categoryApi = createApi({
  reducerPath: 'category/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7777/category/'
  }),
  endpoints: (build) => ({
    searchCategory: build.query<ICategory[], string>({
      query: (search: string) => ({
        url: '/site/category'
      })
    })
  })
})

export const { useSearchCategoryQuery } = categoryApi
