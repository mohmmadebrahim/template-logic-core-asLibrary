import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState, customApi } from '../../util'



export interface CounterState {
    value: number
    status: 'idle' | 'loading' | 'failed',
    apiDataTest: any
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
    apiDataTest: null
}

export const getDataTestAsync = async () => {
    const response = await customApi({ url: 'https://api.faridbahrami.ir/api/barber' }, { method: "GET", formData: false })
    // The value we return becomes the `fulfilled` action payload
    return response
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        setDataTest: (state, action: PayloadAction<any>) => {
            state.apiDataTest = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount, setDataTest } = counterSlice.actions

export default counterSlice.reducer