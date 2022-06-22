const VOTE = 'VOTE'
const CREATE = 'CREATE'
const ANECDOTE_TEXT = 'ANECDOTE_TEXT'

const voteAction = (id) => {
  return {
    type: VOTE,
    data: id,
  }
}
const createAction = (content) => {
  return {
    type: CREATE,
    data: content,
  }
}
const anecdoteTextAction = (text) => {
  return {
    type: ANECDOTE_TEXT,
    data: text,
  }
}

export {
  VOTE,
  CREATE,
  ANECDOTE_TEXT,
  voteAction,
  createAction,
  anecdoteTextAction,
}
