function sortedFrequency(arr, num) {
    function findFirst() {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (left < arr.length && arr[left] === num) return left;
        return -1;
    }

    function findLast() {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (right >= 0 && arr[right] === num) return right;
        return -1;
    }

    let first = findFirst();
    let last = findLast();

    if (first === -1 || last === -1) return -1;
    return last - first + 1;
}

module.exports = sortedFrequency