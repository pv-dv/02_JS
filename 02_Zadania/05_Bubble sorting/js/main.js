function bubble(array){
    var swapsOccured;

    while (swapsOccured !== 0) {
        swapsOccured = 0;
        for(var i = 0; i < array.length; i++){
            var nextIndex = i + 1;
            if(array[i] > array[nextIndex]){
                
                swapsOccured += 1;
                var temp = array[i];
                array[i] = array[nextIndex];
                array[nextIndex] = temp;
            }
        }   
    }
}

var array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78,
34, 1e2, 45, 67, 98, 1];
console.log("Unsorted: " + array);

bubble(array);
console.log("Sorted: " + array);
