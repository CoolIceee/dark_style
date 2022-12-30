import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IProduct } from 'types/model'

export const getProduct = createAsyncThunk<IProduct[], undefined, { rejectValue: string }>(
  'category/getProduct',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7777/product/get`)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
export const getOneCategoryProduct = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
  'category/getOneCategoryProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7777/product/get/${id}`)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

interface CategoryState {
  product: IProduct[]
  oneCategoryProduct: IProduct[]
  isLoading: boolean
  error: string | null | undefined
}
const initialState: CategoryState = {
  product: [],
  oneCategoryProduct: [],
  isLoading: false,
  error: null
}

const productSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload
        state.isLoading = false
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.payload
      })
    builder
      .addCase(getOneCategoryProduct.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getOneCategoryProduct.fulfilled, (state, action) => {
        state.oneCategoryProduct = action.payload
        state.isLoading = false
      })
      .addCase(getOneCategoryProduct.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export default productSlice.reducer
