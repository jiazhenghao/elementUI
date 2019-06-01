function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
}

function DoublyLinkedList() {
    var length = 0;
    var head = null;
    var tail = null;

    //把一个node节点从头插入
    this.insertFront = function(element) {
        //创建新的node
        var node = new Node(element);
        //如果长度为空，则加进来的是第一个元素，则头尾都指向它
        if (length == 0) {
            head = node;
            tail = node;
            length++;
        } else {
            //把head指向的原始头保存到temp
            var temp = head;

            head = node;
            head.previous = null;
            head.next = temp;

            temp.previous = node;
            
            length++;
        }
    };

}
