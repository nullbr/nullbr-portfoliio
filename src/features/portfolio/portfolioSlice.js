import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { v4 as uuid } from 'uuid'

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
          return doc.data()
        })
        .forEach((item) => {
          sortedPortfolio[item.position - 1] = item
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
    showAddForm: (state) => {
      state.showForm = true
    },
    showEditForm: (state, { payload }) => {
      state.showForm = true
      state.formData = state.portfolioItems[payload]
    },
    hideForm: (state) => {
      state.showForm = false
      state.formData = {}
    },
    moveUp: (state, action) => {
      const item = state.portfolioItems[action.payload]
      item.position = parseInt(item.position) - 1
      state.isModified = true
    },
    moveDown: (state, action) => {
      const item = state.portfolioItems[action.payload]
      item.position = parseInt(item.position) + 1
      state.isModified = true
    },
    sortPortfolio: (state) => {
      const items = state.portfolioItems
      var sortedPortfolio = Array(items.length)

      items.forEach((item) => {
        sortedPortfolio[parseInt(item.position) - 1] = item
      })

      state.portfolioItems = sortedPortfolio
      state.isModified = true
      state.itemsCount = state.portfolioItems.length()
    },
    notModified: (state) => {
      state.isModified = false
    },
    editItem: (state, { payload }) => {
      state.portfolioItems = state.portfolioItems.map((item) => {
        if (item.id === payload.id) {
          return { ...payload }
        }
        return { ...item }
      })
      state.isModified = true
      state.formData = {}
      state.showForm = false
    },
    addItem: (state, { payload }) => {
      var items = state.portfolioItems
      items.push({
        ...payload,
        id: uuid(),
      })
      state.portfolioItems = items
      state.isModified = true
      state.formData = {}
      state.showForm = false
    },
    deleteItem: (state, { payload }) => {
      state.portfolioItems = state.portfolioItems.filter(
        (item) => item.id !== payload
      )
      state.isModified = true
      state.formData = {}
      state.showForm = false
    },
    deleteAll: (state) => {
      state.portfolioItems = []
      state.isModified = true
      state.formData = {}
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
  showAddForm,
  showEditForm,
  hideForm,
  moveUp,
  moveDown,
  sortPortfolio,
  notModified,
  editItem,
  addItem,
  deleteItem,
  deleteAll,
} = portfolioSlice.actions

export default portfolioSlice.reducer
