import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createAction } from '../actions/anecdoteActions'

const AnecdoteForm = () => {
  const anecdoteRef = useRef()
  const dispatch = useDispatch()
  const create = (content, event) => {
    event.preventDefault()
    dispatch(createAction(content))
    anecdoteRef.current.value = ''
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(e) => create(anecdoteRef.current.value, e)}>
        <div>
          <input name="anecdote" ref={anecdoteRef} defaultValue={''} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
