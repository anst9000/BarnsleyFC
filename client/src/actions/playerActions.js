import axios from 'axios'
import { GET_PLAYERS, GET_PLAYER, ADD_PLAYER, DELETE_PLAYER, EDIT_PLAYER, PLAYERS_LOADING } from './types'

export const getPlayers = () => dispatch => {
  dispatch(setPlayersLoading())
  axios.get('/api/players')
    .then(res => dispatch({
      type: GET_PLAYERS,
      payload: res.data
    }))
}

export const getPlayer = id => dispatch => {
  console.log('in getPlayer, id = ' + id)
  axios.get(`/api/players/${id}`)
    .then(res => dispatch({
      type: GET_PLAYER,
      payload: id
    }))
}

export const addPlayer = player => dispatch => {
  axios.post('/api/players', player)
    .then(res => dispatch({
      type: ADD_PLAYER,
      payload: res.data
    }))
}

export const deletePlayer = id => dispatch => {
  axios.delete(`/api/players/${id}`)
    .then(res => dispatch({
      type: DELETE_PLAYER,
      payload: id
    }))
}

export const editPlayer = player => dispatch => {
  axios.put('/api/players', player)
    .then(res => dispatch({
      type: EDIT_PLAYER,
      payload: player
    }))
}

export const setPlayersLoading = () => {
  return {
    type: PLAYERS_LOADING
  }
}