import axios from "axios";
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseUrl = "http://13.250.41.248";

const userStore = create((set, get) => ({
access_token: "",
  login: async (userInput) => {
    try {
        const { data } = await axios({
          url: baseUrl + "/users/login",
          method: "POST",
          data: userInput,
        });
        await AsyncStorage.setItem("access_token", data.access_token);
        return true
    } catch(error) {
        throw error
    }
  },
  getAccessToken: async () =>{
    try {
        const token = await AsyncStorage.getItem("access_token")
        set({access_token: token})
        return token
    } catch(error) {
        console.log(error)
    }
  }
}));

export default userStore;
