import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ISubCategory } from 'types/model'

export const getOneDataSubcategories = createAsyncThunk<
  ISubCategory[],
  string,
  { rejectValue: string }
>('subcategories/getOneDateSubcategories', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:7777/subcategories/sub/${id}`)

    const data = await response.data

    return data
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})


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
      .addCase(getOneDataSubcategories.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getOneDataSubcategories.fulfilled, (state, action) => {
        state.subcategories = action.payload
        state.isLoading = false
      })
      .addCase(getOneDataSubcategories.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export default subcategorySlice.reducer
