import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import LoadingSpinner from "../../components/loading_spinner/LoadingSpinner";
import Logo from "../../components/visuals/logo/Logo";
import { getAllCards } from "./SplashScreen.action";
import { styles } from "./SplashScreen.style";

const SplashScreen: React.FC = () => {

  const getData = async () => {
    await getAllCards();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.loadingContainer}>
        <LoadingSpinner size={"large"} />
        <Text style={styles.textStyle}>Loading Data</Text>
      </View>
    </View>
  );

}

export default SplashScreen;


