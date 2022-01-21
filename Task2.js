function sum() {
    var result = 0;
    for(var i =0; i< arguments.length; i++){
      if(typeof arguments[i]==='number'){
        result += arguments[i];
      }
      else{
        throw new Error ('Error: parameter type is not a Number');
    }
    }
    console.log('Значение = '+result);
    }
    sum(1,2,7);
    sum(1,2,'s',4);