import { StyleSheet } from "react-native";
import { PRIMARY_DARK_COLOR } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold"
  },
  refreshStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  refreshTextStyle: {
    fontSize: 20,
    color: PRIMARY_DARK_COLOR,
    fontWeight: "bold",
    marginRight: 10
  }
})
