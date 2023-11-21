import { NavigationContainer } from "@react-navigation/native";
import Register from "./pages/Register";
import MainTab from "./navigator/MainTab"
import MainStack from "./navigator/MainStack";


export default function App() {
  return (
    <NavigationContainer>
      {/* <Register /> */}
      {/* <MainStack /> */}
      <MainTab />
    </NavigationContainer>
  );
}