// 2529. Maximum Count of Positive Integer and Negative Integer

const array = [-2,-1,-1,0,0,1,2,3]
let negativeNumbers = 0;
let positiveNumbers = 0;

for (let i = 0;i < array.length; i+=1 ) {
    if( array[i] < 0) {
        negativeNumbers += 1;
    }
}
console.log(`There are ${negativeNumbers} negative integers`)

for (let i = 0;i < array.length; i+=1 ) {
  if( array[i] > 0) {
      positiveNumbers += 1;
  }
}
console.log(`There are ${negativeNumbers} positive integers`)
console.log(`Max count: ${Math.max(negativeNumbers, positiveNumbers)}`);    