import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home_screen/HomeScreen";
import DetailScreen from "../../screens/detail_screen/DetailScreen";
import { CardsIcon, CircleIcon, HomeIcon } from "../../components/visuals/icons/Icons";
import { styles } from "./Tabs.style";
import { PRIMARY_COLOR } from "../../styles/Colors";
import { RootTabParamList } from "../../types/NavigationTypes";


export const Tabs: React.FC = () => {

  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarStyle: {} }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
          headerTitle: "Home",
          tabBarLabelStyle: styles.labelStyle,
          tabBarActiveTintColor: PRIMARY_COLOR,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle
        }}
      />

      <Tab.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          tabBarLabel: "Mechanic Detail",
          tabBarIcon: ({ color, size }) => (
            <CardsIcon color={color} size={size} />
          ),
          headerTitle: "All Cards By Mechanic",
          tabBarLabelStyle: styles.labelStyle,
          tabBarActiveTintColor: PRIMARY_COLOR,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle

        }}
      />
    </Tab.Navigator>
  );

}

