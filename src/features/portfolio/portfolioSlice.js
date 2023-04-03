import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { v4 as uuid } from 'uuid'

const initialState = {
  portfolioItems: [],
  deletedItems: [],
  updatedItems: [],
  newItems: [],
  isLoading: true,
  showForm: false,
  itemsCount: 0,
  isModified: false,
  formData: {},
  user: null,
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
    setUser: (state, { payload }) => {
      state.user = payload
    },
    showAddForm: (state) => {
      state.showForm = true
      state.formData = {}
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
      state.itemsCount = state.portfolioItems.length
    },
    notModified: (state) => {
      state.isModified = false
    },
    editItem: (state, { payload }) => {
      state.portfolioItems = state.portfolioItems.map((item) => {
        if (item.id === payload.id) {
          // edit item
          return { ...payload }
        } else if (item.position >= payload.position) {
          // correct positioning of items with lower positioning
          return { ...item, position: parseInt(item.position) + 1 }
        }
        return { ...item }
      })
      state.isModified = true
      state.formData = {}
      state.showForm = false
    },
    addItem: (state, { payload }) => {
      // correct positioning of items with lower positioning
      state.portfolioItems = state.portfolioItems.map((item) => {
        if (item.position >= payload.position) {
          return { ...item, position: parseInt(item.position) + 1 }
        }
        return { ...item }
      })
      // add item to array
      state.portfolioItems.push({ ...payload, id: uuid() })
      state.isModified = true
      state.formData = {}
      state.showForm = false
    },
    deleteItem: (state, { payload }) => {
      const deletedItem = state.portfolioItems.find(
        (item) => item.id === payload
      )
      // add item to deleted list
      state.deletedItems.push(deletedItem)
      // remove from array
      state.portfolioItems = state.portfolioItems.filter(
        (item) => item.id !== deletedItem.id
      )
      // correct positioning of items with lower positioning
      state.portfolioItems = state.portfolioItems.map((item) => {
        if (item.position >= deletedItem.position) {
          return { ...item, position: parseInt(item.position) - 1 }
        }
        return { ...item }
      })
      state.isModified = true
      state.formData = {}
      state.showForm = false
      state.itemsCount = state.portfolioItems.length
    },
    deleteAll: (state) => {
      state.deletedItems = state.deletedItems.concat(state.portfolioItems)
      state.portfolioItems = []
      state.isModified = true
      state.formData = {}
      state.showForm = false
      state.itemsCount = 0
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
  setUser,
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
