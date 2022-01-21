function isPositive(i)
{
    if(typeof i !== 'number')
{
    throw new Error("parameter type is not a Number")
}
else if (i > 0)
{
    return true;
}   
else if (i <= 0)
return false; 
}
var arr = [1, 2, -4, 3, -9, -1, 7];
var arrNew = [];
for (var i = 0; i < arr.length; i++){
         if (isPositive(arr[i])) 
         {
             arrNew.push(arr[i]);
        } 
    } 
    isPositive(-3)
    isPositive('s')
    console.log(arrNew);