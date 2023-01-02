import axios from 'axios'
import { IUser } from 'types/model'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const dataUser = createAsyncThunk<IUser[], undefined, { rejectValue: string }>(
  'subcategories/dataUser',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: 'Bearer ' + String(localStorage.getItem('token'))
        }
      }
      const response = await axios.get(`http://localhost:7777/authorization/my/data`, config)

      const data = await response.data

      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
// export const registerUser = createAsyncThunk<any[], string, { rejectValue: string }>(
//   'subcategories/postRegisterUser',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://localhost:7777/subcategories/sub/${id}`)

//       const data = await response.data

//       return data
//     } catch (error: any) {
//       return rejectWithValue(error.message)
//     }
//   }
// )

interface authState {
  userDate: IUser[]
  isLoading: boolean
  error: string | null
}
const initialState: authState = {
  userDate: [],
  isLoading: false,
  error: null
}
const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dataUser.pending, (state, action) => {
        state.userDate = []
        state.isLoading = true
        state.error = null
      })
      .addCase(dataUser.fulfilled, (state, action) => {
        state.userDate = action.payload
        state.isLoading = true
        state.error = null
      })
      .addCase(dataUser.rejected, (state, action) => {
        state.userDate = []
        state.isLoading = true
        state.error = null
      })
  }
})

export default authSlice.reducer
