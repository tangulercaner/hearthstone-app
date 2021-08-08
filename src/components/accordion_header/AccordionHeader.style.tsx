import { StyleSheet } from "react-native";
import { CARD_BACKGROUND, CARD_BORDER_COLOR, PRIMARY_LIGHT_COLOR } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_LIGHT_COLOR,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold"
  }



})
