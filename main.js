//Display odd numbers
for (var i = 1 ; i <= 20 ; i++){
    if (i % 2 !== 0){
    console.log(i);
    }
}

//Decreasing multiples of 3
for (var i = 0 ; i <=100 ; i++){
    if (i % 3 !== 0){
        console.log(i);
    }
}

//Print the given sequence
var i = -3.5;
while (i < 4) {
    console.log(i);
    i = i + 1.5;
}

//Sigma
var count = 0;
for (i = 0 ; i <= 100 ; i++){
    count = count + i;
}
console.log(count);

//Factorial
var product = 1;
for (i = 1 ; i <=12 ; i++){
    product = product * i;
}
console.log(product);