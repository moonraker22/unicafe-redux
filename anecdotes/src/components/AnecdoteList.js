import { useDispatch } from 'react-redux'
import { voteAction } from '../actions/anecdoteActions'

const AnecdoteList = ({ anecdotes }) => {
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAction(id))
  }
  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
