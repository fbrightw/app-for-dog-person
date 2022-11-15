export default function selectedBreedReducer(state = '', action) {
  switch (action.type) {
    case 'ON_SELECT_BREED': {
      return {

      }
    }
    default:
      return state
  }
}
