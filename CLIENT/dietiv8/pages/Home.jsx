import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Card } from "@rneui/themed";
import { ProgressChart } from "react-native-chart-kit";
import * as Progress from "react-native-progress";

import Body from "../components/Body";
import {
  Foundation,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  // each value represents a goal ring in Progress chart
  const data = {
    labels: ["Bike"], // optional
    data: [0.6],
  };
  return (
    <>
      <Body>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerName}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Hello, M R Amrinaldi!
              </Text>
            </View>

            <ImageBackground
              source={require("../assets/BackgroundProfile.png")}
              style={{
                flex: 1.7,
                width: windowWidth * 0.88,
                alignItems: "center",
              }}
              borderRadius={20}
            >
              <Card
                containerStyle={{
                  flex: 1.7,
                  justifyContent: "center",
                  borderRadius: 20,
                  marginTop: 0,
                  backgroundColor: "transparent",
                  shadowColor: "transparent",
                  width: windowWidth * 0.95,
                  alignItems: "center",
                }}
                wrapperStyle={{ backgroundColor: "transparent", width: windowWidth * 0.95, padding:20 }}
              >
                <View style={{ marginVertical: 10, marginHorizontal: 8 }}>
                  <Text style={{color:"white", fontWeight:"600", fontSize: 30}}>Feeling Better!</Text>
                  <Text style={{color:"white"}}>Keep you healthy life with</Text>
                  <Text style={{color:"white"}}>healthy food!</Text>
                </View>

                <View style={{ flexDirection: "row", marginVertical: 10, marginHorizontal:8 }}>
                  <View style={{ marginRight: 10 }}>
                    <Text style={{color:"white", fontWeight:"600", fontSize: 20}}>270<Text style={{fontSize: 15}}>cal</Text></Text>
                    <Text style={{color:"white"}}>Calories Eaten</Text>
                  </View>
                  <View>
                    <Text style={{color:"white", fontWeight:"600", fontSize: 20}}>1052<Text style={{fontSize: 15}}>cal</Text></Text>
                    <Text style={{color:"white"}}>Calories Limit</Text>
                  </View>
                </View>
              </Card>
            </ImageBackground>
          </View>

          {/* Nutrition */}
          <View style={styles.nutrition}>
            <View style={{ width: windowWidth * 0.8, marginLeft: 15, marginBottom:-10 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>Nutrition</Text>
            </View>
            <Card
              containerStyle={{
                borderRadius: 20,
                marginBottom: 0,
                marginHorizontal: 10,
              }}
              wrapperStyle={{ height: windowHeight * 0.13 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                  height: windowHeight * 0.2,
                  flex: 1,
                }}
              >
                <View style={{ flex: 1.5, alignItems: "center" }}>
                  <Progress.Pie
                    progress={0.4}
                    size={90}
                    borderWidth={2}
                    color="#60935D"
                  />
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      1000 of 2600
                    </Text>
                    <Text style={{ color: "grey", fontSize: 10 }}>
                      Cal Eaten
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#60935D",
                      marginRight: 20,
                      width: 30,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 50,
                    }}
                  >
                    <Foundation name="graph-bar" size={20} color="white" />
                  </View>
                </View>
              </View>
            </Card>
          </View>

          {/* Weight */}
          <View style={styles.weight}>
          <View style={{ width: windowWidth * 0.8, marginLeft: 15, marginBottom:-10 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>Weight</Text>

            </View>
            <Card
              containerStyle={{
                borderRadius: 20,
                marginBottom: 0,
                marginHorizontal: 10,
              }}
              wrapperStyle={{ height: windowHeight * 0.13 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                  height: windowHeight * 0.2,
                  flex: 1,
                }}
              >
                <View style={{ flex: 1.5, alignItems: "center" }}>
                  <FontAwesome5 name="weight" size={50} color="purple" />
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: "500" }}>
                        60 <Text style={{ fontSize: 15 }}>kg</Text>
                      </Text>
                    </View>
                    <Text style={{ color: "grey", fontSize: 10 }}>
                      Loss 10 kg
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "purple",
                      marginRight: 20,
                      width: 30,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 50,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="weight-kilogram"
                      size={20}
                      color="white"
                    />
                  </View>
                </View>
              </View>
            </Card>
          </View>

          {/* Carousel Tips */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            style={styles.carousel}
          >
            <Card
              containerStyle={styles.containerCardCarousel}
              wrapperStyle={styles.wrapperCardCarousel}
            >
              <ImageBackground
              style={styles.carouselImage}
              source={require('../assets/QuotesGreen.png')}
              borderRadius={20}
              >
                <Text style={{color:"white", fontWeight:"600"}}>"Life is a tragedy of nutrition."</Text>
                <Text style={{color:"white"}}>-Arnold Ehret</Text>
              </ImageBackground>
            </Card>
            <Card
              containerStyle={styles.containerCardCarousel}
              wrapperStyle={styles.wrapperCardCarousel}
            >
              <ImageBackground
              style={styles.carouselImage}
              source={require('../assets/QuotesCream.png')}
              borderRadius={20}
              >
                <Text style={{color:"#60935D", fontWeight:"600"}}>"When in doubt, use nutrition first"</Text>
                <Text style={{color:"#60935D"}}>-Roger Williams</Text>
              </ImageBackground>
            </Card>
            <Card
              containerStyle={styles.containerCardCarousel}
              wrapperStyle={styles.wrapperCardCarousel}
            >
              <ImageBackground
              style={styles.carouselImage}
              source={require('../assets/QuotesGreen.png')}
              borderRadius={20}
              >
                <Text style={{color:"white", fontWeight:"600"}}>"You are what you eat. What</Text>
                <Text style={{color:"white", fontWeight:"600"}}>would YOU like to be?"</Text>
                <Text style={{color:"white"}}>-Julie Murphy</Text>
              </ImageBackground>
            </Card>
            <Card
              containerStyle={styles.containerCardCarousel}
              wrapperStyle={styles.wrapperCardCarousel}
            >
              <ImageBackground
              style={styles.carouselImage}
              source={require('../assets/QuotesCream.png')}
              borderRadius={20}
              >
                <Text style={{color:"#60935D", fontWeight:"600"}}>"A healthy outside starts </Text>
                <Text style={{color:"#60935D", fontWeight:"600"}}>from the inside."</Text>

                <Text style={{color:"#60935D"}}>-Robert Urich</Text>
              </ImageBackground>
            </Card>
          </ScrollView>
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8
  },
  header: { flex: 2, alignItems: "center", marginHorizontal: 8 },
  headerName: {
    marginTop: 15,
    marginLeft: 15,
    justifyContent: "center",
    alignSelf:"flex-start",
    flex: 0.3,
  },
  carousel: { flex: 0.8 },
  containerCardCarousel: {
    borderRadius: 20,
    padding: 0,
    margin:10,
    marginVertical: 0,
    justifyContent: "center",
    width: windowWidth * 0.8,
    height: windowHeight * 0.12,
  },
  carouselImage: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.12,
    alignItems:"center",
    justifyContent:"center"
  },
  wrapperCardCarousel: { justifyContent: "center", alignItems: "center" },
  nutrition: { flex: 1.5, justifyContent: "center", margin: 0 },
  weight: { flex: 1.5 },
});
