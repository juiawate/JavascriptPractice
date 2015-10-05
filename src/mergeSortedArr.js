
function mergeSortedArrays(arr1, arr2) {
    var i = 0, j = 0;

    while(j < arr1.length) {
        if(arr2[i] < arr1[j]) {
            arr1.splice(j,0,arr2[i]);
            i++;
        }
        j++;
    }
    while(i < arr2.length) {
        arr1.splice(j,0,arr2[i]);
        i++;
        j++;
    }
    return arr1;
}