import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LandingPage from "./screens/landingScreen/LandingPage";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ route }) => ({
              title: route.params.username,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
