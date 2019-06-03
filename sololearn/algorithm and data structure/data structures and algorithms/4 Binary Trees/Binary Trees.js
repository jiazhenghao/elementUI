function BinaryTree() {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.toString = function () {
            return 'Value is ' + value +
                '\nleft child is ' + left.value +
                '\nright child is ' + right.value;
        };
        this.compare = function (newValue) {
            if (this.value > newValue) {
                return 1;
            } else if (this.value == newValue) {
                return 0;
            } else {
                return -1;
            }
        }
    }

    var _head = null;
    var _count = 0;

    this.add = function (value) {
        //Case1: The tree is empty
        if (_head == null) {
            _head = new Node(value);
        }
        //Case2: The tree is not empty so find the right location to insert
        else {
            addTo(_head, value);
        }
        _count++;
    };

    this.addTo = function (node, value) {
        //case1: value is less than the current node value
        if (node.compare(value) > 0) {
            //if there is no left child, make this new left
            if (node.left == null) {
                node.left = new Node(value);
            } else {
                addTo(node.left, value);
            }
        }
        //case2: value is greater or equal to the current node value
        else {
            if (node.right == null) {
                node.right = new Node(value);
            } else {
                addTo(node.right, value);
            }
        }
    };

    this.contains = function (value) {
        return findWithParent(value).current != null;
    }

    this.findWithParent = function (value) {
        var current = _head;
        var parent = null;

        //首先指向root，也就是head，然后开始查找，不为null就不要停
        while (current != null) {
            let result = current.compare(value);
            if (result > 0) {
                parent = current;
                current = current.left;
            }
            else if (result < 0) {
                parent = current;
                current = current.right;
            }
            else {
                break;
            }
        }
        return { current, parent };
    };

    this.remove = function (value) {
        //先找到这个value对应的节点，如果找不到，直接放弃就行了
        var { current, parent } = this.findWithParent(value);
        if (current == null) {
            return false;
        }

        _count--;

        //Case1: if current has no right child, then current's left replaces current;
        if (current.right == null) {
            //如果是root，就直接设置_head
            if (parent == null) {
                _head = current.left;
            }
            //如果当前节点连左节点都没，直接把父节点的右节点设置为null
            else if (current.left == null) {
                parent.right == null;
            }
            else {
                //这里我们要弄清楚，父亲节点的左右，到底哪个分支在做删除
                let result = parent.compare(current.value);
                if (result > 0) {
                    parent.left = current.left;
                } else {
                    parent.right == current.left;
                }
            }
        }
        //case2: if current's right child has no left child, then current's right child replaces current
        else if (current.right.left == null) {
            current.right.left = current.left;
            if (parent == null) {
                _head = current.right;
            }
            else {
                //这里我们要弄清楚，父亲节点的左右，到底哪个分支在做删除
                let result = parent.compare(current.value);
                if (result > 0) {
                    parent.left = current.right;
                } else {
                    parent.right = current.right;
                }
            }
        }
        //case3: if current'right child has a left child, replace current with current's 
        //right child's left-most child
        else {
            let leftmost = current.right.left;
            let leftmostparent = current.right;
            while (leftmost.left != null) {
                leftmostparent = leftmost;
                leftmost = leftmost.left;
            }
            //the parent's left subtree becomes the leftmost's right subtree
            leftmostparent.left = leftmost.right;
            //assign leftmost's left and right to current's left and right children
            leftmost.left = current.left;
            leftmost.right = current.right;
            
            if (parent == null) {
                _head = leftmost;
            }
            else {
                let result = parent.compare(current.value);
                if (result > 0) {
                    parent.left = leftmost;
                }
                else {
                    parent.right = leftmost;
                }
            }
        }
        return true;
    };

    

}