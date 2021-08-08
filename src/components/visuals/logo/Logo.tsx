import React from "react";
import { Image } from "react-native";
import { LOGO } from "../../../assests/images/Images";
import { styles } from "./Logo.style";

const Logo: React.FC = () => {
  return (
    <Image source={LOGO} style={styles.imageStyle} />
  );
}

export default Logo;
