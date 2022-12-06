import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   Bu alana değişkenler.
    num: 11,
}

export const ornek = createSlice({
  name: 'ornek',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.num = state.num++;
      console.log(state.num);
    },
    setNum: (state, action) => {
      state.num = action.payload.num
    },
    getNum: (state, action) => {
        console.log(state.num);
    },
  },
})

export const { increment, setNum, getNum } = ornek.actions
export default ornek.reducer