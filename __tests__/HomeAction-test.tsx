
import 'react-native';
import { getUniqueMechanics, searchCardByName } from '../src/screens/home_screen/HomeScreen.action';
import { testData } from '../src/test_data/TestData';

describe("Get all unique mechanics", () => {
  it("should return a list of 2 string values", () => {
    const returnedValue = getUniqueMechanics(testData);
    expect(returnedValue.length).toBe(4)
    expect(returnedValue).toEqual([
      "Divine Shield",
      "Silence",
      "Jade Golem",
      "Battlecry"
    ])
  })
});

describe("Search a card by name", () => {
  it("should return an ICard array includes matched name", () => {
    const returnedValue = searchCardByName("shock", testData);
    expect(returnedValue).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "Earth Shock" })
      ])
    )
  })

  it("should return an ICard array not includes unmatched names", () => {
    const returnedValue = searchCardByName("shock", testData);
    const shouldntHave = ["Inner Rage", "Argent Squire", "Aya Blackpaw"]
    shouldntHave.map(el =>
      expect(returnedValue).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: el }),
        ])
      )
    )
  })

});


