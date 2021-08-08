import { ICard } from "../types/ApiResponseType";

export const testData: ICard[] = [
  {
    "cardId": "EX1_607",
    "name": "Inner Rage",
    "cardSet": "Classic",
    "type": "Spell",
    "cost": 0,
    "playerClass": "Warrior",
    "locale": "enUS"
  },
  {
    "cardId": "EX1_008",
    "name": "Argent Squire",
    "cardSet": "Classic",
    "type": "Minion",
    "cost": 1,
    "health": 1,
    "playerClass": "Neutral",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Divine Shield"
      }
    ]
  },
  {
    "cardId": "EX1_245",
    "name": "Earth Shock",
    "cardSet": "Classic",
    "type": "Spell",
    "cost": 1,
    "playerClass": "Shaman",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Silence"
      }
    ]
  }


]