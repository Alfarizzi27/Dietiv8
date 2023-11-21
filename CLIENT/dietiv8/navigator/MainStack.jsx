import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import Home from "../pages/Home";
import Achievement from "../pages/Achievement"

export default function MainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home Page"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Achievement"
        component={Achievement}
      />
    </Stack.Navigator>
  );
}
