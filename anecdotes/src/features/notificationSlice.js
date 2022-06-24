import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
    clear: (state) => '',
  },
})
export const { set, clear } = slice.actions
export default slice.reducer
