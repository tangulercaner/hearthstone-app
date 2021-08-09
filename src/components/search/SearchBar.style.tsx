import { StyleSheet } from "react-native";
import { LIGHT_GRAY_COLOR } from "../../styles/Colors";

export const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: LIGHT_GRAY_COLOR,
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10
  }
})