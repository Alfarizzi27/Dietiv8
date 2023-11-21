import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Card } from "@rneui/themed";
import Body from "../components/Body";
import { Fragment, useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  const [edit, setEdit] = useState({
    name: "M R Amrinaldi",
  });

  const editedValue = () => {
    console.log(edit.name);
  };

  return (
    <>
      <Body>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.profile}>
              <View
                style={{
                  flexDirection: "row",
                  width: windowWidth * 0.8,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.cardContainer}>
                  <View style={styles.cardWrapper}>
                    <Text style={{ fontSize: 10 }}>Your Weight</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      60 kg
                    </Text>
                  </View>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
                    }}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <View style={styles.cardWrapper}>
                    <Text style={{ fontSize: 10 }}>Target Weight</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      55 kg
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.headerUsername}>
                <Text style={styles.profileName}>M R Amrinaldi</Text>
              </View>
            </View>
          </View>

          {/* Form */}
          <ScrollView style={styles.detail}>
            {/* General */}
            <View>
              <View style={styles.detailheader}>
                <Ionicons name="md-person" size={20} color="white" />
                <Text style={styles.detailTitle}>General</Text>
              </View>
              <View style={styles.detailBody}>
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Gender</Text>
                  <Text style={styles.detailValue}>Male</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Name</Text>
                  <Text style={styles.detailValue}>M R Amrinaldi</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Age</Text>
                  <Text style={styles.detailValue}>25</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Height</Text>
                  <Text style={styles.detailValue}>170 cm</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Current Weight</Text>
                  <Text style={styles.detailValue}>60 kg</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Activity Level</Text>
                  <Text style={styles.detailValue}>Sedentary</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </View>
            </View>

            {/* Goals */}
            <View style={{ marginTop: 20 }}>
              <View style={styles.detailheader}>
                <MaterialCommunityIcons name="target" size={20} color="white" />
                <Text style={styles.detailTitle}>Goals</Text>
              </View>
              <View style={styles.detailBody}>
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Target Weight</Text>
                  <Text style={styles.detailValue}>55 kg</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>Calories a day</Text>
                  <Text style={styles.detailValue}>2600cal</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  header: {
    height: windowHeight * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  headerUsername: {
    position: "absolute",
    justifyContent: "flex-end",
    paddingBottom: 30,
    height: windowHeight * 0.3,
  },
  profile: {
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight * 0.3,
    position: "absolute",
  },
  detail: {
    backgroundColor: "#60935D",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    height: windowHeight * 0.7,
  },
  cardContainer: {
    height: 80,
    width: 80,
    padding: 0,
    borderRadius: 10,
    margin: 0,
    marginHorizontal: 0,
  },
  cardWrapper: {
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
  },

  detailTitle: { fontSize: 20, fontWeight: "500", marginLeft: 7, color:"white" },
  detailName: { fontSize: 18, fontWeight: "400" },
  detailValue: { fontSize: 18 },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    color: "black",
    fontSize: 22,
    fontWeight: "600",
    width: "300",
    margin: 10,
  },

  detailheader: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 8
  },
  detailBody: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  detailContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
