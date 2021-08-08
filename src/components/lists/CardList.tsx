import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { ICard } from "../../types/ApiResponseType";
import CardView from "../card_view/CardView";


interface ICardList {
  cardData: ICard[],
  style?: Object
}

const CardList: React.FC<ICardList> = (props) => {

  const { cardData, style } = props

  const renderCard = useCallback(({ item, index }) => {
    return (
      <CardView key={index} {...item} />
    );
  }, [])

  return (
    <View>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={(card) => card.cardId}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => <View style={{ margin: 20 }} />}
        numColumns={2}
      />
    </View>
  );
}

export default CardList;

