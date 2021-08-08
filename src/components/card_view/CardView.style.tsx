import { StyleSheet } from "react-native";
import { CARD_BACKGROUND, CARD_BORDER_COLOR } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: CARD_BORDER_COLOR,
    maxWidth: 170,
    maxHeight: 150,
    padding: 5,
    backgroundColor: CARD_BACKGROUND,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",

  },
  subtitleText: {
    textAlign: "center",
    fontSize: 15,
    borderBottomWidth: 1,
    marginBottom: 5
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    flexWrap: "wrap"
  },
  lineText: {
    textAlign: "center",
    fontSize: 15,
  },


})
