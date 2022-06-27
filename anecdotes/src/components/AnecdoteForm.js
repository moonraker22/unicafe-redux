import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../features/anecdotesSlice'
import { notificationSet } from '../features/notificationSlice'

const AnecdoteForm = () => {
  const anecdoteRef = useRef()
  const dispatch = useDispatch()

  const createAnecdoteHandler = async (content, event) => {
    event.preventDefault()
    dispatch(createAnecdote(content))
    dispatch(notificationSet({ message: `New Anecdote: ${content}`, time: 5 }))
    anecdoteRef.current.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form
        onSubmit={(e) => createAnecdoteHandler(anecdoteRef.current.value, e)}
      >
        <div>
          <input name="anecdote" ref={anecdoteRef} defaultValue={''} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
