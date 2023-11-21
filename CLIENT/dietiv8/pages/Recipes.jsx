import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Recipes from "../components/Recipes";
import Food from "../assets/food.png";
import HistoryFood from "../components/HistoryFood";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const baseUrl = "http://13.250.41.248/";

export default function Home() {
  const [history, setHistory] = useState({});

  const getFood = async () => {
    const { data } = await axios.get(baseUrl + "histories/now", {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZ2VuZGVyIjoibWFsZSIsInVzZXJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwid2VpZ2h0Ijo3MCwiaGVpZ2h0IjoxNjUsImV4dHJhIjoiIiwiY2Fsb3JpZUxpbWl0IjoxNjA2LCJ0YXJnZXRXZWlnaHQiOiI2MCIsImFjdGl2aXR5TGV2ZWwiOjEsImRhdGVCaXJ0aCI6IjE5OTctMDEtMjZUMDA6MDA6MDAuMDAwWiIsImlhdCI6MTcwMDQ2NDkzMX0.2Xg9amRNtrgWScHbKAZPeGsM8xC0e1cFTbVmDvpuALs",
      },
    });
    setHistory(data.Food);
    console.log(data);
  };

  useEffect(() => {
    getFood();
    console.log("jalan");
  }, []);

  return (
    <>
      <Recipes>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            marginTop: 100,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 30,
          }}
        >
          <Image source={Food} style={styles.food}></Image>
          <Text style={styles.txt}>Your food</Text>
          <Text style={styles.txt}>
            eaten <Text style={{ color: "#FF8811" }}>today</Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="fire" size={22} color="#60935D" />
              <Text
                style={{
                  marginLeft: 5,
                  color: "#60935D",
                  fontWeight: "500",
                  fontSize: 14,
                }}
              >
                1200 cal
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="weight" size={20} color="#60935D" />
              <Text
                style={{
                  marginLeft: 5,
                  color: "#60935D",
                  fontWeight: "500",
                  fontSize: 14,
                }}
              >
                60 kg
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="weight-lifter"
                size={26}
                color="#60935D"
              />
              <Text
                style={{
                  marginLeft: 5,
                  color: "#60935D",
                  fontWeight: "500",
                  fontSize: 14,
                }}
              >
                20.6 bmi
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "500",
                color: "#084205",
                marginBottom: 10,
              }}
            >
              History
            </Text>
            <FlatList
              data={history}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <HistoryFood key={index} item={item} />
              )}
            />
          </View>
          {/* <HistoryFood /> */}
        </View>
      </Recipes>
    </>
  );
}

const styles = StyleSheet.create({
  food: {
    height: 350,
    width: 350,
    position: "absolute",
    top: -200,
    right: -120,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    // elevation: 8,
  },
  txt: {
    fontWeight: "700",
    fontSize: 30,
  },
  card: {
    marginTop: 30,
    height: 470,
    width: 400,
    // backgroundColor: "grey",
    // borderRadius: 12,
  },
  icon: {
    height: 55,
    width: 55,
    marginRight: 10,
    backgroundColor: "#fff7f2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});
