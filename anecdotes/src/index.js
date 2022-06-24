import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './features/anecdotesSlice'
import notificationReducer from './features/notificationSlice'
import filterReducer from './features/filterSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
  devTools: true,
  middleware: [],
  enhancers: [],
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
