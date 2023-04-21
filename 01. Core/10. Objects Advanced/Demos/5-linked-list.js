// Case 1
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

const node1 = {
  value: 1,
  next: null,
}
const node2 = {
  value: 2,
  next: null,
}
const node3 = {
  value: 3,
  next: null,
}

node1.next = node2;
node2.next = node3;

console.log(list);

const listToArray = (firstNode) => {
  const arr = [];
  let currentNode = firstNode;

  while (currentNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return arr;
};

console.log(listToArray(list));

console.log(listToArray(node2));

// Case 2
const thirdNode = {
  value: 3,
  next: null
};

const secondNode = {
  value: 2,
  next: thirdNode
}

const firstNode = {
  value: 1,
  next: secondNode
}

const sumValuesOfLinkedList = (node) => {
  let current = node;
  let sum = 0;

  while (current !== null) {
    sum += current.value;
    current = current.next;
  }

  return sum;
}

console.log(sumValuesOfLinkedList(firstNode));
console.log(sumValuesOfLinkedList(thirdNode));
console.log(sumValuesOfLinkedList(secondNode));

