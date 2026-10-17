const LinkedList = require("./linkedLists");

let testList;

//test with a fresh list for each test instance
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

  test("tail() should return the last element", () => {
    testList.append("house");
    testList.append("door");
    expect(testList.tail().value).toBe("door");
  });

  test("if empty, tail() should return undefined", () => {
    expect(testList.tail()).toBe(undefined);
  });
});
// tests with an already populated list
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

  test("tail should return the last node in the list", () => {
    expect(testList.tail().value).toBe("zola");
  });

  test("at(4) should return zola", () => {
    expect(testList.at(4).value).toBe("zola");
  });

  test("at(2) should return parrot", () => {
    expect(testList.at(2).value).toBe("parrot");
  });

  test("at(0) should return dog", () => {
    expect(testList.at(0).value).toBe("dog");
  });

  test("at(6) should return undefined", () => {
    expect(testList.at(6)).toBe(undefined);
  });
});
