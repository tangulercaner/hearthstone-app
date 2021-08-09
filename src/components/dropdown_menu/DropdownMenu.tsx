import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DropdownIcon } from "../visuals/icons/Icons";
import { styles } from "./DropdownMenu.style";

interface IDropdownMenu {
  choices: string[],
  choice: string,
  setChoice: (newChoice: string) => void
  style?: Object
}

const DropdownMenu: React.FC<IDropdownMenu> = (props) => {

  const { choices, choice, setChoice, style } = props
  const [choicesVisible, setChoicesVisible] = useState<boolean>(false);

  const changeChoice = (newChocie: string) => {
    setChoicesVisible(false)
    setChoice(newChocie)
  }

  const renderChoice = useCallback(({ item, index }) => {
    return (
      <Text key={index} style={styles.choiceTextStyle} onPress={() => changeChoice(item)} >{item}</Text>
    );
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() => setChoicesVisible(!choicesVisible)}
      >
        <Text style={styles.titleTextStyle}>{choice ? choice : "Choose Mechanics"}</Text>
        <DropdownIcon value={choicesVisible} size={40} />
      </TouchableOpacity>

      {choicesVisible && <View style={styles.choiceContainer}>
        <FlatList
          data={choices}
          renderItem={renderChoice}
          style={{ maxHeight: 250 }}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <View style={styles.choiceSeperatorStyle} />}
          removeClippedSubviews={true}
        />
      </View>}
    </View>

  );
}

export default DropdownMenu;
