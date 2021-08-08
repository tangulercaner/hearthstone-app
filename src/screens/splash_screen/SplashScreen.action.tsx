import HearhstoneApi from "../../api/HearhstoneApi";
import { CARDS_RESPONSE, SPLASH_LOADING } from "../../reducers/Types";
import { Store } from "../../store";
import { IApiResponse } from "../../types/ApiResponseType";

const dispatch = Store.dispatch;

export const getAllCards = async () => {
  dispatch({ type: SPLASH_LOADING, payload: true })

  let formattedResponse: IApiResponse;

  try {
    const response = await HearhstoneApi.get("/cards");

    formattedResponse = {
      data: response.data,
      status: response.status,
      success: response.status == 200
    }
    dispatch({ type: CARDS_RESPONSE, payload: formattedResponse })
    dispatch({ type: SPLASH_LOADING, payload: false })
  }

  catch (error) {
    if (error.response) {
      formattedResponse = {
        data: error.response?.data,
        status: error.response.status,
        success: false
      }
      dispatch({ type: CARDS_RESPONSE, payload: formattedResponse })
    }
    dispatch({ type: SPLASH_LOADING, payload: false })

    // else if (error.request) {
    //   console.log(error.request);
    // }
    // else {
    //   console.log('Error', error.message);
    // }
    // console.log(error.config);

  }

};

