import C from '../constants'

export const previewer = (state = "", action) =>
  (action.type === C.UPDATE_PREVIEWER)?
    action.payload:
    state

export default previewer