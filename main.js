
function greet() {
    console.log('Привет');
}

greet("Ruslan");
greet("Samir");

function calculateSum( a , b ){
    console.log( 5 + 3 );
    
}
console.log(calculateSum(5, 3));

function calculateSum( a , b ){
    console.log( 10 + 20 );
    
}
console.log(calculateSum(10, 20));


let age = prompt("Введите свой возраст");
console.log(checkAge(age));

function checkAge(age) {
    if (age < 18) {
        return "Доступ запрещён";
    } else {
        return "Доступ разрешён";
    }
}

function checkNumber(num) {
    if (num % 2 === 0) {
        return "Чётное число";
    } else {
        return "Нечётное число";
    }
}

console.log(checkNumber(8));
console.log(checkNumber(5));

