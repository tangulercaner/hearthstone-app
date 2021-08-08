import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import CardList from "../../components/lists/CardList";
import MechanicList from "../../components/lists/MechanicsList";
import SearchBar from "../../components/search/SearchBar";
import { RootState } from "../../store";
import { IApiResponse, ICard } from "../../types/ApiResponseType";
import { HomeProps } from "../../types/NavigationTypes";
import { getUniqueMechanics, searchCardByName } from "./HomeScreen.action";
import { styles } from "./HomeScreen.style";
import AccordionHeader from "../../components/accordion_header/AccordionHeader";
import ScreenError from "../../components/error/ScreenError";
import { getAllCards } from "../splash_screen/SplashScreen.action";

interface IVisibleState {
  searchVisible: boolean,
  mechanicCardsVisibile: boolean
}

const HomeScreen: React.FC<HomeProps> = () => {

  const cardData: IApiResponse = useSelector((state: RootState) => state.Cards.cardsResponse)
  const allCards = useSelector((state: RootState) => state.Cards.allCards)

  const [allMechanics, setAllMechanics] = useState<string[]>([]);

  const [searchName, setSearchName] = useState<string>("");
  const [searchedCards, setSearchedCards] = useState<ICard[]>([]);

  const [visibleState, setVisibleState] = useState<IVisibleState>({
    searchVisible: false,
    mechanicCardsVisibile: false
  });

  const searchCards = useCallback((name) => {
    setSearchName(name)
    setSearchedCards(searchCardByName(name, allCards))
  }, [])


  useEffect(() => {
    const uniqueMechanics = getUniqueMechanics(allCards)
    setAllMechanics(uniqueMechanics)
  }, [])

  if (cardData.success == false) {
    return (
      <ScreenError onRefresh={getAllCards} />
    );
  }

  return (
    <View style={styles.container}>

      <AccordionHeader
        title={"Search"}
        visible={visibleState.searchVisible}
        setVisible={(value: boolean) => setVisibleState({ ...visibleState, searchVisible: value })}
        style={styles.accordionHeaderStyle} />

      {visibleState.searchVisible &&
        <View>
          <SearchBar
            searchValue={searchName}
            setSearchValue={searchCards}
          />
          <CardList cardData={searchedCards} style={styles.mechanicListStyle} />
        </View>
      }

      <AccordionHeader
        title={"Unique Mechanics List"}
        visible={visibleState.mechanicCardsVisibile}
        setVisible={(value: boolean) => setVisibleState({ ...visibleState, mechanicCardsVisibile: value })}
        style={styles.accordionHeaderStyle} />

      {visibleState.mechanicCardsVisibile &&
        <View style={{ flex: 1 }}>
          <MechanicList mechanicsData={allMechanics} style={styles.cardListStyle} />
        </View>
      }
    </View>
  );

}

export default HomeScreen;