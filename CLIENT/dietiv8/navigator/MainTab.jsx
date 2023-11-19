import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MealPlan from "../pages/MealPlan";
import Recipes from "../pages/Recipes";
import Profile from "../pages/Profile";

import {
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function MainTab() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: "absolute" },
          tabBarActiveTintColor: "#81B722",
          tabBarStyle: {
            height: 62,
          },
          // tabBarLabelStyle: {
          //   marginTop: -5,
          //   marginBottom: 5,
          //   fontSize: 12,
          //   fontWeight: 500,
          // },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="home" size={30} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="MealPlan"
          component={MealPlan}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="fast-food" size={30} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Add"
          component={Recipes}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <FontAwesome name="plus-square" size={35} color="#81B722" />
              );
            },
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={Recipes}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={30}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="account-circle"
                  size={30}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
