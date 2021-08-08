import { UNIQUE_MECHANICS } from "../../reducers/Types";
import { Store } from "../../store";
import { ICard, ICards } from "../../types/ApiResponseType";

export const getUniqueMechanics = (cards: ICards): string[] => {

  const allCards = Object.values(cards).reduce((flatList: ICard[], el) => flatList.concat(el), [])

  let mechanics: string[] = [];

  for (const card of allCards) {
    if (card.mechanics) {
      for (const elem of card.mechanics) {
        !mechanics.includes(elem.name) && mechanics.push(elem.name)
      }
    }
  }
  Store.dispatch({ type: UNIQUE_MECHANICS, payload: mechanics })
  return mechanics;

}

export const searchCardByName = (name: string, cards: ICards): ICard[] => {

  const allCards = Object.values(cards).reduce((flatList: ICard[], el) => flatList.concat(el), [])

  const searchedCards = allCards.filter(card => card?.name?.toLowerCase().includes(name.toLowerCase()))

  return searchedCards
}