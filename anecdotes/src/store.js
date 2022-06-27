import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './features/anecdotesSlice'
import notificationReducer from './features/notificationSlice'
import filterReducer from './features/filterSlice'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          timer: (time) => {
            return new Promise((resolve) => setTimeout(resolve, time))
          },
        },
      },
    }),
})
export default store
