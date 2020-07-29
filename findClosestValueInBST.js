function findClosestValueInBst(tree, target) {
    if (target > tree.value && tree.right) {
        let temp = findClosestValueInBst(tree.right, target)
        if (Math.abs(target - temp) < Math.abs(target - tree.value)) {
            tree.value = temp
        }
    } else if (target < tree.value && tree.left) {
        let temp = findClosestValueInBst(tree.left, target)
        if (Math.abs(target - temp) < Math.abs(target - tree.value)) {
            tree.value = temp
        }
    }
    return tree.value
}