function evenOdd1(num1, num2){
    for(i =num1; i <= num2; i++){
        if (i % 2 == 0){
            console.log( i + "is even");
        }else if (i % 2 == 1){
            console.log(i  + "is odd")
        }
    }
};

function evenOdd(num1, num2){
    for(i =num1; i <= num2; i++){
        if (i % 2 == 0){
            console.log( i + "is even");
        }else if (i % 2 == 1){
            console.log(i  + "is odd")
        }
    }
};

evenOdd(2, 3);

const evenOdd2 = function (num1, num2){
    for(i =num1; i <= num2; i++){
        if (i % 2 == 0){
            console.log( i + "is even");
        }else if (i % 2 == 1){
            console.log(i  + "is odd")
        }
    }
};

evenOdd2(4, 5);

const evenOdd3 = (num1, num2) =>{
    for(i =num1; i <= num2; i++){
        if (i % 2 == 0){
            console.log( i + "is even");
        }else if (i % 2 == 1){
            console.log(i  + "is odd")
        }
    }
};

evenOdd3(6, 7);