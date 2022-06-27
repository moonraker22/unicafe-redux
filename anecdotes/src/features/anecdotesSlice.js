import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { nanoid } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = {
  anecdotes: [],
  status: 'idle',
  error: null,
}

// Async thunk for fetching anecdotes
export const fetchAnecdotes = createAsyncThunk('anecdotes/fetch', async () => {
  const anecdotes = await anecdoteService.getAll()
  return anecdotes
})

// Async thunk for creating a new anecdote
export const createAnecdote = createAsyncThunk(
  'anecdotes/create',
  async (anecdote) => {
    if (!anecdote) {
      console.error('No anecdote to create')
      return
    }
    const newAnecdote = await anecdoteService.create(anecdote)
    return newAnecdote
  }
)

// Async thunk for voting on an anecdote
export const voteAnecdote = createAsyncThunk('anecdotes/vote', async (id) => {
  const anecdote = await anecdoteService.vote(id)
  return anecdote
})

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote: (state, action) => {
      const id = action.payload
      const anecdote = state.anecdotes.find((a) => a.id === id)
      anecdote.votes++
      state.anecdotes.map((a) => (a.id === id ? anecdote : a))
    },

    create: (state, action) => {
      state.anecdotes.push({ ...action.payload })
    },
    filter: (state, action) => {
      const filter = action.payload
      return state.filter((a) =>
        a.content.toLowerCase().includes(filter.toLowerCase())
      )
    },
    get: (state, action) => {
      state.anecdotes.push(...action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnecdotes.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchAnecdotes.fulfilled, (state, action) => {
      state.anecdotes = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchAnecdotes.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'error'
    })
    builder.addCase(createAnecdote.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(createAnecdote.fulfilled, (state, action) => {
      state.anecdotes.push(action.payload)
      state.status = 'success'
    })
    builder.addCase(createAnecdote.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'error'
    })
    builder.addCase(voteAnecdote.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(voteAnecdote.fulfilled, (state, action) => {
      state.anecdotes.map((a) => (a.id === action.payload.id ? a.votes++ : a))
      state.status = 'success'
    })
    builder.addCase(voteAnecdote.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'error'
    })
  },
})

export const { vote, create, filter, get } = anecdoteSlice.actions
export default anecdoteSlice.reducer
