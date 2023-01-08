import axios from 'axios'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProductCategory } from 'types/model'

export const getProductCategory = createAsyncThunk<
  IProductCategory[],
  string,
  { rejectValue: string }
>('productCategory/getProductCategory', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:7777/product/categories/cat/${id}`)

    const data = await response.data

    return data
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})
// export const getOneCategory = createAsyncThunk<ICategory[], string, { rejectValue: string }>(
//   'category/getOneCategory',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://localhost:7777/category/category/${id}`)

//       const data = await response.data

//       return data
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// )

interface CategoryState {
  productCategory: IProductCategory[]
  isLoading: boolean
  error: string | null | undefined
}
const initialState: CategoryState = {
  productCategory: [],
  isLoading: false,
  error: null
}

const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategory.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.productCategory = action.payload
        state.isLoading = false
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.error = action.payload
      })
    // builder
    //   .addCase(getOneCategory.pending, (state, action) => {
    //     state.isLoading = true
    //     state.error = null
    //   })
    //   .addCase(getOneCategory.fulfilled, (state, action) => {
    //     state.oneCategory = action.payload
    //     state.isLoading = false
    //   })
    //   .addCase(getOneCategory.rejected, (state, action) => {
    //     state.error = action.payload
    //   })
  }
})

export default productCategorySlice.reducer
