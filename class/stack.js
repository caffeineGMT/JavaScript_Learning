const _count = new WeakMap();
const _arr = new WeakMap();
class Stack {
    constructor() {
        _count.set(this, 0);
        _arr.set(this, []);
    }
    peek() {
        if (_arr.get(this).length === 0) throw new Error("empty stack");
        const arr = _arr.get(this);
        console.log(arr[arr.length - 1]);
    }
    pop() {
        if (_arr.get(this).length === 0) throw new Error("empty stack");
        const arr = _arr.get(this);
        arr.pop();
        const newCount = this.count - 1;
        _count.set(this, newCount);
    }
    push(obj) {
        const arr = _arr.get(this);
        arr.push(obj);
        const newCount = this.count + 1;
        _count.set(this, newCount);
    }
    get count() {
        return _count.get(this); // we could also return the array's length as count, that way we dont have to maintain the count when push/po
    }

}

const stack = new Stack();
console.log(stack.count);
stack.push("a");
stack.push("b");
console.log(stack.count);
stack.pop();
stack.peek();
stack.pop();
console.log(stack.count);