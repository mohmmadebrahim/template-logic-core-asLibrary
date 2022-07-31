import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import  counterReducer  from '../../../repositories/coreTest'



export function makeStore() {
  return configureStore({
    reducer: {
       counter:  counterReducer
      },
  })
}

const coreStore = makeStore()

export type AppState = ReturnType<typeof coreStore.getState>

export type AppDispatch = typeof coreStore.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default coreStore