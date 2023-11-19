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
import { SafeAreaView } from "react-native-safe-area-context";
// import Share from "react-native-share";
import { Share } from "react-native";
import Body from "../components/Body";
import * as Sharing from "expo-sharing";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  const onShare = async () => {
    try {
      await Sharing.shareAsync(() => {
        URL: "./tes.jpg";
      });
      // const result = await Share.share({
      //   title: "App link",
      //   message:
      //     "https://akcdn.detik.net.id/visual/2021/09/15/ilustrasi-diet-rendah-protein-2_169.jpeg?w=650",
      //   url: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
      // });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (error) {
      alert(error.message);
    }
  };

  // Share.open(options)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     err && console.log(err);
  //   });

  return (
    <>
      <Body>
        <SafeAreaView>
          <Button title="share" onPress={onShare} />
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({});
