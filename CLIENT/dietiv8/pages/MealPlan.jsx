import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useRef } from "react";
import { recomendation } from "../components/Image";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

import Body from "../components/Body";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const baseUrl = "http://13.250.41.248/openai/menu";

export default function Home() {
  const [food, setFood] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    snack: false,
  });

  const [menu, setMenu] = useState({});

  const addSnack = (foods) => {
    console.log(foods);
    setFood((food) => {
      return { ...food, [foods]: true };
    });
  };

  const getRecomend = async () => {
    try {
      console.log("jalan");
      const { data } = await axios.get(baseUrl, {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZ2VuZGVyIjoibWFsZSIsInVzZXJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwid2VpZ2h0Ijo3MCwiaGVpZ2h0IjoxNjUsImV4dHJhIjoiIiwiY2Fsb3JpZUxpbWl0IjoxNjA2LCJ0YXJnZXRXZWlnaHQiOiI2MCIsImFjdGl2aXR5TGV2ZWwiOjEsImRhdGVCaXJ0aCI6IjE5OTctMDEtMjZUMDA6MDA6MDAuMDAwWiIsImlhdCI6MTcwMDQ2NDkzMX0.2Xg9amRNtrgWScHbKAZPeGsM8xC0e1cFTbVmDvpuALs",
        },
      });
      setMenu(data);
      console.log(data, "<<<");
    } catch (error) {
      console.log(error);
    }
  };

  const addFood = () => {
    console.log(food);
  };

  useEffect(() => {
    getRecomend();
  }, []);

  return (
    <>
      <Body>
        <View style={styles.recomendationContainer}>
          <SafeAreaView>
            <View style={{ marginTop: 50 }}>
              <Text style={styles.title}>Recommended Food</Text>
              <Text style={styles.title}>Personalized</Text>
              <Text
                style={[styles.title, { color: "#FF8811", fontWeight: "800" }]}
              >
                For You
              </Text>
            </View>
          </SafeAreaView>
          <Image source={recomendation} style={styles.image}></Image>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "500", marginRight: 10 }}>
            List Food
          </Text>
          <Pressable onPress={getRecomend}>
            <FontAwesome name="refresh" size={24} color="green" />
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "green",
            marginLeft: 20,
            padding: 5,
            width: 70,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "white",
              marginRight: 10,
            }}
            onPress={addFood}
          >
            Addd
          </Text>
          <FontAwesome name="spoon" size={24} color="white" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerContent}>
            {/* Breakfast */}
            <View style={styles.listFood}>
              <View>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                    marginBottom: 5,
                    marginTop: -20,
                    color: "grey",
                    alignSelf: "flex-start",
                  }}
                >
                  Breakfast
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 22 }}>
                  {menu?.breakfast || ""}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {menu?.breakfastCalorie || 0} Calories
                </Text>
              </View>
              {food.breakfast ? (
                <AntDesign name="checkcircle" size={30} color="#60935D" />
              ) : (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={35}
                  color="#60935D"
                  onPress={() => addSnack("breakfast")}
                />
              )}
            </View>

            {/* Lunch */}
            <View style={styles.listFood}>
              <View>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                    marginBottom: 5,
                    marginTop: -20,
                    color: "grey",
                    alignSelf: "flex-start",
                  }}
                >
                  Lunch
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 22 }}>
                  {menu?.lunch || ""}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {menu?.lunchCalorie || 0} Calories
                </Text>
              </View>
              {food.lunch ? (
                <AntDesign name="checkcircle" size={30} color="#60935D" />
              ) : (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={35}
                  color="#60935D"
                  onPress={() => addSnack("lunch")}
                />
              )}
            </View>

            {/* Dinner */}
            <View style={styles.listFood}>
              <View>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                    marginBottom: 5,
                    marginTop: -20,
                    color: "grey",
                    alignSelf: "flex-start",
                  }}
                >
                  Dinner
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 22 }}>
                  {menu?.dinner || ""}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {menu?.dinnerCalorie || 0} Calories
                </Text>
              </View>
              {food.dinner ? (
                <AntDesign name="checkcircle" size={30} color="#60935D" />
              ) : (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={35}
                  color="#60935D"
                  onPress={() => addSnack("dinner")}
                />
              )}
            </View>

            {/* Snack */}
            <View style={styles.listFood}>
              <View>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                    marginBottom: 5,
                    marginTop: -20,
                    color: "grey",
                    alignSelf: "flex-start",
                  }}
                >
                  Snack
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 22 }}>
                  {menu?.snack || ""}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  {menu?.snackCalorie || 0} Calories
                </Text>
              </View>
              {food.snack ? (
                <AntDesign name="checkcircle" size={30} color="#60935D" />
              ) : (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={35}
                  color="#60935D"
                  onPress={() => addSnack("snack")}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({
  recomendationContainer: {
    flexDirection: "row",
    height: 280,
    backgroundColor: "#60935D",
    borderBottomRightRadius: 150,
    zIndex: 2,
  },
  image: {
    width: 350,
    height: 350,
    marginTop: 50,
    marginLeft: -50,
    zIndex: 2,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 20,
  },
  containerContent: {
    padding: 20,
    paddingTop: 0,
    zIndex: -1,
    // backgroundColor: "red",
  },
  listFood: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    height: 130,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "transparent",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 10,
    backgroundColor: "blue",
  },
});
