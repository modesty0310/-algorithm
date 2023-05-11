class Queue {
    constructor () {
        this.items = {};
        this.headIdx = 0;
        this.tailIdx = 0;
    }

    enqueue (item) {
        this.items[this.tailIdx] = item;
        this.tailIdx++;
    }

    dequeue () {
        if(this.getLength === 0) return '더 이상 삭제할 아이템이 없습니다.'
        const item = this.items[this.headIdx];
        delete this.items[this.headIdx];
        this.headIdx++;
        return item;
    }

    peek () {
        return this.items[this.headIdx];
    }

    getLength() {
        return this.tailIdx - this.headIdx;
    }
}