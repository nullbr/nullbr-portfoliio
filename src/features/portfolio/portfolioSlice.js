import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const initialState = {
  portfolioItems: [],
  isLoading: true,
  showForm: false,
  itemsCount: 0,
  isModified: false,
  formData: {},
}

export const getPortfolioItems = createAsyncThunk(
  'portfolio/getPortfolioItems',
  async (i, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
      var sortedPortfolio = Array(querySnapshot.docs.length)

      querySnapshot.docs
        .map((doc) => {
          return { id: doc.id, data: doc.data() }
        })
        .forEach((item) => {
          sortedPortfolio[item.data.position - 1] = item
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
    showEditForm: (state, { payload }) => {
      state.showForm = true
      state.formData = state.portfolioItems[payload].data
    },
    hideForm: (state) => {
      state.showForm = false
    },
    moveUp: (state, action) => {
      const item = state.portfolioItems[action.payload]
      item.data.position = parseInt(item.data.position) - 1
      state.isModified = true
    },
    moveDown: (state, action) => {
      const item = state.portfolioItems[action.payload]
      item.data.position = parseInt(item.data.position) + 1
      state.isModified = true
    },
    sortPortfolio: (state) => {
      const items = state.portfolioItems
      var sortedPortfolio = Array(items.length)

      items.forEach((item) => {
        sortedPortfolio[parseInt(item.data.position) - 1] = item
      })

      state.portfolioItems = sortedPortfolio
      state.isModified = true
    },
    notModified: (state) => {
      state.isModified = false
    },
    editItem: (state, action) => {},
    addItem: (state, action) => {},
    deleteItem: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolioItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPortfolioItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.itemsCount = action.payload.length
        state.portfolioItems = action.payload
      })
      .addCase(getPortfolioItems.rejected, (state, action) => {
        state.isLoading = false
        alert(state.payload)
      })
  },
})

export const {
  showForm,
  showEditForm,
  hideForm,
  moveUp,
  moveDown,
  sortPortfolio,
  notModified,
  editItem,
  addItem,
  deleteItem,
} = portfolioSlice.actions

export default portfolioSlice.reducer
