import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import DropdownMenu from "../../components/dropdown_menu/DropdownMenu";
import ScreenError from "../../components/error/ScreenError";
import CardList from "../../components/lists/CardList";
import { RootState } from "../../store";
import { IApiResponse, ICard } from "../../types/ApiResponseType";
import { DetailProps } from "../../types/NavigationTypes";
import { getAllCards } from "../splash_screen/SplashScreen.action";
import { getAllCardsByMechanics } from "./DetailScreen.action";
import { styles } from "./DetailScreen.style";


const DetailScreen: React.FC<DetailProps> = () => {

  const cardData: IApiResponse = useSelector((state: RootState) => state.Cards.cardsResponse)
  const allCards = useSelector((state: RootState) => state.Cards.allCards)

  const mechanics = useSelector((state: RootState) => state.Cards.uniqueMechanics)

  const [cardsToShow, setCardsToShow] = useState<ICard[]>([]);
  const [mechanicChoice, setMechanicChoice] = useState<string>("");

  const getCards = (mechanicChoice: string) => {
    setMechanicChoice(mechanicChoice);
    const cards = getAllCardsByMechanics(allCards, mechanicChoice)
    setCardsToShow(cards)
  }

  if (cardData.success == false) {
    return (
      <ScreenError onRefresh={getAllCards} />
    );
  }

  return (
    <View style={styles.container}>
      <DropdownMenu choices={mechanics} choice={mechanicChoice} setChoice={getCards} />
      <CardList cardData={cardsToShow} style={styles.listStyle} />
    </View>
  );

}

export default DetailScreen;