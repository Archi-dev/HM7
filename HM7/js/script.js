
let a = Number(prompt('Введите число a'));
//1.
a == 0 ? alert('Верно') : alert('Неверно');
//2.
a > 0 ? alert('Верно') : alert('Неверно');
//3.
a < 0 ? alert('Верно') : alert('Неверно');
//4.
a >= 0 ? alert('Верно') : alert('Неверно');
//5.
a <= 0 ? alert('Верно') : alert('Неверно');
//6.
a != 0 ? alert('Верно') : alert('Неверно');
//7.
a === 'test' ? alert('Верно') : alert('Неверно');
//8.
a === 1 ? alert('Верно') : alert('Неверно');
//9.
(a > 0 && a < 5) ? alert('Верно') : alert('Неверно');




//10.
a = +prompt('Введите число a');
let b = +prompt('Введите число b');
switch (a) {
    case 0:
     case 2:    
       
    alert(a += 7 );
    break;

    default:
         a /= 10;
    alert( a );
}
//11.

if (a <= 1 && b >= 3) {
    alert(a + b);
} else {
    alert(a - b);
}
//12.
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    alert('Верно');
} else {
    alert("Неверно");
}

//13.


let num = +prompt('Введите значение num');
let result;
    switch (num) {
        case 1:
            result = 'Зима';
            break;
        case 2:
             result = 'Весна';
            break;
         case 3:
             result = 'Осень';
            break;
         case 4:
             result = 'Лето';
            break;
        default:
    alert( 'Неверная значение num' );
}
alert(result);