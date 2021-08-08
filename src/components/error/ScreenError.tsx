import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ErrorIcon, RefreshIcon } from "../visuals/icons/Icons";
import { styles } from "./ScreenError.style";

interface IErrorView {
  onRefresh: () => void
}

const ScreenError: React.FC<IErrorView> = (props) => {

  const { onRefresh } = props

  return (
    <View style={styles.container}>
      <ErrorIcon size={80} />
      <Text style={styles.textStyle}>Something went wrong...</Text>

      <TouchableOpacity style={styles.refreshStyle} onPress={onRefresh}>
        <Text style={styles.refreshTextStyle}>Refresh</Text>
        <RefreshIcon />
      </TouchableOpacity>

    </View>
  );
}

export default ScreenError;
