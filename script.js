// document.addEventListener("DOMContentLoaded", () => {


// });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


class Node {
	constructor(value) {
    this.prev = null
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(value) {
		this.head = {
      prev: null,
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
  print(){
    const arr = []
    let currentNode = this.head
    while(currentNode !== null){
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr
  }
	append(value) {
		const newNode = new Node(value);
    newNode.prev = this.tail
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}
	prepend(value) {
		const newNode = new Node(value);
    this.head.prev = newNode
		newNode.next = this.head;
		this.head = newNode;

		this.length++;
	}
  traverse(index){
    if (index >= this.length) {
      return this.tail
    }
    let currentNode = this.head;
		if (index > 0) {
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next;
			}
		}
    return currentNode
  }
	insert(index, value) {
		const newNode = new Node(value);
		let prevNode = this.traverse(index)
    let nextNode =  prevNode.next
		newNode.next = nextNode;
    nextNode.prev = newNode
    newNode.prev = prevNode;
		prevNode.next = newNode;
		this.length++;
	}
  remove(index) {
    let prevNode = this.traverse(index)
    let deletNode = prevNode.next
    let newNext = deletNode.next
    prevNode.next = newNext
    newNext.prev = prevNode
    this.length--
  }
}
const myLinked = new LinkedList(10);
myLinked.append(5);
myLinked.prepend(18);
myLinked.insert(1, 28);
myLinked.insert(2,80)
myLinked.remove(3)
console.log(myLinked);

console.log(myLinked.print());