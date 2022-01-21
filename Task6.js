function isEven(number) {
	var x
    if(typeof number=='number'){
	 if (number % 2 == 0) {
		x = true;
	} 
    else {
		x = false;
	}
    console.log(x);
	return x;
}
else{
    throw new Error ('Error: parameter type is not a Number');
}
}
isEven(3);