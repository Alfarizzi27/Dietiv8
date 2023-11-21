import { StatusBar } from "expo-status-bar";
// import {Navi} from '@react-navigation/native'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  Button,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import Body from "../components/Body";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Recipes({navigation}) {
  return (
    <>
      <Body>
        <SafeAreaView>
          <Text style={{ color: "black" }}>Hello World</Text>
          <Button title="Go To Achievement" onPress={()=> navigation.navigate('Achievement')} />
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({});
