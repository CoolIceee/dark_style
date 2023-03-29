import axios from 'axios'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface UserAttributes {
  login: string | undefined
  password: string | undefined
}

export const loginUser = createAsyncThunk<any, UserAttributes, { rejectValue: string }>(
  'auth/loginUser',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:7777/authorization/login`, {
        login,
        password
      })
      localStorage.setItem('token', response.data.token)
      const data = await response.data
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
export const registerUser = createAsyncThunk<any, string, { rejectValue: string }>('auth/registerUser', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:7777/subcategories/sub/${id}`)
    const data = await response.data
    return data
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})
interface authState {
  token: string | null | boolean
  isLoading: boolean
}
const initialState: authState = {
  token: null,
  isLoading: false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.token = localStorage.getItem('token')
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})
export default authSlice.reducer
