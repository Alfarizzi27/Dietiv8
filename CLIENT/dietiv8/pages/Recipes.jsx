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
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Recipes from "../components/Recipes";
import Food from "../assets/food.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  return (
    <>
      <Recipes>
        <View
          style={{
            backgroundColor: "#e0e0e0",
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
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
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
    marginTop: 20,
    height: 100,
    backgroundColor: "white",
    borderRadius: 12,
  },
});
