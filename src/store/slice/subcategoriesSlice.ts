import axios from 'axios'
import { ISubCategory } from 'types/model'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const getACategory = createAsyncThunk<ISubCategory[], string, { rejectValue: string }>(
  'subcategories/getACategory',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7777/gender/commodity/gc/${id}`)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
interface SubcategoriesState {
  subcategories: ISubCategory[]
  isLoading: boolean
  error: string | null | undefined
}
const initialState: SubcategoriesState = {
  subcategories: [],
  isLoading: false,
  error: null
}
const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getACategory.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getACategory.fulfilled, (state, action) => {
        state.subcategories = action.payload
        state.isLoading = false
      })
      .addCase(getACategory.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})
export default subcategorySlice.reducer
