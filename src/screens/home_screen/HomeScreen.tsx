import React, { useEffect } from "react";
import { useState } from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import CardList from "../../components/lists/CardList";
import MechanicList from "../../components/lists/MechanicsList";
import SearchBar from "../../components/search/SearchBar";
import { RootState } from "../../store";
import { ICard } from "../../types/ApiResponseType";
import { HomeProps } from "../../types/NavigationTypes";
import { getUniqueMechanics, searchCardByName } from "./HomeScreen.action";
import { styles } from "./HomeScreen.style";
import AccordionHeader from "../../components/accordion_header/AccordionHeader";

const HomeScreen: React.FC<HomeProps> = () => {

  const cardData = useSelector((state: RootState) => state.Cards.cardsResponse)

  const [mechanics, setMechanics] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [searchedCards, setSearchedCards] = useState<ICard[]>([]);

  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [mechanicCardsVsibile, setMechanicCardsVisible] = useState<boolean>(false);


  // const searchCards = useCallback((name) => {
  //   setName(name)
  //   setSearchedCards(searchCardByName(name, cardData.data))
  // }, [name])


  useEffect(() => {
    const uniqueMechanics = getUniqueMechanics(cardData.data)
    setMechanics(uniqueMechanics)
  }, [])


  return (
    <View style={styles.container}>

      <AccordionHeader title={"Search"} visible={searchVisible} setVisible={setSearchVisible} style={styles.accordionHeaderStyle} />
      {searchVisible &&
        <View>
          <SearchBar
            searchValue={name}
            setSearchValue={setName}
            onSearchSubmit={() => setSearchedCards(searchCardByName(name, cardData.data))}
          />
          <CardList cardData={searchedCards} style={styles.mechanicListStyle} />
        </View>
      }

      <AccordionHeader title={"Unique Mechanics List"} visible={mechanicCardsVsibile} setVisible={setMechanicCardsVisible} style={styles.accordionHeaderStyle} />
      {mechanicCardsVsibile &&
        <View style={{ flex: 1 }}>
          <MechanicList mechanicsData={mechanics} style={styles.cardListStyle} />
        </View>
      }
    </View>
  );

}

export default HomeScreen;