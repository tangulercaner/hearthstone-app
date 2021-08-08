import React from "react";
import { View, Text } from "react-native";
import { ICard } from "../../types/ApiResponseType";
import { styles } from "./CardView.style";


const CardView: React.FC<ICard> = (props) => {

  const { name, health, cardSet, playerClass, type } = props

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <Text style={styles.subtitleText}>{cardSet}</Text>


      <View style={styles.lineContainer}>
        <Text style={styles.lineText}>Class:</Text>
        <Text style={styles.lineText}>{playerClass}</Text>
      </View>

      <View style={styles.lineContainer}>
        <Text style={styles.lineText}>Health:</Text>
        <Text style={styles.lineText}>{health ? health : "-"}</Text>
      </View>

      <View style={styles.lineContainer}>
        <Text style={styles.lineText}>Type:</Text>
        <Text style={styles.lineText}>{type ? type : "-"}</Text>
      </View>

    </View>
  );
}

export default CardView;
