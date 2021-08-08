import { UNIQUE_MECHANICS } from "../../reducers/Types";
import { Store } from "../../store";
import { ICard } from "../../types/ApiResponseType";

export const getUniqueMechanics = (allCards: ICard[]): string[] => {

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

export const searchCardByName = (name: string, allCards: ICard[]): ICard[] => {

  if (name.length == 0) return ([])

  const searchedCards = allCards.filter(card => card?.name?.toLowerCase().includes(name.toLowerCase()))

  return searchedCards
}