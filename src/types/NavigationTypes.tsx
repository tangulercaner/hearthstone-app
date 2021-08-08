import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  Home: undefined;
  Detail: undefined;
};

export type HomeProps = BottomTabScreenProps<RootTabParamList, "Home">
export type DetailProps = BottomTabScreenProps<RootTabParamList, "Detail">