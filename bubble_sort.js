module.exports = function bubble_sort(n) {
    var sorted_array = [];
    var i, k;

    for (i = 0; i < n.length; i++) {
        if (i + 1 < n.length) {
            if (n[i] > n[i + 1]) {
                k = n[i + 1];
                n[i + 1] = n[i];
                n[i] = k;
            }
        }
        sorted_array.push(n[i]);
    }

    return sorted_array;
};
