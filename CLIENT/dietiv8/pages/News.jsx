import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import Body from "../components/Body";
import { SafeAreaView } from "react-native-safe-area-context";
import { ditTitle } from "../components/Image";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function News() {
  return (
    <>
      <Body>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Healthy Information</Text>
            <View style={styles.imgContainer}>
              <Image
                source={ditTitle}
                style={{
                  height: 150,
                  width: windowWidth - 45,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "green",
    marginLeft: 20,
  },
  imgContainer: {
    width: windowWidth,
    // backgroundColor: "red",
    alignItems: "center",
  },
});
