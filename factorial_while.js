function factorial(n){

    var i = 1;
    var factorial = 1;
    while (i <= n){
        factorial = factorial * i;
        i++
  
    }  return factorial;
}
var res = factorial(10); // Input the value , you want factorial.
console.log(res);