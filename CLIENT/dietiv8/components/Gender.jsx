import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { male, female, malee, femalee } from "./Image";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Gender() {
  const navigation = useNavigation();
  const [colors, setColors] = useState("#d9d9d9");
  const [colors2, setColors2] = useState("#d9d9d9");
  const [textColor, setTextColor] = useState("black");
  const [textColor2, setTextColor2] = useState("black");

  const change = (lvl) => {
    if (lvl === 1) {
      setColors("#adadad");
      setColors2("#d9d9d9");
      setTextColor2("black");
    } else if (lvl === 2) {
      setColors2("#adadad");
      setColors("#d9d9d9");
      setTextColor("black");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>What's your gender?</Text>
        <View style={styles.containerContent}>
          <View
            style={{
              height: 600,
              justifyContent: "center",
            }}
          >
            <Pressable
              style={[styles.weight, { backgroundColor: colors }]}
              onPress={() => {
                change(1);
              }}
            >
              <View style={styles.activity}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.icon}>
                    <FontAwesome5 name="male" size={28} color="#092342" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: textColor,
                        fontSize: 20,
                      }}
                    >
                      Male
                    </Text>
                  </View>
                </View>
                <Image
                  source={male}
                  style={{
                    height: 85,
                    width: 82,
                    marginRight: -20,
                    transform: [{ rotate: "-90deg" }],
                  }}
                ></Image>
              </View>
            </Pressable>

            <Pressable
              style={[styles.weight, { backgroundColor: colors2 }]}
              onPress={() => {
                change(2);
              }}
            >
              <View style={styles.activity}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={[styles.icon, { backgroundColor: "#ffe6ea" }]}>
                    <FontAwesome5 name="female" size={28} color="#c14c5f" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: textColor2,
                        fontSize: 20,
                      }}
                    >
                      Male
                    </Text>
                  </View>
                </View>
                <Image
                  source={female}
                  style={{
                    height: 87,
                    width: 64,
                    marginRight: -10,
                    transform: [{ rotate: "-220deg" }],
                  }}
                ></Image>
              </View>
            </Pressable>
          </View>
          <View style={{ height: 50 }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("maintab")}
            >
              <Text style={styles.txtBtn}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerContent: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: windowWidth,
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  weight: {
    marginTop: 20,
    height: 80,
    paddingLeft: 10,
    borderRadius: 7,
    padding: 5,
    justifyContent: "center",
    overflow: "hidden",
  },
  kg: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 30,
    margin: 12,
    // borderWidth: 1,
    // borderColor: "grey",
    padding: 5,
    textAlign: "center",
    fontWeight: "500",
  },
  txtBtn: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
  btn: {
    width: windowWidth - 40,
    height: 60,
    backgroundColor: "#55a64e",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
  },
  icon: {
    height: 45,
    width: 45,
    backgroundColor: "#ebf4ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },
});
