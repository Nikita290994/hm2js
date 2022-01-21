function f(a,b,c){
    var result;
    if(typeof a=='number' && typeof b=='number'&& typeof c=='number'){
        result = (a-b)/c;
     console.log(result);
    }
    else{
        throw new Error ('Error: parameter type is not a Number');
    }
 }
 f(9,3,2);