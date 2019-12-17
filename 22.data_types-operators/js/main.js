 // 1.  Запросить у пользователя его возраст и определить, кем он является:
 //ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// const age = prompt('Enter your age, please');
// if (age < 12) {
//     alert('child');
// }
// else if (age < 18){
//     alert('teen');
// }
// else if (age < 60){
//     alert('adult');
// }
// else (age > 60) 
//     alert('pensioner');

// 2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише
//  (1–!, 2–@, 3–# и т. д).

// const number = +prompt("Enter number")
// switch(number){
//     case 1:
//         alert('!')
//     break;
//     case 2:
//         alert('@')
//     break;
//     case 3:
//         alert('#')
//     break;
//     case 4:
//         alert('$')
//     break;
//     case 5:
//         alert('%')
//     break;
//     case 6:
//         alert('^')
//     break;
//     case 7:
//         alert('&')
//     break;
//     case 8:
//         alert('*')
//     break;
//     case 9:
//         alert('(')
//     break;
//     case 0:
//         alert(')')
//     break;
// }

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// const digit1 =  prompt("Enter first digit of three digit number ");
// const digit2 =  prompt("Enter second digit of three digit number");
// const digit3 =  prompt("Enter third digit of tree digit number ");

// if (digit1 == digit2 ){
//     alert('first digit is the same as second');
// }
// else if (digit1 == digit3){
//     alert('first digit is the same as third');
// }
// else if (digit2 == digit3){
//     alert('second digit is the same as third');
// }
// else if (digit1 == digit2 == digit3){
//     alert('all digits are the same');
// }
//  else {
//      alert('no same digit');
//  }

//  Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// const year = prompt('enter any year')

// if (year % 4 == 0 || year % 400 == 0 ){
//     alert(`${year} is a leap year`);
// }
// else{
//     alert(`${year} is not a leap year`);
// }

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


// let str1 = prompt('Enter 5 sign number');

// str2 = str1.split("").reverse().join("");

// if (str1 == str2){
//     alert('Your number is poligram a Polindram');
// }else{
//     alert('Your numbers in NOT a Poligram ')
// }


// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую  сумму.

// let usd = +prompt('Enter amount of USD to exchange');
// let currencyCheck = prompt("Write your currency: EUR, UAH or AZN");
// let result
// if (currencyCheck == 'EUR' || currencyCheck == 'eur' || currencyCheck == 'Eur'){
//      result = usd * 0.9;
    
// }else if (currencyCheck == 'UAH' || currencyCheck == 'uah' || currencyCheck == 'Uah') {
//     result = usd * 23;
// }else if (currencyCheck == 'AZN' || currencyCheck == 'azn' || currencyCheck == 'Azn'){
//     result = usd * 1.7;
// }else {
//     alert('You wrote wront currency');
// }
//  alert(result);

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, 
// от 500 и выше – 7%. 

// let sum = +prompt('Enter purchase amount, please');
// let finalSum
//  if (sum >= 200 && sum < 300){
//     finalSum = (sum - (sum * 0.03));
//  }else if (sum >= 300 && sum < 500){
//      finalSum = (sum - (sum * 0.05))
//  }else if (sum >= 500){
//      finalSum = (sum - (sum * 0.07))
//  }else{
//      alert('Something went wrong')
//  }
// alert(`Final price with discount is ${finalSum}`);

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// const circumference = +prompt('Enter circumference');
// const squarePerimeter = +prompt('Enter square perimeter');
// let circleRadius = (circumference / (3.14 * 2));
// let squareSideLenght = (squarePerimeter / 4);
//  if (circleRadius <= squareSideLenght){
//      alert('The circle fits inside the square ');

//  }else if (circleRadius > squareSideLenght){
//      alert('The circle doesn\'t fit inside the square ')
//  };

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.
// alert('Thist test consists of 3 questions, each has tree answer options. You will get 2 points for right answer')
// let question1 = +prompt('How fast can you drive in city? (Enter number with right answer) \n 1) 50km/h. \n 2) 60km/h \n 3) 70km/h ');
// if (question1 == 1) {
//     question1 = 2;
// }else {
//     question1 = 0;
// }
// let question2 = +prompt('Do you need ensurance to drive a car? (Enter number with right answer) \n 1) Yes \n 2) No \n 3) Maybe ');
// if (question2 == 1) {
//     question2 = 2;
// }else {
//     question2 = 0;
// }
// let question3 = +prompt('At what age can you get driver\'s license ? (Enter number with right answer) \n 1) 16 \n 2) 17 \n 3) 18 ');
// if (question3 == 3) {
//     question3 = 2;
// }else {
//     question3 = 0;
// }

// let result = question1 + question2 + question3;

// alert(result);





// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, 
// а также високосный год

// let year = +prompt('Enter year');
// let month = +prompt('Enter month number');
// let day = +prompt('Enter day') + 1;

//  if (day > 32 || day <= 0 ){
//     alert('You Entered wrong day number')
// }else if (month > 12 || month <= 0){
//     alert('You Entered wrong month')
// } 
// else if (month == 1 && day == 32 ){
//     month = 2;
//     day = 1;
// }else if (year % 400 == 0 || year % 4 == 0 || year % 100 != 0 && month == 2 && day == 29){
//     day = 29;
// }else if (month == 2 && day == 29){
//     month = 3;
//     day = 1;
// }else if (month == 3 && day == 32){
//     month = 4;
//     day = 1;
// }else if (month == 4 && day == 31 ){
//     month = 5;
//     day = 1;

// }else if (month == 5 && day == 32){
//     month = 6;
//     day = 1;
// }else if (month == 6 && day == 31){
//     month = 7;
//     day = 1
// }else if (month == 7 && day == 32){
//     month = 8;
//     day = 1;
// }else if (month == 8 && day == 32){
//     month = 9;
//     day = 1;
// }else if (month == 9 && day == 31){
//     month = 10;
//     day = 1;
// }else if (month == 10 && day == 32){
//     month = 11;
//     day = 1;
// }else if (month == 11 && day == 31){
//     month == 12;
//     day = 2;
// }else if (month == 12 && day == 32){
//     year += 1;
//     month = 1;
//     day = 1;
// }





// alert(` ${day}.${month}.${year} `);