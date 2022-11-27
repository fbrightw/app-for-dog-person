import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  breeds: [],
}

const likedBreedsSlice = createSlice({
  name: 'likedBreeds',
  initialState,
  reducers: {
    changeStatus(state, action) {
      return {
        breeds: [...state, action.payload]
      }
    }
  }
})

export const { changeStatus } = likedBreedsSlice.actions
export default likedBreedsSlice.reducer

