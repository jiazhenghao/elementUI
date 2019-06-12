var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    const result = new ListNode(0);
    let current = result;
    let carry = 0;

    while(l1 || l2 || carry) {
        let val1 = (l1 && l1.val) || 0;
        let val2 = (l2 && l2.val) || 0;
        let sum = val1 + val2 + carry;
        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);
        if (l1) 
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    return result.next;
};