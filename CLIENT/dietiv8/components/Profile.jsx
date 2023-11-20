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
import DateTimePicker from "@react-native-community/datetimepicker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Profile() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [target, setTarget] = useState("0");
  const [dob, setDob] = useState("");
  const [dates, setDates] = useState(new Date());
  const [show, setShow] = useState(false);

  const toggleDate = () => {
    setShow(!show);
  };

  const formatDate = (date) => {
    let newDate = new Date(date);

    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    return `${day}-${month}-${year}`;
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDates(currentDate);
      setDob(formatDate(currentDate));
      toggleDate();
    }
  };

  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Complete your</Text>
        <Text style={[styles.text, { marginTop: 0 }]}>Health Profile</Text>
        <View style={styles.containerContent}>
          <View>
            <View style={styles.weight}>
              <Text style={{ fontWeight: "500" }}>Current Weight</Text>
              <View style={styles.kg}>
                <TextInput
                  style={styles.input}
                  onChangeText={setWeight}
                  value={weight}
                  cursorColor={"#88bd1e"}
                  // underlineColorAndroid="black"
                  disableFullscreenUI={true}
                  inputMode="numeric"
                />
                <Text style={{ marginLeft: -15, fontWeight: "400" }}>kg</Text>
              </View>
            </View>
            <View style={styles.weight}>
              <Text style={{ fontWeight: "500" }}>Target Weight</Text>
              <View style={styles.kg}>
                <TextInput
                  style={styles.input}
                  onChangeText={setTarget}
                  value={target}
                  cursorColor={"#88bd1e"}
                  // underlineColorAndroid="black"
                  disableFullscreenUI={true}
                  inputMode="numeric"
                />
                <Text style={{ marginLeft: -15, fontWeight: "400" }}>kg</Text>
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
                  // underlineColorAndroid="black"
                  disableFullscreenUI={true}
                  inputMode="numeric"
                />
                <Text style={{ marginLeft: -15, fontWeight: "400" }}>cm</Text>
              </View>
            </View>
            <Pressable style={styles.weight} onPress={toggleDate}>
              <Text style={{ fontWeight: "500" }}>Date of Birth</Text>
              <View style={styles.kg}>
                <Text style={{ marginLeft: -15, fontWeight: "400" }}>
                  {dob}
                </Text>
              </View>
            </Pressable>
            {show && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={dates}
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}
          </View>
          <View>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("activity")}
            >
              <Text style={styles.txtBtn}>Continue</Text>
            </Pressable>
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
    height: windowHeight - 230,
    justifyContent: "space-between",
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  weight: {
    marginTop: 20,
    backgroundColor: "#d9d9d9",
    height: 50,
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
  txtBtn: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
  btn: {
    marginTop: 40,
    width: windowWidth - 40,
    height: 60,
    backgroundColor: "#55a64e",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
