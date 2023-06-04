import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    name: '',
    email: '',
    phoneNumber: '',
    plan: { name: 'arcade', monthly: 9, anually: 90 },
    isMonthly: true,
    onlineService: { isChosen: false, monthyCost: 1, anuallyCost: 10 },
    largerStorage: { isChosen: false, monthyCost: 2, anuallyCost: 20 },
    customizableProfile: { isChosen: false, monthyCost: 2, anuallyCost: 20 },
  },
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
      state.plan.name = action.payload
    },
    setIsMonthly: (state) => {
      state.isMonthly = !state.isMonthly
    },
    setOnlineService: (state, action) => {
      state.onlineService.isChosen = action.payload
    },
    setLargerStorage: (state, action) => {
      state.largerStorage.isChosen = action.payload
    },
    setCustomProfile: (state, action) => {
      state.customizableProfile.isChosen = action.payload
    },
  },
})

export const reducer = rootSlice.reducer

export const { setName, setEmail, setPhoneNumber, setPlan, setIsMonthly, setOnlineService, setLargerStorage, setCustomProfile } = rootSlice.actions
