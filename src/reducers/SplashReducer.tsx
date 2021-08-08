import { SPLASH_LOADING } from "./Types";
import { AnyAction } from "redux";

interface SplashState {
  splashLoading: boolean
}

const initialState: SplashState = {
  splashLoading: true
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SPLASH_LOADING:
      return { ...state, splashLoading: action.payload };
    default:
      return state;
  }
}