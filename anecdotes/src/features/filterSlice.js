import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
    clear: (state) => '',
  },
})
export const { set, clear } = filterSlice.actions
export default filterSlice.reducer
