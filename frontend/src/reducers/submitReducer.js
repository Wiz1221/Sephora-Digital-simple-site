
const submitReducer = (state = "", action) => {
  switch (action.type) {
    case 'SUBMIT_ON':
      return "submit"
      break;
    case 'SUBMIT_OFF':
      return ""
      break;
    default:
      return state
  }
}

export default submitReducer;
