import C from './constants'

export const updatePreviewer = text => ({
    type: C.UPDATE_PREVIEWER,
    payload: text
})