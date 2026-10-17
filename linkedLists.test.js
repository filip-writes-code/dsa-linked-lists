const LinkedList = require("./linkedLists");

let testList = new LinkedList();

test("the list should be empty", () => {
  expect(testList.head).toBe(null);
});
