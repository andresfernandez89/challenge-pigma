import { sum } from "../script";
describe("sum", () => {

  //corner cases
  test("should return false for an empty array", () => {
    const {nums,requiredSum} = { nums: [], requiredSum: 8 };
    expect(()=>sum(nums,requiredSum)).toThrow("Empty array");
  });
  test("should return false for an array with a single element", () => {
    const {nums,requiredSum} = { nums: [8], requiredSum: 8 };
    expect(()=>sum(nums,requiredSum)).toThrow("Array must have at least two elements");
  });

  //use cases
  test("should be return a value defined", () => {
    const {nums,requiredSum} = { nums: [1, 2, 4, 4], requiredSum: 8 };
    expect(sum(nums,requiredSum)).toBeDefined();
  });
  test("should be return true", ()=> {
    const {nums,requiredSum} = { nums: [1, 2, 4, 4], requiredSum: 8 };
    expect(sum(nums,requiredSum)).toBe(true)
  })
  test("should be return false", ()=> {
    const {nums,requiredSum} = { nums: [1,4,3,9], requiredSum: 8 };
    expect(sum(nums,requiredSum)).toBe(false)
  })
});