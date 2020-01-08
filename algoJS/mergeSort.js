//definiálunk egy funkciót, két array mint paraméter
    // implementálunk egy results nevu ures array-t
    //implementálunk egy i-t, értéke 0
    //implementálunk egy j-t, értéke 0
    //while loop: amíg az i kisebb mint arr1 hossza és a j kisebb mint arr2
        //ha az arr2 j-je nagyobb mint az i
            //akkor a resultsba megy az arr1 i-je
            //és noveljuk az i-t
        //máskulonben  
            //resultba megy az arr2 j-je
            //noveljuk a j-t
    //második while: amíg az i kisseb mint az arr1 hossza
        //akkor a resultsba megy az arr1 i-je
        //és noveljuk az i-t
    //harmadik while: amíg az j kisseb mint az arr2 hossza
        //resultba megy az arr2 j-je
        //noveljuk a j-t
    //returnoljuk a results arr-t    

//rekurzív merge sort, egy arr-t fogad
//az egész lényege, hogy elkezdi lebontani az arrayt bal felol, addig amíg az arr.length egyenlo eggyel
//aztán mergeli ezeket az egytagú arrayeket
    //ha az arr mérete kisebb vagy egyenlo 1-nél, akkor visszakuldjuk az arr-t
    // a mid az az arr hossza osztva kettovel, kerekítve lefelé
    //left változó: ráhívjuk a mergesortot, az arr-t slice-oljuk a nullátol a kozepéig
    //right változó: ráhívjuk a mergesortot, az arr-t slice-oljuk a kozepétol a végéig  
    //returnoljuk a merge funkciót a leftel és a right-tal mint paraméterek
mergeSort([10,24,76,73])




















//definiálunk egy funkciót, két array mint paraméter
function merge(arr1, arr2){
    //implementálunk egy results nevu ures array-t
    let results = [];
    //implementálunk egy i-t, értéke 0
    let i = 0;
    //implementálunk egy j-t, értéke 0
    let j = 0;
    //while loop: amíg az i kisebb mint arr1 hossza és a j kisebb mint arr2
    while(i < arr1.length && j < arr2.length){
        //ha az arr2 j-je nagyobb mint az i
        if(arr2[j] > arr1[i]){
            //akkor a resultsba megy az arr1 i-je
            results.push(arr1[i]);
            //és noveljuk az i-t
            i++;
        //máskulonben    
        } else {
            //resultba megy az arr2 j-je
            results.push(arr2[j])
            //noveljuk a j-t
            j++;
        }
    }
    //második while: amíg az i kisseb mint az arr1 hossza
    while(i < arr1.length) {
        //akkor a resultsba megy az arr1 i-je
        results.push(arr1[i])
        //és noveljuk az i-t
        i++;
    }
    //harmadik while: amíg az j kisseb mint az arr2 hossza
    while(j < arr2.length) {
        //resultba megy az arr2 j-je
        results.push(arr2[j])
        //noveljuk a j-t
        j++;
    }
    //returnoljuk a results arr-t
    return results;
}

// Recrusive Merge Sort
//rekurzív merge sort, egy arr-t fogad
//az egész lényege, hogy elkezdi lebontani az arrayt bal felol, addig amíg az arr.length egyenlo eggyel
//aztán mergeli ezeket az egytagú arrayeket
function mergeSort(arr){
    //ha az arr mérete kisebb vagy egyenlo 1-nél, akkor visszakuldjuk az arr-t
    if(arr.length <= 1) return arr;
    // a mid az az arr hossza osztva kettovel, kerekítve lefelé
    let mid = Math.floor(arr.length/2);
    //left változó: ráhívjuk a mergesortot, az arr-t slice-oljuk a nullátol a kozepéig
    let left = mergeSort(arr.slice(0,mid));
    //right változó: ráhívjuk a mergesortot, az arr-t slice-oljuk a kozepétol a végéig 
    let right = mergeSort(arr.slice(mid));
    //returnoljuk a merge funkciót a leftel és a right-tal mint paraméterek
    return merge(left, right);
}

mergeSort([10,24,76,73])
