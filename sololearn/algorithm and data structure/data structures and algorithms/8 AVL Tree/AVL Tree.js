// class AVLTree {

//     constructor() {
//         this.head = null;
//         this.count = 0;
//     }

//     // get count() {
//     //     return this._count;
//     // }

//     // set count(val){
//     //     this._count = val; // 自身递归调用
//     // }

//     add(value) {
//         this.count++;
//     }

//     remove(value) {
//         this.count--;
//     }

//     contains(value) {
//         return false;
//     }

//     clear() {

//     }

//     preOrderTraversal() {

//     }

//     postOrderTraversal() {

//     }

//     inOrderTraversal() {

//     }

// }

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.compareTo = function (newValue) {
        if (this.value > newValue) {
            return 1;
        } else if (this.value == newValue) {
            return 0;
        } else {
            return -1;
        }
    };
    //Balancing Methods
    this.balance = function() {

    };
    this.leftRotation = function() {

    };
    this.rightRotation = function() {

    };
    this.leftRightRotation = function() {

    };
    this.rightLeftRotation = function() {

    };

    //Support properties and methods
    this.maxChildHeight = function(node) {
        if (node != null) {
            return 1 + Math.max(this.maxChildHeight(node.left), this.maxChildHeight(node.right));
        }
        return 0;
    };
    this.leftHeight = this.maxChildHeight(left);
    this.rightHeight = this.maxChildHeight(right);
    this.treeState = function() {
        if (this.balanceFactor > 1) {
            return "rightHeavy";
        }
        else if (this.balanceFactor < -1) {
            return "leftHeavy";
        }
        else {
            return "balanced";
        }
    }; 
    this.balanceFactor = this.rightHeight - this.leftHeight;


    
}


function AVLTree() {
    var head = null;
    var count = 0;

    this.add = function(value) {
        count++;
        return this;
    };

    this.remove = function(value) {
        count--;
    };

    this.contains = function(value) {
        return false;
    };

    this.clear = function() {

    };

    this.preOrderTraversal = function() {

    };

    this.postOrderTraversal = function() {

    };

    this.inOrderTraversal = function() {

    };

    this.getCount = function() {
        return count;
    }
}

var tree = new AVLTree();

// function Hello() {
//     this.say = function(str) {
//         //console.log(str);
//         return str;
//     };
//     this.yell = this.say("12345");
// }
// var hello = new Hello();
// console.log(hello.yell);