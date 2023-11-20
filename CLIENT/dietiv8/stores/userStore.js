import axios from "axios";
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseUrl = "http://13.250.41.248";

const userStore = create((set, get) => ({
  login: async (userInput) => {
    try {
        const { data } = await axios({
          url: baseUrl + "/users/login",
          method: "POST",
          data: userInput,
        });
        console.log(data, "<<<<<<<<<<<<<<<<<<<")
        await AsyncStorage.setItem("access_token", data.access_token);
    } catch(error) {
        console.log(error)
    }
  },
  getAccessToken: async () =>{
    try {
        const token = await AsyncStorage.getItem("access_token")
        return token
    } catch(error) {
        console.log(error)
    }
  }
}));

export default userStore;
