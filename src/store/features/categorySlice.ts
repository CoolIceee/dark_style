import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ICategory } from 'types/model'

export const getCategory = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
  'category/getCategory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7777/category/category`)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
export const getOneCategory = createAsyncThunk<ICategory[], string, { rejectValue: string }>(
  'category/getOneCategory',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7777/category/category/${id}`)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

interface CategoryState {
  category: ICategory[]
  oneCategory: ICategory[]
  isLoading: boolean
  error: string | null | undefined
}
const initialState: CategoryState = {
  category: [],
  oneCategory: [],
  isLoading: false,
  error: null
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.category = action.payload
        state.isLoading = false
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.error = action.payload
      })
    builder
      .addCase(getOneCategory.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getOneCategory.fulfilled, (state, action) => {
        state.oneCategory = action.payload
        state.isLoading = false
      })
      .addCase(getOneCategory.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export default categorySlice.reducer
