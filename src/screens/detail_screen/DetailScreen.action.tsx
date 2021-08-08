import { ICard, ICards } from "../../types/ApiResponseType";

export const getAllCardsByMechanics = (cards: ICards, mechanic: string) => {

  const allCards = Object.values(cards).reduce((flatList: ICard[], el) => flatList.concat(el), [])

  const filteredCards = allCards.filter(card => card.mechanics && card.mechanics.some(el => el.name == mechanic))

  return filteredCards;

}
