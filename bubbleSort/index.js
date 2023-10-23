let numbers = [2, 7, 8, 2, 15, 1, 3, 11, 7, 6, 3, 15];
 
const bubbleSort = (arr) => {
    let swapped;

    do {
        swapped = false;
        for (let i=0; i<arr.length-1; i++) {
            if (arr[i] > arr [i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }  
      } while(swapped);
      return arr;
}
console.log(bubbleSort(numbers));