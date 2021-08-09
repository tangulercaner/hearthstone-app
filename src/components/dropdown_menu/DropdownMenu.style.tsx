import { StyleSheet } from "react-native";
import { LIGHT_GRAY_COLOR, PRIMARY_COLOR } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 2,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: PRIMARY_COLOR,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  titleTextStyle: {
    fontSize: 18
  },
  choiceContainer: {

  },
  choiceTextStyle: {
    fontSize: 15,
  },
  choiceSeperatorStyle: {
    marginVertical: 3,
    borderBottomWidth: 1,
    borderColor: LIGHT_GRAY_COLOR
  }
})
