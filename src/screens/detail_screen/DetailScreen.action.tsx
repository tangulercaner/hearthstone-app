import { ICard } from "../../types/ApiResponseType";

export const getAllCardsByMechanics = (allCards: ICard[], mechanic: string): ICard[] => {

  const filteredCards = allCards.filter(card => card.mechanics && card.mechanics.some(el => el.name == mechanic))

  return filteredCards;

}
