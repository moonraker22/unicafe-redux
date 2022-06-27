import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  time: 0,
  status: 'idle',
  error: null,
}

export const notificationSet = createAsyncThunk(
  'notification/set',
  async (message, timer) => {
    const clearTimer = timer.extra.timer(message.time * 1000)
    clearTimer.then(() => timer.dispatch(clear()))
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
