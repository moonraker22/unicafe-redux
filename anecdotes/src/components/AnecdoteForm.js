import { useRef } from 'react'
import { createAnecdote } from '../features/anecdotesSlice'
import { notificationSet } from '../features/notificationSlice'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const anecdoteRef = useRef()

  const createAnecdoteHandler = async (content, event) => {
    event.preventDefault()
    props.createAnecdote(content)
    props.notificationSet({
      message: `You created a new anecdote: ${content}`,
      time: 5,
    })
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: (content) => dispatch(createAnecdote(content)),
    notificationSet: (notification) => dispatch(notificationSet(notification)),
  }
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
