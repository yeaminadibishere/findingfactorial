function factorial(n){
   if (n == 0){
       return 1;
   } else {
       return n * factorial(n-1);
   }
}
var res = factorial(10);
console.log(res);