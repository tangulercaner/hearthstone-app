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
  },
  {
    "cardId": "CFM_902",
    "name": "Aya Blackpaw",
    "cardSet": "Mean Streets of Gadgetzan",
    "type": "Minion",
    "cost": 6,
    "health": 3,
    "playerClass": "Neutral",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Jade Golem"
      },
      {
        "name": "Battlecry"
      },
      {
        "name": "Silence"
      }
    ]
  }


]