import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../features/anecdotesSlice'
import { set, clear } from '../features/notificationSlice'

const AnecdoteForm = () => {
  const anecdoteRef = useRef()
  const dispatch = useDispatch()

  const createFunc = (content, event) => {
    event.preventDefault()
    dispatch(create(content))
    dispatch(set(`Created anecdote: ${content}`))
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
