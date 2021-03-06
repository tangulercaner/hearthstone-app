import React from "react";
import { View, Text } from "react-native";
import { styles } from "./MechanicView.style";

interface IMechanicView {
  name: string,
}

const MechanicView: React.FC<IMechanicView> = (props) => {

  const { name } = props

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> {name} </Text>
    </View>
  );
}

export default MechanicView;
