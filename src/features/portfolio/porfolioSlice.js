import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const initialState = {
  portfolioItems: [],
  isLoading: true,
}

export const getPortfolioItems = createAsyncThunk(
  'portfolio/getPortfolioItems',
  async (i, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
      return querySnapshot.docs.map((doc) => doc.data())
    } catch (error) {
      return thunkAPI.rejectWithValue('sorry, something went wrong')
    }
  }
)

const porfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolioItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPortfolioItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.portfolioItems = action.payload
      })
      .addCase(getPortfolioItems.rejected, (state, action) => {
        console.log(action)
        state.isLoading = false
        alert(state.payload)
      })
  },
})

// export const {} = portfolioSlice.actions

export default porfolioSlice.reducer
