import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { WHITE_COLOR } from "../../styles/Colors";
import { DropdownIcon } from "../visuals/icons/Icons";
import { styles } from "./AccordionHeader.style";

interface IAccordionHeader {
  title: string,
  visible: boolean,
  setVisible: (value: boolean) => void,
  style?: object
}

const AccordionHeader: React.FC<IAccordionHeader> = (props) => {

  const { title, visible, setVisible, style } = props

  return (
    <TouchableOpacity style={{ ...styles.container, ...style }} onPress={() => setVisible(!visible)}>
      <Text style={styles.textStyle}>{title}</Text>
      <DropdownIcon value={visible} size={50} color={WHITE_COLOR} />
    </TouchableOpacity>
  );
}

export default AccordionHeader;
