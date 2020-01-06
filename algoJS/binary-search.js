//implementalunk egy start valtozot
// implementalunk egy end valtozot
// kiszamoljuk a kozepso erteket
//amig az arr middle erteke nem egyenlo az elemmel es a start kisebb vagy egyenlo az endnel
    //ha a elem kisebb mint arr middle erteke
        // akkor a middle minusz egy lesz az uj end
        //maskulonben
        //a middle plusz egy lesz az uj start
    //az eldontes vegevel pedig ujra kiszamoljuk a middle-t
// ha az arr middle-jenek az erteke egyezik az elemmel,
        //akkor visszakuldjuk a middlet
//maskulonben -1/et kuldunk vissza
binarySearch([2,5,6,9,13,15,28,30], 103)



































// Original Solution
function binarySearch(arr, elem) {
    //implementalunk egy start valtozot
    var start = 0;
    //implementalunk egy end valtozot
    var end = arr.length - 1;
    //kiszamoljuk a kozepso erteket
    var middle = Math.floor((start + end) / 2);
    //amig az arr middle erteke nem egyenlo az elemmel es a start kisebb vagy egyenlo az endnel
    while(arr[middle] !== elem && start <= end) {
        //ha a elem kisebb mint arr middle erteke
        if(elem < arr[middle]){
            //akkor a middle minusz egy lesz az uj end
            end = middle - 1;
        //maskulonben    
        } else {
            //a middle plusz egy lesz az uj start
            start = middle + 1;
        }
        //az eldontes vegevel pedig ujra kiszamoljuk a middle-t
        middle = Math.floor((start + end) / 2);
    }
    // ha az arr middle-jenek az erteke egyezik az elemmel,
    if(arr[middle] === elem){
        //akkor visszakuldjuk a middlet
        return middle;
    }
    //maskulonben -1-et kuldunk vissza
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
