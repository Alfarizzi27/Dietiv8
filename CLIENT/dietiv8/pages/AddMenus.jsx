import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";

import Body from "../components/Body";
import CardAddMenus from "../components/CardAddMenu";
import { useEffect, useState } from "react";
import axios from "axios";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AddMenus() {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://13.250.41.248/foods", {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZ2VuZGVyIjoibWFsZSIsInVzZXJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwid2VpZ2h0Ijo3MCwiaGVpZ2h0IjoxNjUsImV4dHJhIjoiIiwiY2Fsb3JpZUxpbWl0IjoxNjA2LCJ0YXJnZXRXZWlnaHQiOiI2MCIsImFjdGl2aXR5TGV2ZWwiOjEsImRhdGVCaXJ0aCI6IjE5OTctMDEtMjZUMDA6MDA6MDAuMDAwWiIsImlhdCI6MTcwMDQ3NDk2NH0.QIYc8Y6dxqIuvvHyeAO5LVRqG9uLuAEgSZHke6fWel0",
        },
      });
      setFoods(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=> {
    fetchFoods()
  }, []);
 

  const searchEnter = async() => {
    console.log(search);
    try {
      const response = await axios.get("http://13.250.41.248/foods?filter=" + search, {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZ2VuZGVyIjoibWFsZSIsInVzZXJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwid2VpZ2h0Ijo3MCwiaGVpZ2h0IjoxNjUsImV4dHJhIjoiIiwiY2Fsb3JpZUxpbWl0IjoxNjA2LCJ0YXJnZXRXZWlnaHQiOiI2MCIsImFjdGl2aXR5TGV2ZWwiOjEsImRhdGVCaXJ0aCI6IjE5OTctMDEtMjZUMDA6MDA6MDAuMDAwWiIsImlhdCI6MTcwMDQ3NDk2NH0.QIYc8Y6dxqIuvvHyeAO5LVRqG9uLuAEgSZHke6fWel0",
        },
      });
      setFoods(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const addHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      <Body>
        <SafeAreaView style={styles.container}>
          <View style={{ width: windowWidth }}>
            <SearchBar
              placeholder="Search food"
              value={search}
              containerStyle={{ backgroundColor: "transparent" }}
              inputContainerStyle={{ backgroundColor: "white" }}
              onChangeText={updateSearch}
              lightTheme={true}
              inputStyle={{ color: "black" }}
              round={true}
              onSubmitEditing={() => searchEnter()}
              onClear={()=>fetchFoods()}
            />
          </View>
          <FlatList
          data={foods}
          renderItem={({item}) => (
            <CardAddMenus key={item.id} item={item} id={item.id}/>
          )}
          />                    
        </SafeAreaView>
      </Body>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});
