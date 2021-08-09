import { StyleSheet } from "react-native";
import { CARD_BACKGROUND, CARD_BORDER_COLOR, CARD_TEXT_COLOR } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: CARD_BACKGROUND,
    borderColor: CARD_BORDER_COLOR,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textStyle: {
    padding: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: CARD_TEXT_COLOR,
  }
})
