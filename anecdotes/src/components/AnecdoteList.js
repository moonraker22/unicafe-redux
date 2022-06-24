import { useDispatch } from 'react-redux'
import { vote } from '../features/anecdotesSlice'
import { useSelector } from 'react-redux'

const AnecdoteList = ({ anecdotes }) => {
  const dispatch = useDispatch()

  // pull filter text from store
  const filter = useSelector((state) => state.filter)

  const anecdotesCopy = [...anecdotes]

  return (
    <div>
      {anecdotesCopy
        .sort((a, b) => b.votes - a.votes)
        .filter((anecdote) => anecdote.content.toLowerCase().includes(filter))
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
