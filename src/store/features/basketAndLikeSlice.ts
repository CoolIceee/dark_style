import axios from 'axios'
import { IBasket } from 'types/model'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const addBasket = createAsyncThunk<IBasket[], string, { rejectValue: string }>(
  'basket/addBasket',
  async (id, { rejectWithValue }) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + String(localStorage.getItem('token'))
      }
    }
    try {
      const response = await axios.post(`http://localhost:7777/basket/add/user/${id}`, {}, config)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
export const addShoppingCart = createAsyncThunk<IBasket[], string, { rejectValue: string }>(
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
export const getBasket = createAsyncThunk<IBasket[], undefined, { rejectValue: string }>(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + String(localStorage.getItem('token'))
      }
    }
    try {
      const response = await axios.get(`http://localhost:7777/basket/get/user`, config)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
interface basketState {
  basket: IBasket[]
  isLoading: boolean
  error: string | null | undefined
}
const initialState: basketState = {
  basket: [],
  isLoading: false,
  error: null
}
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getBasket.fulfilled, (state, action) => {
        state.basket = action.payload
        state.isLoading = false
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.error = action.payload
      })
    builder
      .addCase(addShoppingCart.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(addShoppingCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.basket = action.payload
      })
      .addCase(addShoppingCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})
export default basketSlice.reducer
