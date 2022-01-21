var i = 0;
function consoleRec (arr) {     
    if (arr.length <= 0) 
    {        
         throw Error ("parameter can't be an empty")     
    }     
    else if ( !Array.isArray(arr)) 
    {         
        throw ("parameter type should be an array")     
    }     
    else 
    {         
        console.log(arr[i]);
        i++;
        if (i < arr.length) consoleRec(arr);
    }  
}  
consoleRec([1,2,3,4,5]);