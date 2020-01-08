//implementálunk egy for loop-ot amelyik az array végérol indul 
  //implementálunk még egy for loopot, amelyik az array elejétol indul,és addig megy, amíg kissebb nem lesz az elozo segédváltozónál -1
    //ha a arr második segédváltozója kissebb mint a arr 2. segédváltozoja +1, akkor kicseréljuk oket
bubbleSort([8,1,2,3,4,5,6,7]);












































function bubbleSort(arr){
  //implementálunk egy for loop-ot amelyik az array végérol indul 
  for(var i = arr.length; i > 0; i--){
    //implementálunk még egy for loopot, amelyik az array elejétol indul,és addig megy, amíg kissebb nem lesz az elozo segédváltozónál -1
    for(var j = 0; j < i - 1; j++){
      //ha a arr második segédváltozója kissebb mint a arr 2. segédváltozoja +1, akkor kicseréljuk oket
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);