export const linkedListDemo = {
  name: "Linked List Insertion",
  description: "Visualize inserting nodes into a linked list",
  code: [
    "function insertNode(head, value) {",
    "  let newNode = new Node(value);",
    "  // find position",
    "  // insert node",
    "}"
  ],
  initData: [1, 2, 3],
  algorithmSteps: (inputValue) => {
    const value = parseInt(inputValue);
    let steps = [];

    // Step 0: highlight head
    steps.push({ action: "highlightNode", index: 0, codeLine: 0 });

    // Step 1: prepare new node
    steps.push({ action: "createNode", value, codeLine: 1 });

    // Step 2: insert node at position 1
    steps.push({ action: "insertNode", index: 1, value, codeLine: 3 });

    return steps;
  }
};
