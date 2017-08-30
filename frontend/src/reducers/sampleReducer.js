
const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return Object.assign({},state,{
        sample: action.data
      })
      break;
    default:
      return state
  }
}

export default sampleReducer;
