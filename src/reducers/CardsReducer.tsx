import { ALL_CARDS, CARDS_RESPONSE, UNIQUE_MECHANICS } from './Types';
import { AnyAction } from 'redux'
import { IApiResponse, ICard } from '../types/ApiResponseType';

interface CardsState {
  cardsResponse: IApiResponse | null,
  uniqueMechanics: string[],
  allCards: ICard[]
}

const initialState: CardsState = {
  cardsResponse: null,
  uniqueMechanics: [],
  allCards: []
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CARDS_RESPONSE:
      return { ...state, cardsResponse: action.payload };
    case UNIQUE_MECHANICS:
      return { ...state, uniqueMechanics: action.payload };
    case ALL_CARDS:
      return { ...state, allCards: action.payload };
    default:
      return state;
  }
};
