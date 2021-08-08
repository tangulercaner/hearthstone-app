import React from "react";
import { useState } from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import DropdownMenu from "../../components/dropdown_menu/DropdownMenu";
import CardList from "../../components/lists/CardList";
import { RootState } from "../../store";
import { ICard } from "../../types/ApiResponseType";
import { DetailProps } from "../../types/NavigationTypes";
import { getAllCardsByMechanics } from "./DetailScreen.action";
import { styles } from "./DetailScreen.style";


const DetailScreen: React.FC<DetailProps> = () => {

  const cardData = useSelector((state: RootState) => state.Cards.cardsResponse)
  const mechanics = useSelector((state: RootState) => state.Cards.uniqueMechanics)

  const [cardsToShow, setCardsToShow] = useState<ICard[]>([]);
  const [mechanicChoice, setMechanicChoice] = useState<string>("");

  const getCards = (mechanicChoice: string) => {
    setMechanicChoice(mechanicChoice);
    const cards = getAllCardsByMechanics(cardData.data, mechanicChoice)
    setCardsToShow(cards)
  }

  return (
    <View style={styles.container}>
      <DropdownMenu choices={mechanics} choice={mechanicChoice} setChoice={getCards} />
      <CardList cardData={cardsToShow} style={styles.listStyle} />
    </View>
  );

}

export default DetailScreen;