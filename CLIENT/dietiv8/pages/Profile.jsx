import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import Body from "../components/Body";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  return (
    <>
      <Body>
        <Text style={{ color: "white" }}>Hello World</Text>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({});
