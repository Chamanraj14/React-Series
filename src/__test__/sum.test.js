import { sum } from "../components/sum"

test("sum function adds two numbers and gives output of two numbers", () => {
    const result = sum(3,5);
    expect(result).toBe(8);
})