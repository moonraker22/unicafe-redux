import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../features/anecdotesSlice'
import { set, clear } from '../features/notificationSlice'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const anecdoteRef = useRef()
  const dispatch = useDispatch()

  const createFunc = async (content, event) => {
    event.preventDefault()
    // eslint-disable-next-line no-unused-vars
    const newAnecdote = await anecdoteService.create(content)
    dispatch(create(newAnecdote))
    dispatch(set(`New Anecdote: ${content}`))
    anecdoteRef.current.value = ''
    setTimeout(() => dispatch(clear()), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(e) => createFunc(anecdoteRef.current.value, e)}>
        <div>
          <input name="anecdote" ref={anecdoteRef} defaultValue={''} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
