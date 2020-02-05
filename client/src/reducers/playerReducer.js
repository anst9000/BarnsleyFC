import { GET_PLAYERS, GET_PLAYER, ADD_PLAYER, DELETE_PLAYER, EDIT_PLAYER, PLAYERS_LOADING } from '../actions/types'

const initialState = {
  players: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload,
        loading: false
      }
    case GET_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player._id === action.payload)
      }
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player._id !== action.payload)
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [action.payload, ...state.players]
      }
    case EDIT_PLAYER:
      return {
        ...state,
        players: state.players.map(player => {
          return player._id === action.payload._id ? action.payload : player
        })
      }
    case PLAYERS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
