import { StatusBar } from "expo-status-bar";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  ProgressBarAndroid,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Body from "../components/Body";
import userStore from "../stores/userStore";
import axios from "axios";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = {
  // labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function Home({ navigation, user }) {
    console.log(user)
  const baseUrl = "http://13.250.41.248/";
  const access_token = userStore((state) => state.access_token);
  const [latestData, setLatestData] = useState({})
  const [weight, setWeight] = useState([0]);
  const [dateUpdated, setDateUpdated] = useState(['']);
  const getWeight = async () => {
    try {
      let { data } = await axios.get(baseUrl + "achievements", {
        headers: { access_token },
      });
      setLatestData(data[data.length-1])
      let dateUpdate = [];
      data = data.map((el) => {
        let event = new Date(el.Achievement.updatedAt);
        event = event.getDate() + "-" + (Number(event.getMonth()) + 1);
        dateUpdate.push(event);
        return el.Achievement.weightBefore;
      });
      setWeight(data);
      setDateUpdated(dateUpdate);
    } catch (error) {
      console.log(error, `<<<<<<<<<<<<<<<ERROR`);
    }
  };

  useEffect(() => {
    getWeight();
  }, []);
  return (
    <>
      <Body>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Weight Progress</Text>
            </View>
            <LineChart
              data={{
                labels: dateUpdated,
                datasets: [
                  {
                    data: weight,
                  },
                ],
              }}
              width={Dimensions.get("window").width - 30} // from react-native
              height={210}
              yAxisLabel=""
              yAxisSuffix=" Kg"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#e3edce",
                backgroundGradientTo: "#e3edce",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(57, 82, 14, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "5",
                  strokeWidth: "1",
                  stroke: "#39520e",
                },
              }}
              bezier
              style={{
                borderRadius: 10,
                marginTop: 20,
              }}
            />
            <View style={styles.containerGoals}>
              <View style={styles.goal}>
                <Text style={styles.goalTxt}>
                  65
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      color: "#616160",
                    }}
                  >
                    kg
                  </Text>
                </Text>
                <Text>Goals Weight</Text>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.4}
                  color={"orange"}
                  style={{ marginTop: 10 }}
                />
              </View>
              <View style={styles.current}>
                <Text style={styles.goalTxt}>
                  {latestData?.Achievement?.currentWeight || 0}
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                      color: "#616160",
                    }}
                  >
                    kg
                  </Text>
                </Text>
                <Text>Current Weight</Text>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.8}
                  color={"green"}
                  style={{ marginTop: 10 }}
                />
              </View>
            </View>
            <View style={styles.bmi}>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                Body Mass Index
              </Text>
            </View>
            <View style={styles.containerBMI}>
              <FontAwesome name="balance-scale" size={40} color="black" />
              <View>
                <Text
                  style={{ fontWeight: "700", marginLeft: -60, fontSize: 18 }}
                >
                  BMI Score
                </Text>
                <Text
                  style={{ fontWeight: "400", marginLeft: -60, color: "green" }}
                >
                  Normal
                </Text>
              </View>
              <View style={styles.rectangle}>
                <Text
                  style={{ fontWeight: "700", fontSize: 24, color: "green" }}
                >
                  20.1
                </Text>
              </View>
            </View>

            {/* Update your weight */}
            <View
              style={{
                height: 120,
                width: windowWidth - 30,
                marginHorizontal: 10,
                alignItems: "center",
              }}
            >
              <View style={styles.footer}>
                <View>
                  <View style={styles.footerTitle}>
                    <Text style={{ fontWeight: "700", fontSize: 18 }}>
                      Update your weight
                    </Text>
                  </View>
                  <View style={styles.updateWeight}>
                    <Image
                      source={require("../assets/Timbangan.png")}
                      style={styles.cardImage}
                    />
                  </View>
                </View>
                <View>
                  <View style={styles.footerTitle}>
                    <Text style={{ fontWeight: "700", fontSize: 18 }}>
                      Achievement
                    </Text>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Achievement")}>
                    <View style={styles.updateWeight}>
                      <Image
                        source={require("../assets/Piala.png")}
                        style={styles.cardImage}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerTitle: {
    width: windowWidth,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
  },
  containerGoals: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "white",
    width: windowWidth - 30,
    height: 120,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    overflow: "hidden",
  },
  goal: {
    width: "50%",
    height: "100%",
    padding: 15,
  },
  goalTxt: {
    fontWeight: "700",
    fontSize: 28,
  },
  current: {
    width: "50%",
    height: "100%",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  rectangle: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBMI: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 30,
    width: windowWidth - 30,
    height: 120,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    overflow: "hidden",
  },
  bmi: {
    flexDirection: "row",
    height: 30,
    width: windowWidth - 30,
    marginTop: 20,
    justifyContent: "flex-start",
  },
  footer: {
    flexDirection: "row",
    // backgroundColor:"black",
    width: windowWidth,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    // alignItems:"center"
    // backgroundColor: "black"
  },
  footerTitle: {
    // flexDirection: "row",
    height: 30,
    marginTop: 20,
    marginBottom: -5,
    justifyContent: "center",
    alignItems: "center",
  },
  updateWeight: {
    // flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.45,
    height: 120,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    overflow: "hidden",
  },
  cardImage: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.45,
    height: 120,
    borderRadius: 10,
  },
});
