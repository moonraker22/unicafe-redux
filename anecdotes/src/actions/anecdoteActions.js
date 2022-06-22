const VOTE = 'VOTE'
const CREATE = 'CREATE'

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

export { VOTE, CREATE, voteAction, createAction }
