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
import { bed, kursi, spatula, nike, ball, dumbell } from "./Image";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Profile() {
  const navigation = useNavigation();

  const [level, setLevel] = useState("");

  const setLvl = (lvl) => {
    console.log(lvl);
  };

  //   useEffect(() => {
  //     console.log(level, "<<ini level");
  //   }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Choose you activity</Text>
        <Text
          style={{
            marginTop: 5,
            width: 320,
            textAlign: "center",
            color: "grey",
          }}
        >
          Activity level represent that an activity’s value how much bigger than
          the basal metabolic rate (BMR). There are six possible activity levels
          which are
        </Text>
        <View style={styles.containerContent}>
          <ScrollView>
            <View>
              <Pressable
                style={styles.weight}
                onPress={() => setLvl("level_1")}
              >
                <View style={styles.activity}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>Level 1</Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      Sedentary: little or no exercise
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={bed}
                      style={{
                        height: 90,
                        width: 90,
                        marginRight: -30,
                        transform: [{ rotate: "20deg" }],
                      }}
                    ></Image>
                  </View>
                </View>
              </Pressable>

              <Pressable
                style={styles.weight}
                onPress={() => setLvl("level_2")}
              >
                <View style={styles.activity}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>Level 2</Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      Exercise 1-3 times/week
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={kursi}
                      style={{
                        height: 90,
                        width: 70,
                        marginRight: -20,
                      }}
                    ></Image>
                  </View>
                </View>
              </Pressable>

              <Pressable
                style={styles.weight}
                onPress={() => setLvl("level_3")}
              >
                <View style={styles.activity}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>Level 3</Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      Exercise 4-5 times/week
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={spatula}
                      style={{
                        height: 80,
                        width: 70,
                        marginRight: -25,
                      }}
                    ></Image>
                  </View>
                </View>
              </Pressable>

              <Pressable
                style={styles.weight}
                onPress={() => setLvl("level_4")}
              >
                <View style={styles.activity}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>Level 4</Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      Daily exercise or intense exercise
                    </Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      3-4 times/week
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={nike}
                      style={{
                        height: 130,
                        width: 130,
                        marginBottom: 20,
                        marginRight: -50,
                      }}
                    ></Image>
                  </View>
                </View>
              </Pressable>

              <Pressable
                style={styles.weight}
                onPress={() => setLvl("level_5")}
              >
                <View style={styles.activity}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>Level 5</Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      Intense exercise 6-7 times/week
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={ball}
                      style={{
                        height: 100,
                        width: 100,
                        marginRight: -40,
                      }}
                    ></Image>
                  </View>
                </View>
              </Pressable>

              <Pressable
                style={styles.weight}
                onPress={() => setLvl("level_6")}
              >
                <View style={styles.activity}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>Level 6</Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      Very intense exercise daily,
                    </Text>
                    <Text style={{ fontWeight: "400", color: "grey" }}>
                      or physical job
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={dumbell}
                      style={{
                        height: 120,
                        width: 120,
                        marginRight: -60,
                      }}
                    ></Image>
                  </View>
                </View>
              </Pressable>
            </View>
          </ScrollView>
          <View style={{ height: 50 }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("goals")}
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
    height: windowHeight - 220,
    justifyContent: "space-between",
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  weight: {
    marginTop: 20,
    backgroundColor: "#d9d9d9",
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
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
    marginTop: 10,
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
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
  },
});
