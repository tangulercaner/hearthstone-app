import { IApiResponse } from "../types/ApiResponseType";
import HearhstoneApi from "./HearhstoneApi";

export const getRequest = async (endpoint: string): Promise<IApiResponse> => {

  let formattedResponse: IApiResponse;

  try {
    const response = await HearhstoneApi.get(endpoint);

    formattedResponse = {
      data: response.data,
      allCards: [],
      status: response.status,
      success: response.status == 200,
    }
    return formattedResponse;
  }

  catch (error) {
    formattedResponse = {
      data: error?.response?.data,
      allCards: [],
      status: error?.response?.status,
      success: false
    }
    return formattedResponse;
  }
}