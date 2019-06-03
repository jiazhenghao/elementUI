Tree overview

Binary Tree
    Binary Search Tree

Add and Remove

Searching

Traversals
    Pre-order
    In-order
    Post-order


Binary Tree:
Hierarchy of Data
A Root Node
0-2 Children
Left Child
Right Child
Each Child is itself a tree
    left child
    right child

Binary Search Tree:
Sorted Hierarchy of Data
A Root Node
Left Child 
    less than parent
Right Child
    greater than parent
All children follow the same rules

                        15
                10              19
            7       11      14      20
          6   8   9    12  13  15  18   22

Adding Data
Recursive Algorithm
Case1: Empty Tree
    becomes the root node
Case2: Samller Value
    Recursively add to left
Case3: Larger Value
    Recursively add to right
Equal Values?
    Treat AS larger Value


Searching Data:
Find(Node current, Data value) {
    if(current == null) {
        return null;
    }
    if(current.value == value) {
        return current;
    }
    if(value < curret.value) {
        return Find(current.left, value);
    }
    else {
        return Find(current.right, value);
    }
}

Remove: (Most Complicated Algorithm)

1.Find the node to be deleted
 if the node dose not exist, exit

2. Leaf(terminal) node
 remove parent's pointer to deleted node

3. non-leaf node
 find the child to replace the deleted node
 three scenarios

Case1: Removed node has no right child.
    Left child replaces the removed node

    Remove(8)
    Find Node to remove
    has no righ child
    promote left child

        4
    2       8
   1  3    6
          5  7

Case2: Removed right child has no left
    Right child replaces removed
    Remove(6)
    Find Node to remove
    Node right has no left
    Promote right child

        4
    2       6
   1 3    5   7
                8

Case3: Removed right child has left child
    Right child's left-most child replaces the removed

    Remove(6)
    Find node to remove
    Node right has left
    Find right's left-most child
    Promote left-most child

        4
    2       6
   1 3     5  8
             7


Tree Traversals

Enumerate nodes in a well-defined order
Basic algorithm
    Process node
    Visit left
    Visit right
What varies is the order
Three common orders are:
    Pre-order
    In-order
    Post-order

