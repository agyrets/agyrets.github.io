//   1.

// const userName = prompt ('Enter your name, please' )
// console.log( 'Welcome' + ' ' + userName + '!' );
// alert('Welcome' + ' ' + userName + '!')


//   2.

// const currentYear = 2019;
// const bornYear = prompt ('Enter year of born');
// const userAge = (currentYear - bornYear);
// console.log(userAge);
// if (userAge > 18){
//     alert('Hello')
// }
// else{
//     alert('Get lost')
// }


//    3.

// const squareSide = prompt('Enter a square side length!');
// const squarePerimeter = (squareSide * 4);
// console.log(squarePerimeter);
// alert('Your square perimeter is' + " " + squarePerimeter + " " + 'meters ' );

//4

// const circleRadius = prompt ('Enter circle radius, please!');
// const pi = 3.14;
// const circleArea = circleRadius*circleRadius*pi;
// console.log(circleArea);
// alert('Your circle area is' + " " + circleArea + " " + 'square meters ' );

//     5.

// const distance = prompt ('What is the distance between the cities?');
// const timeSpent = prompt ('How long this trip should take?');
// const speed = (distance / timeSpent);
// console.log(speed + ' ' + 'km/hour');
// alert('Your avarage speed should be' + " " + speed + " " + 'km/hour ' );

//      6.

// const exchRate = 0.91;
// const amountUSD  = prompt('Amount of USD you would like to exchnge');
// const amountEUR = (exchRate * amountUSD);
// console.log(amountEUR + 'Euro');
// alert(amountEUR + ' ' + 'Euro' );


////    6.1 Choose between Dollars and Euros  
 
// let currencyType = prompt('Enter currency type to sell Eur or Dol')

// if  (currencyType === 'Dol') {
//      const exchRateDoll = 0.91;
//      const amountUSD  = prompt('Amount of USD you would like to exchnge');
//      const amountEUR = (exchRateDoll * amountUSD);
//      console.log(amountEUR + 'Euro');
//      alert(amountEUR + ' ' + 'Euro' );
// }
//  if (currencyType === 'Eur') {
//      const exchRateEuro =  1.10
//      const amountEuro  = prompt('Amount of Euro you would like to exchnge');
//      const amountDol = (exchRateEuro * amountEuro);
//      console.log(amountDol + 'Dollars');
//      alert(amountDol + ' ' + 'Dollars' );

//  }
//  else {
//     console.log('Wrong curreny');
//     alert('Wrong curreny, try again' );
//  }



//      7.

// let ssdCapacity = prompt ('Enter capacity of your flash drive');
// const fileSize = 820;
// let amountCopies = Math.trunc(ssdCapacity * 1000 / fileSize );
// console.log(amountCopies);
// alert('You can save' + ' ' + amountCopies + ' ' + 'copies of your file'  )



//         8.

// let walletSumm = prompt(' Enter amount of cash in your wallet');
// let chocPrice = prompt('Enter price of one chocolate');
// let chocAmount = Math.trunc(walletSumm / chocPrice );
// let calc  =  walletSumm / chocPrice - chocAmount;
// let change = calc * chocPrice;

// console.log('You can buy' + ' ' +  chocAmount + ' ' + 'chocolates, and your change is'+ ' ' + change );

// alert('You can buy' + ' ' +  chocAmount + ' ' + 'chocolates, and your change is'+ ' ' + change );
 
//      9.

// let numb = prompt('Enter 3 letter number');
// let rez = numb[numb.length -1];
// for(let i = numb.length - 2; i >= 0; i--)
//     rez += numb[i];

// alert(rez);

//          10. 

// let deposit = prompt('Enter amount of your deposit');
// let amountMonth = prompt("Enter anount of months");
// const persAnnual = 0.05;
// let persMonth = persAnnual / 12;
// let fee = deposit * amountMonth * persMonth
// alert(fee)