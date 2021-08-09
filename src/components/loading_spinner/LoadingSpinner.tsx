import React from "react";
import { ActivityIndicator, View } from "react-native";
import { PRIMARY_COLOR } from "../../styles/Colors";

interface ILoadingSpinner {
  size?: "small" | "large",
  style?: Object
}

const LoadingSpinner = (props: ILoadingSpinner) => {
  const { size, style } = props
  return (
    <View style={style}>
      <ActivityIndicator size={size ? size : "small"} color={PRIMARY_COLOR} />
    </View >
  );
};

export default LoadingSpinner;