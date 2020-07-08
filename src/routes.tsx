import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Main from "./pages/Main";
import Camera from "./pages/Camera";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="camera" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
