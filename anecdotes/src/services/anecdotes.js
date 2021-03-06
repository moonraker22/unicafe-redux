import axios from 'axios'
import { nanoid } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const anecdote = {
    content,
    id: nanoid(),
    votes: 0,
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(baseUrl, anecdote, config)
  return response.data
}

const vote = async (id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const anecdote = await axios.get(`${baseUrl}/${id}`)
  const response = await axios.patch(
    `${baseUrl}/${id}`,
    {
      votes: anecdote.data.votes + 1,
    },
    config
  )

  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, vote }
