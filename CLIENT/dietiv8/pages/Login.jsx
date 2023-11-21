import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { dietModel } from "../components/Image";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Body from "../components/Body";
import { useState } from "react";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Body>
        <View style={styles.container}>
          <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 12 }}>
            Login
          </Text>
          <Text style={{ fontSize: 18, color: "grey" }}>
            If you don't have an account,
          </Text>
          <Text
            style={{ fontSize: 18, color: "grey" }}
            onPress={() => navigation.navigate("Name")}
          >
            please start <Text style={{ color: "green" }}>here</Text>
          </Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              cursorColor={"#88bd1e"}
              disableFullscreenUI={true}
              inputMode="email"
              placeholder="email@example.com"
            />
            <TextInput
              style={[styles.input, { marginTop: 10 }]}
              onChangeText={setPassword}
              value={password}
              cursorColor={"#88bd1e"}
              disableFullscreenUI={true}
              inputMode="email"
              placeholder="input password here"
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("maintab")}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 20,
              }}
            >
              LOG IN
            </Text>
          </Pressable>
        </View>
      </Body>
      {/* <Image source={dietModel}></Image> */}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  input: {
    marginTop: 30,
    fontSize: 16,
    textDecorationColor: "white",
    height: 50,
    margin: 12,
    padding: 10,
    width: 310,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 10,
  },
  button: {
    height: 60,
    marginTop: 90,
    width: 300,
    backgroundColor: "#55a64e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
