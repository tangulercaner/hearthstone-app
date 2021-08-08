
import 'react-native';
import { getAllCardsByMechanics } from '../src/screens/detail_screen/DetailScreen.action';
import { testData } from '../src/test_data/TestData';

describe("Get all cards that icludes the given mechanic", () => {
  it("should return a l length card list includes given mechanic", () => {

    const returnedValue = getAllCardsByMechanics(testData, "Silence");
    const expectedMechanicObject = { "name": "Silence" }

    expect(returnedValue.length).toBe(1)
    expect(returnedValue).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          mechanics: [expectedMechanicObject]
        })
      ])
    )
  })
});

