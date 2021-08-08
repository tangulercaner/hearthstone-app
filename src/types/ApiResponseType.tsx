
export interface IMechanic {
  name: string
}

export interface ICard {
  cardId: string,
  cardSet: string,
  health: number,
  locale: string,
  name: String,
  playerClass: string,
  type: string,
  mechanics: IMechanic[]
}

export interface ICards {
  [key: string]: ICard[]
}

export interface IApiResponse {
  status: number;
  success: boolean;
  data: ICards;
}