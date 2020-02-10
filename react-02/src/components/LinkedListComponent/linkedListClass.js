class Node {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.next = null;
		this.previous = null;		
	}
}

class DoublyLinkedList {
	constructor() {		
		this.head = null
		this.tail = null
		this.current = null;
	}

	first() {
		return this.current = this.head;		
	}

	next() {
		if (this.current.next) {			
			return this.current = this.current.next;
		}		
	}

	last() {
		return this.current = this.tail;		
	}

	prev() {
		if (this.current.previous) {			
			return this.current = this.current.previous;
		}
		
	}

	push(subject, amount) {
		const newNode = new Node(subject, amount);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.current = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
			this.current = this.tail;
		}
		return this.current;		
	}

	pop() {
		if (!this.head) { return null }
		let oldTail = this.tail;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null
			return this.current = null;
		} else {
			this.tail = this.tail.previous;
			this.tail.next = null;
			oldTail.previous = null;
			return this.current = this.tail;			
		}
	}

	unshift(subject, amount) {
		const newNode = new Node(subject, amount);
		if(!this.head){
			this.head = new Node;
			this.tail = new Node;
			this.current = new Node;
		}else {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;
			this.current = this.head;
		}
		return this.current;
	}

	shift() {
		if (!this.head) { return null }
		let oldHead = this.head;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null
			return this.current = null;
		}else {
			this.head = this.head.next;
			this.head.previous = null;
			oldHead.next = null;
			return this.current = this.head;
			
		}
	}

	insertBefore(subject, amount) {
		const newNode = new Node(subject, amount);		
		if(this.current === this.head){
			return this.unshift(subject, amount);
		}
		if(this.current){
			  const temp = this.current.previous;
			  temp.next = newNode;
			  this.current.previous = newNode;
			  newNode.previous = temp;
			  newNode.next = this.current;
			  return this.current = newNode;
		}
	}

	insertAfter(subject, amount) {
        const newNode = new Node(subject, amount);		
		if(this.current === this.tail){
			return this.push(subject, amount);
		}
		if(this.current){
			const temp = this.current.next;
			temp.previous = newNode;
			this.current.next = newNode;
			newNode.next = temp;
			newNode.previous = this.current;
			return this.current = newNode;
		}
	}

	delete() {
		if(this.current === this.head){
			return this.shift();
		}
		if(this.current === this.tail){
			return this.pop();
		}
		if(this.current){
			this.current.previous.next = this.current.next;
			this.current.next.previous = this.current.previous;
			return this.current = this.current.next;
		}			
	}		

	total() {
		this.current = this.head;
		let sum = 0;
		let i = this.current
		do {
			sum += i.amount;
			i = i.next;
		} while (i !== null);
		return sum;
	}	

	show() {
		return `${this.current.subject} - ${this.current.amount}`;
	}
}

export { Node, DoublyLinkedList };