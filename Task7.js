function getDivisors(num) {
	if(typeof num ==='number'){
var arr = [];
    if(num < 0)
    {
    num = num * -1;
    }
    for (var i = 1; i <= num; i++) {
    if (num % i == 0) 
        {
        arr.push(i);
        }
    }
    console.log(arr);
		}
		else{
			throw new Error ('Error: parameter type is not a Number');
		}
	}
getDivisors(12);