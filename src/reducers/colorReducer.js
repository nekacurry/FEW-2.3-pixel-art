import { PICK_COLOR } from '../actions'

const colorReducer = (state = 'black', action) => {
  switch(action.type) {
    case PICK_COLOR:
      return action.payload.color
      
    default:
      return state
  }
}

export default colorReducer