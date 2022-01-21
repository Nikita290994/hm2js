function f(a){
    if(typeof a=='number'){
     console.log('Число ' + a + ' в кубе = ' + Math.pow(a,3))
    }
    else{
        throw new Error ('Error: parameter type is not a Number');
    }
 }
 f(4);