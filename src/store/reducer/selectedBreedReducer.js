export function selectedBreedReducer(state = {}, action) {
  switch (action.type) {
    case 'ON_SELECT_BREED':
      return action.payload
    default:
      return state
  }
}
