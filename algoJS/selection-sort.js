//indítunk egy for loopot
    //a kurrens i-t definiáljuk egy változóba
    //indítunk még egy for loopot, j= i+1,hogy az adott i utáni változókat vizsgálja csak
        //ha az array j értéke kisebb mint az addigi array lowest-jének az értéke, akkor a j lesz a lowest
    //kilépunk a loopbol
    //ha az i nem egyenlo a lowest-tel, akkor megcseréljuk oket
        //a temp változó lesz az array i-je
         // az array i-je lesz az array lowest-je
         //az array lowestje lesz a temp
 // és ha a második loop is végetér, akkor visszakuldjuk az arrayt 
selectionSort([0,2,34,22,10,19,17]);





































// LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr){
    //indítunk egy for loopot
    for(var i = 0; i < arr.length; i++){
        //a kurrens i-t definiáljuk egy változóba
        var lowest = i;
        //indítunk még egy for loopot, j= i+1,hogy az adott i utáni változókat vizsgálja csak
        for(var j = i+1; j < arr.length; j++){
            //ha az array j értéke kisebb mint az addigi array lowest-jének az értéke,
            if(arr[j] < arr[lowest]){
                //akkor a j lesz a lowest
                lowest = j;
            }
        //kilépunk a második loopbol    
        }
        //ha az i nem egyenlo a lowest-tel, akkor megcseréljuk oket
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
     // és ha az elso loop is végetér, akkor visszakuldjuk az arrayt
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
