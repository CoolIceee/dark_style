import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory, IProduct, ISubcategories } from '../../types/model'

export const getApi = createApi({
  reducerPath: 'category/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7777/'
  }),
  endpoints: (build) => ({
    searchCategory: build.query<ICategory[], string>({
      query: (search: string) => ({
        url: 'category/site/category'
      })
    }),
    getDataCategory: build.query<ISubcategories[], string>({
      query: (search: string) => ({
        url: `subcategories/sub/${search}`
      })
    }),
    getProduct: build.query<IProduct[], string>({
      query: (search: string) => ({
        url: `product/get`
      })
    })
  })
})

export const { useSearchCategoryQuery, useGetDataCategoryQuery, useGetProductQuery } = getApi
