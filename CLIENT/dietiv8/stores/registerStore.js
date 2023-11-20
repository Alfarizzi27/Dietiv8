import { create } from "zustand"

const registerStore = create((set) => ({
    username : "",    
    setUsername: (username) => set(() => ({username: username})),
    email : "",    
    setEmail: (email) => set(() => ({email: email})),
    password : "",    
    setPassword: (password) => set(() => ({password: password})),
    weight : "",    
    setWeight: (weight) => set(() => ({weight: weight})),
    height : "",    
    setHeight: (height) => set(() => ({height: height})),
    dateBirth : "",    
    setDateBirth: (dateBirth) => set(() => ({dateBirth: dateBirth})),
    activityLevel : "",    
    setActivityLevel: (activityLevel) => set(() => ({activityLevel: activityLevel})),
    targetWeight : "",    
    setTargetWeight: (targetWeight) => set(() => ({targetWeight: targetWeight})),
    extra : "",    
    setExtra: (extra) => set(() => ({extra: extra})),
}))

export default registerStore