
const createNode = (val, left = null, right = null) => ({ val, left, right });

function Deque() {
    this.front = null;
    this.back = null;
}

Deque.prototype.pushFront = function (val) {
    const node = createNode(val);
    if (!this.front) {
        this.front = node;
        this.back = node;
        return;
    }
    node.right = this.front;
    this.front.left = node;
    this.front = node;
}

Deque.prototype.popFront = function () {
    const node = this.front;
    if(this.front === this.back) {
        this.front = null;
        this.back = null;
        return node.val;
    }
    this.front = this.front?.right;
    this.front.left = null;
    return node.val;
}

Deque.prototype.pushBack = function (val) {
    const node = createNode(val);
    if(!this.back) {
        this.front = node;
        this.back = node;
        return;
    }
    node.left = this.back;
    this.back.right = node;
    this.back = node;
}

Deque.prototype.popBack = function () {
    const node = this.back;
    if(this.front === this.back) {
        this.front = null;
        this.back = null;
        return node.val;
    }
    this.back = this.back?.left;
    this.back.right = null;
    return node.val;
}

Deque.prototype.print = function () {
    let temp = this.front;
    let s = [];
    while(temp) {
        s.push(temp.val)
        temp = temp.right;
    }
    console.log(s.join(' -> '));
}

Deque.prototype.isEmpty = function () {
    return !!this.front;
}

Deque.prototype.getFront = function () {
    return this.front.val;
}

Deque.prototype.getBack = function () {
    return this.back.val;
}

const dq = new Deque();
dq.pushFront(1);
dq.pushBack(12);
dq.pushFront(-8);
dq.print();
dq.pushBack(14);
dq.print();
dq.popFront();
dq.print();
dq.popBack();
dq.print();
dq.pushBack(18);
dq.print();
dq.popFront();
dq.print();