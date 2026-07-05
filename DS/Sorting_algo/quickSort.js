const num = [5,7,2,4,8,9,1]


/*

How Quick Sort Works

1-Choose a pivot element from the array.
2-Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3-Recursively apply the above steps to the sub-arrays.
4-Combine the sub-arrays and the pivot to get the sorted array.

 */
function quickSort(arr) {
    //base case 
    if(arr.length === 1 || !arr.length )
    {
        return arr
    }    

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i])
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}

console.log(quickSort(num));