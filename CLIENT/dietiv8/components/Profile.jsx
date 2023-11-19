import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Profile() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Complete your</Text>
        <Text style={[styles.text, { marginTop: 0 }]}>Health Profile</Text>
        <View style={styles.containerContent}>
          <View style={styles.weight}>
            <Text style={{ fontWeight: "500" }}>Current Weight</Text>
            <View style={styles.kg}>
              <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                cursorColor={"#88bd1e"}
                underlineColorAndroid="black"
                disableFullscreenUI={true}
                inputMode="numeric"
              />
              <Text style={{ marginLeft: -15, fontWeight: "500" }}>kg</Text>
            </View>
          </View>
          <View style={styles.weight}>
            <Text style={{ fontWeight: "500" }}>Height</Text>
            <View style={styles.kg}>
              <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                cursorColor={"#88bd1e"}
                underlineColorAndroid="black"
                disableFullscreenUI={true}
                inputMode="numeric"
              />
              <Text style={{ marginLeft: -13, fontWeight: "500" }}>cm</Text>
            </View>
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
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  weight: {
    marginTop: 20,
    backgroundColor: "#c9c9c9",
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});
