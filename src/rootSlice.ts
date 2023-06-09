import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  plan: { name: 'arcade', value: 0 },
  isMonthly: true,
  onlineService: { isChosen: false, value: 0 },
  largerStorage: { isChosen: false, value: 0 },
  customizableProfile: { isChosen: false, value: 0 },
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
    },
    setPlan: (state, action) => {
      state.plan = action.payload
    },
    setIsMonthly: (state) => {
      state.isMonthly = !state.isMonthly
    },
    setOnlineService: (state, action) => {
      state.onlineService = action.payload
    },
    setLargerStorage: (state, action) => {
      state.largerStorage = action.payload
    },
    setCustomProfile: (state, action) => {
      state.customizableProfile = action.payload
    },
  },
})

export const reducer = rootSlice.reducer

export const { setName, setEmail, setPhoneNumber, setPlan, setIsMonthly, setOnlineService, setLargerStorage, setCustomProfile } = rootSlice.actions
