import axios from 'axios'
import { IProduct } from 'types/model'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const getProduct = createAsyncThunk<IProduct[], undefined, { rejectValue: string }>(
  'product/getProduct',
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
export const getOneGenderProduct = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
  'product/getOneGenderProduct',
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
export const getProductByCategory = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
  'product/getProductByCategory',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:7777/product/get/subcategory/product/${id}`
      )
      const data = await response.data
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
export const getSubcategoryProduct = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
  'product/getSubcategoryProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:7777/product/get/subcategory/category/product/${id}`
      )
      const data = await response.data
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const addShoppingCart = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
  'basket/addShoppingCart',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: 'Bearer ' + String(localStorage.getItem('token'))
        }
      }
      const response = await axios.post(`http://localhost:7777/basket/add/user/${id}`, {}, config)
      const data = await response.data
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

interface CategoryState {
  product: IProduct[]
  isLoading: boolean
  isAddBasLoading: boolean
  error: string | null | undefined
}
const initialState: CategoryState = {
  product: [],
  isLoading: false,
  isAddBasLoading: false,
  error: null
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addShoppingCart.pending, (state, action) => {
        state.error = null
      })
      .addCase(addShoppingCart.fulfilled, (state, action) => {
        // state.product = action.payload
      })
      .addCase(addShoppingCart.rejected, (state, action) => {
        state.error = action.payload
      })
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.product = []
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
      .addCase(getOneGenderProduct.pending, (state, action) => {
        state.product = []
        state.isLoading = true
        state.error = null
      })
      .addCase(getOneGenderProduct.fulfilled, (state, action) => {
        state.product = action.payload
        state.isLoading = false
      })
      .addCase(getOneGenderProduct.rejected, (state, action) => {
        state.error = action.payload
      })
    builder
      .addCase(getProductByCategory.pending, (state, action) => {
        state.product = []
        state.isLoading = true
        state.error = null
      })
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.product = action.payload
        state.isLoading = false
      })
      .addCase(getProductByCategory.rejected, (state, action) => {
        state.error = action.payload
      })
    builder
      .addCase(getSubcategoryProduct.pending, (state, action) => {
        state.product = []
        state.isLoading = true
        state.error = null
      })
      .addCase(getSubcategoryProduct.fulfilled, (state, action) => {
        state.product = action.payload
        state.isLoading = false
      })
      .addCase(getSubcategoryProduct.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})
export default productSlice.reducer
