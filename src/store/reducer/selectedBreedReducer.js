export default function selectedBreedReducer(state = '', action) {
  switch (action.type) {
    case 'SELECTED_BREED': {
      return {
        payload: 'Hi'
      }
    }
  }
}
