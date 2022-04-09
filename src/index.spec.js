import differenceInAges from "./index";

describe("arrayMadness", () => {
  test("should work for fixed tests", () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76]);
    expect(differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85]);
    expect(differenceInAges([16, 22, 31, 44, 3, 38, 27, 41, 88])).toEqual([
      3,
      88,
      85
    ]);
    expect(differenceInAges([5, 8, 72, 98, 41, 16, 55])).toEqual([5, 98, 93]);
    expect(differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85]);
    expect(differenceInAges([62, 0, 3, 77, 88, 102, 26, 44, 55])).toEqual([
      0,
      102,
      102
    ]);
    expect(differenceInAges([2, 44, 34, 67, 88, 76, 31, 67])).toEqual([
      2,
      88,
      86
    ]);
    expect(
      differenceInAges([46, 86, 33, 29, 87, 47, 28, 12, 1, 4, 78, 92])
    ).toEqual([1, 92, 91]);
    expect(differenceInAges([66, 73, 88, 24, 36, 65, 5])).toEqual([5, 88, 83]);
    expect(differenceInAges([12, 76, 49, 37, 29, 17, 3, 65, 84, 38])).toEqual([
      3,
      84,
      81
    ]);
    expect(differenceInAges([0, 110])).toEqual([0, 110, 110]);
    expect(differenceInAges([33, 33, 33])).toEqual([33, 33, 0]);
    expect(
      differenceInAges([21, 96, 16, 47, 84, 47, 106, 47, 107, 29, 54])
    ).toEqual([16, 107, 91]);
    expect(differenceInAges([57, 103, 24, 73, 33, 82, 33, 62])).toEqual([
      24,
      103,
      79
    ]);
    expect(
      differenceInAges([48, 36, 0, 32, 67, 37, 73, 0, 102, 30, 39])
    ).toEqual([0, 102, 102]);
    expect(differenceInAges([14, 13, 42, 17, 69, 59, 6])).toEqual([6, 69, 63]);
    expect(differenceInAges([79, 50, 70, 10, 1, 26, 78, 83])).toEqual([
      1,
      83,
      82
    ]);
    expect(differenceInAges([49, 39, 20, 79])).toEqual([20, 79, 59]);
    expect(differenceInAges([46, 109, 59, 16, 19, 23, 53, 74, 46])).toEqual([
      16,
      109,
      93
    ]);
    expect(differenceInAges([21, 84, 65, 102, 45, 45])).toEqual([21, 102, 81]);
    expect(differenceInAges([1, 46, 52, 13, 17, 105, 21, 2, 43, 66])).toEqual([
      1,
      105,
      104
    ]);
    expect(differenceInAges([81, 34, 105, 67, 75, 26, 14, 60, 23])).toEqual([
      14,
      105,
      91
    ]);
    expect(differenceInAges([51, 74, 51, 79, 13])).toEqual([13, 79, 66]);
    expect(differenceInAges([66, 47, 1, 43, 27, 8, 105, 21, 77, 43])).toEqual([
      1,
      105,
      104
    ]);
    expect(differenceInAges([11, 21, 57, 18, 38, 80, 28])).toEqual([
      11,
      80,
      69
    ]);
    expect(differenceInAges([82, 52, 90, 30])).toEqual([30, 90, 60]);
    expect(differenceInAges([36, 106])).toEqual([36, 106, 70]);
    expect(
      differenceInAges([80, 2, 97, 79, 48, 48, 101, 9, 47, 103, 55])
    ).toEqual([2, 103, 101]);
    expect(differenceInAges([4, 45, 22, 103])).toEqual([4, 103, 99]);
    expect(differenceInAges([71, 7, 17, 63, 38, 31, 33, 52, 85, 99])).toEqual([
      7,
      99,
      92
    ]);
    expect(differenceInAges([44, 54, 45, 44])).toEqual([44, 54, 10]);
    expect(differenceInAges([9, 36, 103])).toEqual([9, 103, 94]);
    expect(differenceInAges([83, 48, 34, 13])).toEqual([13, 83, 70]);
    expect(differenceInAges([5, 38, 8, 0, 74])).toEqual([0, 74, 74]);
    expect(differenceInAges([83, 11, 35, 96, 56, 7])).toEqual([7, 96, 89]);
    expect(differenceInAges([14, 65, 21, 62, 25])).toEqual([14, 65, 51]);
    expect(differenceInAges([90, 8, 0, 63])).toEqual([0, 90, 90]);
  });
});
