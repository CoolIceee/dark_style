import axios from 'axios'
import { IProductCategory } from 'types/model'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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
  }
})

export default productCategorySlice.reducer
