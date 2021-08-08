import { CARDS_RESPONSE, UNIQUE_MECHANICS } from './Types';
import { AnyAction } from 'redux'
import { IApiResponse } from '../types/ApiResponseType';

interface CardsState {
  cardsResponse: IApiResponse | null,
  uniqueMechanics: string[]
}

const initialState: CardsState = {
  cardsResponse: null,
  uniqueMechanics: []
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CARDS_RESPONSE:
      return { ...state, cardsResponse: action.payload };
    case UNIQUE_MECHANICS:
      return { ...state, uniqueMechanics: action.payload };
    default:
      return state;
  }
};
