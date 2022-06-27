import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
// import anecdoteService from './services/anecdotes'
// import { get, fetchAnecdotes } from './features/anecdotesSlice'

const App = () => {
  const { anecdotes } = useSelector((state) => state.anecdotes)
  const { notification } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    // anecdoteService.getAll().then((anecdotes) => {
    //   console.log(anecdotes)
    //   dispatch(get(anecdotes))
    //   // try {
    //   //   dispatch(fetchAnecdotes(anecdotes))
    //   // } catch (error) {
    //   //   console.log(error)
    //   // }
    // })
    // dispatch(fetchAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && <Notification />}
      <Filter />
      <AnecdoteList anecdotes={anecdotes} />
      <AnecdoteForm />
    </div>
  )
}

export default App
