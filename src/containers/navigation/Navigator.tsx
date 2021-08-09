import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "../tabs/Tabs";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SplashScreen from "../../screens/splash_screen/SplashScreen";

const Navigator: React.FC = () => {

  const isLoading = useSelector((state: RootState) => state.Splash.splashLoading)

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );

}

export default Navigator;