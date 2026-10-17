const LinkedList = require("./linkedLists");

let testList;

describe("LinkedLists class testing with setup and teardown", () => {
  beforeEach(() => {
    testList = new LinkedList();
  });

  test("the list should be empty", () => {
    expect(testList.head).toBe(null);
  });

  test("appending the empty list, should add it as the first node", () => {
    testList.append("dog");
    expect(testList.head.value).toBe("dog");
  });

  test("appending a non empty list, should add it as the last node", () => {
    testList.append("dog");
    testList.append("cat");
    expect(testList.head.nextNode.value).toBe("cat");
  });

  test("prepending an empty list should add the node as the head", () => {
    testList.prepend("house");
    expect(testList.head.value).toBe("house");
  });

  test("prepending an non empty list should add the node as the head", () => {
    testList.prepend("house");
    testList.prepend("door");
    expect(testList.head.value).toBe("door");
  });
});
// test 2
describe("LinkedLists testing with a list that is already set up", () => {
  beforeAll(() => {
    testList = new LinkedList();
    testList.append("dog");
    testList.append("cat");
    testList.append("parrot");
    testList.append("hamster");
    testList.append("zola");
  });

  test("the size of the list should be 5", () => {
    expect(testList.size()).toBe(5);
  });
});
