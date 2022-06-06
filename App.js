import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./app/screens/login";
import Signup from "./app/screens/signup";
import Home from "./app/screens/home";
import Volsearch from "./app/screens/volsearch";
import User from "./app/screens/user";
import "react-native-gesture-handler";
import Hotelsearch from "./app/screens/hotelsearch";
import Voldetails from "./app/screens/voldetails";
import Volhotel from "./app/screens/volhotel";
import Volhotelde from "./app/screens/volhotelde";
import Options from "./app/screens/options";
import Carte from "./app/screens/carte";
import { Discover } from "./app/screens/discover";
import { Images } from "./app/screens/images";
import Notif from "./app/screens/notif";
import Reservations from "./app/screens/reservations";
import Volplus from "./app/screens/volplus";
import Hotelplus from "./app/screens/hotelplus";
import VolResults from "./app/screens/volresults";
import HotelResults from "./app/screens/hotelresults";
import Ads from "./app/screens/ads";
import { Linking, Platform } from "react-native";

const Stack = createStackNavigator();
const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Volsearch" component={Volsearch} />
        <Stack.Screen name="Voldetails" component={Voldetails} />
        <Stack.Screen name="Volplus" component={Volplus} />
        <Stack.Screen name="Volhotel" component={Volhotel} />
        <Stack.Screen name="Volhotelde" component={Volhotelde} />
        <Stack.Screen name="Hotelsearch" component={Hotelsearch} />
        <Stack.Screen name="Hotelplus" component={Hotelplus} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Images" component={Images} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Carte" component={Carte} />
        <Stack.Screen name="Notif" component={Notif} />
        <Stack.Screen name="Reservations" component={Reservations} />
        <Stack.Screen name="VolResults" component={VolResults} />
        <Stack.Screen name="HotelResults" component={HotelResults} />
        <Stack.Screen name="Ads" component={Ads} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
