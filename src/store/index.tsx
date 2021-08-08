import { combineReducers, createStore } from 'redux';
import CardsReducer from '../reducers/CardsReducer';
import SplashReducer from '../reducers/SplashReducer';

const combinedReducers = combineReducers({
  Cards: CardsReducer,
  Splash: SplashReducer
});

export const Store = createStore(combinedReducers)

export type RootState = ReturnType<typeof combinedReducers>