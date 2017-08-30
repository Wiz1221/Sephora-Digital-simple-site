
const formReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, {
        [action.name]: action.data
      })
      break;
    default:
      return state
  }
}

export default formReducer;
