const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const list = new LinkedList();
    list.insertAtHead(10);
    const oldHead = list.head;
    list.insertAtHead(20);

    expect(list.head.value).toBe(20);
    expect(list.head.next).toBe(oldHead);
    expect(list.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.getByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("it returns the null", () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.getByIndex(2)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("it returns the head", () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.getByIndex(0).value).toBe(10);
    });
  });
  
  describe("with index in the middle", () => {
    test("it returns the element at the index", () => {
      const list = LinkedList.fromValues(10, 20, 40, 50, 60);

      expect(list.getByIndex(3).value).toBe(50);
    });
  });
});
