function factorial(number){
    var factorial = 1;
    for(var i = 1; i<=number; i++){
        factorial = factorial * i
        console.log(factorial);
    } return factorial;
}


console.log(factorial(2));