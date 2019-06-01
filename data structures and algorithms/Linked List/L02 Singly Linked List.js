function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
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
            //把head指向的原始头保存到temp，插进来的node的下一跳是这个temp
            var temp = head;
            head = node;
            node.next = temp;
            length++;
        }
    };

    //把一个节点加到最后
    this.insertEnd = function(element) {
        //创建新的node
        var node = new Node(element);
        //如果长度为空，则加进来的是第一个元素，则头尾都指向它
        if (length == 0) {
            head = node;
            tail = node;
            length++;
        } else {
            //把尾巴的next指向最新插入的node，然后把tail直接改为那个node
            tail.next = node;
            tail = node;
            length++;
        }
    };

    //从最后删除一个节点
    this.removeLast = function() {
        if (length == 0) {
            console.log('Nothing could be removed');
            return null;
        }
        if (length == 1) {
            head = null;
            tail = null;
        } else {
            var current = head;
            //可以看出，对于链式表，移除最后一个元素是很效率低的
            while (current.next != tail) {
                current = current.next;
            }
            tail = current;
            tail.next = null;
        }
        length--;
    };

    //从头删除一个节点
    this.removeFirst = function() {
        if (length == 0) {
            console.log('Nothing could be removed');
            return null;
        }
        if (length == 1) {
            head = null;
            tail = null;
        } else {
            head = head.next;
        }
        length--;
    };

    //indexOf
    this.indexOf = function (element) {
        //
    };

    //删除指定下标
    this.removeAt = function (position) {
        //
    }

    //删除指定值
    this.remove = function (element) {
        //
    }

    //contains  是否包含某个node值
    this.contains = function (element) {
        //
    }

    //clear 
    this.clear = function() {
        head = null;
        tail = null;
        length = 0;
    }


    //描述
    this.toString = function () {
        var current = head;
        var string = '';
        for (let i = 0; i < length; i++) {
            string += i + ': ' + current.value + '\n';
            current = current.next;
        }
        return string;
    }

    //LinkedList的总长度
    this.getLength = function() {
        return length;
    }
}

let list1 = new LinkedList();
list1.insertEnd("first element");
list1.insertFront("second element");
list1.insertEnd("third element");
list1.insertFront("fourth element");
list1.removeLast();
list1.removeFirst();
console.log(list1.toString());
console.log(list1.getLength());



