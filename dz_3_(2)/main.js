/// 1

function num(a , b) {
   if (a > b) {
      console.log(b)
   } else if (b > a) {
      console.log(a)
   } else {
      alert('числа равны!')
   }
}
num(35,34)

/// 2


function sum(a) {
   a = prompt()
   console.log(a.length)
}
sum()


/// 3
function calc(num1 ,  num2 , math) {
   num1 = prompt('введите первое число!')
   math = prompt('введите знак вычисления!')
   num2 = Number(prompt('введите второе число!'))
   if (math === '*') {
      console.log(num1 * num2)
   } else if (math === '-') {
      console.log(num1 - num2)
   } else if (math === '+') {
      console.log(num1 + num2)
   } else if (math === '/' && num2 === 0 ) {
      alert('на ноль делить нельзя')
   } else {
      console.log(num1 / num2)
   }
}
calc()

