//const TestRunner = require("jest-runner");
const { data } = require("./kataclysm");
let { cleanString } = data;
// Test 1
test("check user input 1 against correct string", () => {
  expect(data(cleanString)).toBe(
    "Dr Bumbum, 3 pm, 20th of Feb -Moor St, 22nd Floor, Birmingham B5 4BU"
  );
// });
// // Test 2
// test("check use 2 against correct string", () => {
//   expect(data(cleanString)).toBe("");
// });
// // Test 3
// test("check user input 3 against correct string", () => {
//   expect(data(cleanString)).toBe("");
// });
