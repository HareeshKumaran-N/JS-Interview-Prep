const num = [5,7,2,4,8,9,1]

 


/*
Selection Sort → Select the smallest element.

Algorithm 

Repeat until the array is sorted:

1. Assume the current position is the smallest element.
2. Search the remaining array for a smaller element.
3. If found, remember its index.
4. Swap the smallest element with the current position.
5. And repeat the process with rest of the un-sorted index.

*/


function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted region
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSort(num))