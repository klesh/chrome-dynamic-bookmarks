import queryStringify from "./queryStringify";

describe("queryStringify", () => {
  it("converts query object into string", () => {
    const input = { name: "tester", city: "testville" };
    const result = queryStringify(input);
    expect(result).toBe("name=tester&city=testville");
  });
});
