import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from './features/portfolio/porfolioSlice'

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
})
