import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  time: 0,
  status: 'idle',
  error: null,
}

let timeoutID

export const notificationSet = createAsyncThunk(
  'notification/set',
  async (message, timer) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      timer.dispatch(clear())
    }, message.time * 1000)
    return message
  }
)

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    set: (state, action) => {
      state.message = action.payload
      return action.payload
    },
    clear: (state) => {
      state.message = ''
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(notificationSet.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(notificationSet.fulfilled, (state, action) => {
      state.message = action.payload.message
      state.time = action.payload.time
      state.status = 'success'
    })
    builder.addCase(notificationSet.rejected, (state, action) => {
      console.log(action)
      state.status = 'error'
    })
  },
})
export const { set, clear } = slice.actions
export default slice.reducer
