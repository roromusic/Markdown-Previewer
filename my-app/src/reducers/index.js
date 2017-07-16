import C from '../constants'
import { combineReducers } from 'redux'

export const previewer = (state = "", action) =>
  (action.type === C.UPDATE_PREVIEWER)?
    action.payload:
    state