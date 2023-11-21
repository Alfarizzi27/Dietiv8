import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { captureRef } from "react-native-view-shot";
import Body from "../components/Body";
import { useRef } from "react";
import { Platform, PermissionsAndroid } from "react-native";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Achievement() {
  const viewRef = useRef();

  // FOR PERMISSION
  //   if (Platform.OS === "android" && Platform.Version >= 23) {
  //     PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: "Storage Permission",
  //         message:
  //           "This app needs access to your device storage to save screenshots.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK",
  //       }
  //     ).then((result) => {
  //       if (result !== PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log("Storage permission denied.");
  //       }
  //     });
  //   }

  const captureScreenshot = async () => {
    try {
      const screenshotURI = await captureRef(viewRef, {
        format: "jpg",
        quality: 0.8,
      });
      Sharing.shareAsync(screenshotURI, {});
    } catch (error) {
      console.log(error);
      console.error("Error capturing screenshot:", error);
    }
  };

  return (
    <>
      <Body>
        <SafeAreaView
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#60935D",
          }}
        >
          <ViewShot
            ref={viewRef}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#60935D",
              width: windowWidth,
              flex: 1,
              paddingHorizontal: 20,
            }}
            options={{ format: "jpg" }}
          >
            <View
              style={{
                backgroundColor: "#60935D",
                alignSelf: "flex-start",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 35, fontWeight: "500" }}>
                Achievement
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: windowWidth,
                padding: 20,
                flex: 1,
              }}
            >
              <View style={{ flex: 1, height: 170 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignSelf: "flex-start",
                    width: 125,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>
                      Before
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      alignSelf: "flex-end",
                    }}
                  >
                    <Text style={{ fontSize: 30, fontWeight: "400" }}>
                      65kg
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignSelf: "flex-start",
                    marginTop: 20,
                    width: 125,
                  }}
                >
                  <View style={{ marginRight: 30, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>Now</Text>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 30, fontWeight: "400" }}>
                      60kg
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: "flex-start",
                  alignItems: "start",
                  marginTop: -80,
                }}
              >
                <Image

                  source={require("../assets/Logo2.png")}


                  style={{ width: 300, height: 300 }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "white",
                width: windowWidth,
                padding: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                flex: 2,
              }}
            >
              <View style={{ marginVertical: 20 }}>
                <Text>Congratulations</Text>
                <View style={{ alignItems: "center", marginVertical: 20 }}>
                  <Text style={{ fontWeight: "500", fontSize: 25 }}>
                    You have been lost 0.5 kg this week
                  </Text>
                </View>
              </View>
              <View>
                <Text>Progress</Text>
                <View style={{ marginTop: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Progress.Pie progress={0.9} size={70} color="black" />
                    </View>
                    <View style={{ marginLeft: 18 }}>
                      <Text style={{ color: "black" }}>
                        Here's your progress on
                      </Text>
                      <Text>20 November, 2023</Text>
                      <Text style={{ marginTop: 0 }}>
                        10% Remaining from your target
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ViewShot>
          <View
            style={{
              //   marginBottom: 30,
              //   marginTop: 15,
              width: windowWidth,
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              onPress={captureScreenshot}
              style={{
                backgroundColor: "white",
                paddingHorizontal: 50,
                paddingVertical: 18,
                alignItems: "center",
                width: windowWidth * 0.8,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                marginBottom: 30,

                elevation: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "600" }}>Share</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({});
