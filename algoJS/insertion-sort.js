  //definiálunk egy currentVal-t
  //for loop, 1-tol indulunk,noveljuk i-t
    //az i értéke egyenlo currentVal-lal
    //for loop, j az eggyel kissebb mint az i, amíg j nagyobb nullánál
    //-> és az értéke nagyobb mint curentval,csokkentjuk j-t
      //addig j értéke egyenlo lesz az utánakovetkezo értékkel
    //loop vége, j+1 értéke lesz a currentVal
  //visszakuldjuk az array-t  
insertionSort([1,2,9,76,4])




function insertionSort(arr){
	//definiálunk egy currentVal-t
	var currentVal;
		//for loop, 1-tol indulunk,noveljuk i-t
    for(var i = 1; i < arr.length; i++){
    		//az i értéke egyenlo currentVal-lal
        currentVal = arr[i];
        //for loop, j az eggyel kissebb mint az i, amíg j nagyobb nullánál
        //és az értéke nagyobb mint curentval,csokkentjuk j-t
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        		//addig j értéke egyenlo lesz az utánakovetkezo értékkel
            arr[j+1] = arr[j]
        }
        //loop vége, j+1 értéke lesz a currentVal
        arr[j+1] = currentVal;
    }
    //visszakuldjuk az array-t  
    return arr;
}

insertionSort([1,2,9,76,4])