import { configureStore } from '@reduxjs/toolkit'
import ornek from "./ornek"

const store = configureStore({
  reducer: {
    ornek
  },
})

export default store