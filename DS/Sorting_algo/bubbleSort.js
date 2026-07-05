//swap adjacent elements and keep swaping 
const num = [5,7,2,4,8,9,1]


/*

Bubble Sort → Bubble the largest element to the end.

Repeat for every pass:

1. Start from the beginning of the array.
2. Compare two adjacent elements.
3. If the left element is greater than the right element, swap them.
4. Continue until the end of the unsorted portion.
5. After each pass, the largest element is in its correct position.
6. Reduce the unsorted portion by one as the largest element is bubbled up to the last.
7. If no swaps occur during a pass, stop because the array is already sorted.
*/
const bubbleSort =(arr)=>{

    let index =0
    while(index<arr.length)
    {
        
        for(let i=0;i<arr.length-1-index;i++)
        {
            if(arr[i]>arr[i+1])
            {
                //swap
                const temp = arr[i]
                arr[i] = arr[i+1];
                arr[i+1]= temp
            }    
        }

        index++
    }

   return arr;

}

console.log(bubbleSort(num))