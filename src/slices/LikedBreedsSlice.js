import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  breeds: []
}

const likedBreedsSlice = createSlice({
  name: 'likedBreeds',
  initialState,
  reducers: {
    changeStatus(state= initialState, action) {
        return {
          ...state,
          breeds: action.payload
        }
    }
  }
})

export const { changeStatus } = likedBreedsSlice.actions
export default likedBreedsSlice.reducer
