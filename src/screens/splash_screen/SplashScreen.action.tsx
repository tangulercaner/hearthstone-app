import { getRequest } from "../../api/HearthstoneApiCalls";
import { ALL_CARDS, CARDS_RESPONSE, SPLASH_LOADING } from "../../reducers/Types";
import { Store } from "../../store";
import { IApiResponse, ICard, ICards } from "../../types/ApiResponseType";

const dispatch = Store.dispatch;

export const getAllCards = async () => {
  dispatch({ type: SPLASH_LOADING, payload: true })

  const response: IApiResponse = await getRequest("/cards");

  const allCards: ICard[] = getAllCardsInAList(response.data)

  dispatch({ type: CARDS_RESPONSE, payload: response })
  dispatch({ type: ALL_CARDS, payload: allCards })
  dispatch({ type: SPLASH_LOADING, payload: false })
};

const getAllCardsInAList = (cardSetLis: ICards): ICard[] => {

  const allCards = Object.values(cardSetLis).reduce((flatList: ICard[], el) => flatList.concat(el), [])

  return allCards

}