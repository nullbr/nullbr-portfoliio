import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const initialState = {
  portfolioItems: [],
  isLoading: true,
  showForm: false,
}

export const getPortfolioItems = createAsyncThunk(
  'portfolio/getPortfolioItems',
  async (i, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
      var sortedPortfolio = Array(querySnapshot.docs.length)
      querySnapshot.docs
        .map((doc) => doc.data())
        .forEach((item) => {
          sortedPortfolio[item.position] = item
        })
      return sortedPortfolio
    } catch (error) {
      return thunkAPI.rejectWithValue('sorry, something went wrong')
    }
  }
)

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    showForm: (state) => {
      state.showForm = true
    },

    hideForm: (state) => {
      state.showForm = false
    },
  },
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

export const { showForm, hideForm } = portfolioSlice.actions

export default portfolioSlice.reducer
