import { generateCSV } from "../src/helpers/fileConverter";

describe("fileConverter", () => {
  test("generateCSV should return a CSV string from a list of objects", () => {
    const data = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 }
    ];
    const expectedOutput = "name,age\nJohn,30\nJane,25\n";
    const output = generateCSV(data);
    expect(output).toEqual(expectedOutput);
  });

  test("generateCSV should return empty string if no data is given", () => {
    const data = [];
    const expectedOutput = "";
    const output = generateCSV(data);
    expect(output).toEqual(expectedOutput);
  });

  test("generateCSV should include headers according to the objects' keys", () => {
    const data = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 }
    ];
    const output = generateCSV(data);
    expect(output).toContain("name");
    expect(output).toContain("age");
  });

  test("generateCSV should not result in undefined behavior if object is missing data", () => {
    const data = [
        { name: "John", age: 30 },
        { name: "Jane" }
    ];
    const expectedOutput = "name,age\nJohn,30\nJane,\n";
    const output = generateCSV(data);
    expect(output).toEqual(expectedOutput);
  });
})