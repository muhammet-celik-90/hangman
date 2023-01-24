import { configureStore } from '@reduxjs/toolkit'
import letterReducer from './features/letters/LettersSlice'
import randomWordReducer from './features/letters/RandomWordSlice'
import wrongReducer from './features/letters/WrongSlice'
import winReducer from './features/letters/WinSlice'

export const store = configureStore({
  reducer: {
    selectedLetters: letterReducer,
    randomWordSlice: randomWordReducer,
    wrongCalc: wrongReducer,
    win: winReducer,
  },
})