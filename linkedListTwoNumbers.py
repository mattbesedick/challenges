class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        l1_sum = []
        l2_sum = []

        while True:
            l1_sum.append(l1.val)
            l2_sum.append(l2.val)
            l1 = l1.next
            l2 = l2.next
            if not l1 or not l2:
                break
        l3_sum = str(int(''.join([str(x) for x in l1_sum[::-1]])) + int(''.join([str(x) for x in l2_sum[::-1]])))

        l3 = ListNode(l3_sum[len(l3_sum)-1])
        l4 = l3
        for i in range(len(l3_sum)-1, -1, -1):
            if i - 1 < 0:
                l3.next = None
            else:
                l3.next = ListNode(l3_sum[i-1])
            l3 = l3.next

        return l4