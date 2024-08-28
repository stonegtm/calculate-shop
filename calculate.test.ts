import { calculateShop } from "./calculator";

describe("calculate test 1", () => {
  it("should calculate total without discounts", () => {
    const items = [
      { value: "red_set", quantity: 1 },
      { value: "green_set", quantity: 1 },
    ];
    const result = calculateShop(items);
    expect(result).toBe(90);
  });

  it("test for member", () => {
    const items = [
      { value: "red_set", quantity: 1 },
      { value: "green_set", quantity: 1 },
    ];
    const result = calculateShop(items, true);
    expect(result).toBe(81);
  });

  it("test for discount 5%", () => {
    const items = [{ value: "green_set", quantity: 2 }];
    const result = calculateShop(items);
    expect(result).toBe(76);
  });

  it("test for discount condition orange_set", () => {
    const items = [{ value: "orange_set", quantity: 3 }];
    const result = calculateShop(items);
    expect(result).toBe(324);
  });
});
