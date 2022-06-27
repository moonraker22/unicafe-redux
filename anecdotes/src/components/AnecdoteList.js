import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { voteAnecdote } from '../features/anecdotesSlice'
import { notificationSet } from '../features/notificationSlice'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  // pull filter text from store
  const filter = useSelector((state) => state.filter)
  let { anecdotes } = useSelector((state) => state.anecdotes)

  let anecdotesCopy = [...anecdotes]

  const voteHandler = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(
      notificationSet({ message: `You voted for ${anecdote.content}`, time: 5 })
    )
  }

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
              <button onClick={() => voteHandler(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
