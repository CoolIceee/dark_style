import axios from 'axios'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface UserAttributes {
  login: string | undefined
  password: string | undefined
}

export const loginUser = createAsyncThunk<any, UserAttributes, { rejectValue: string }>(
  'subcategories/postLoginUser',
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
export const registerUser = createAsyncThunk<any[], string, { rejectValue: string }>(
  'subcategories/postRegisterUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7777/subcategories/sub/${id}`)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

interface authState {
  token: string | null
}
const initialState: authState = {
  token: localStorage.getItem('token')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default authSlice.reducer
