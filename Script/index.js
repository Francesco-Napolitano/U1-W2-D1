console.log('Hello World')
console.log(10 + 5)

let myFantasticDog

myFantasticDog = 'Pluto'

let age = 25

console.log('Age prima', age)
// Ora dice di avere age 25

age = 50
// Ora posso cambiare il valore se voglio perché è una variabile

console.log('Age dopo', age)
// Ora dice di avere age 50

let booleanExample = false //un valore che può essere sia vero che falso

let myName = 'Francesco'
let myRegion = 'Piemonte'
let myAge = 19

let person = myName + myRegion + myAge
let betterPerson =
  'Io mi chiamo' +
  ' ' +
  myName +
  ', vivo in' +
  ' ' +
  myRegion +
  ', ho ' +
  myAge +
  ' anni.'

console.log(betterPerson)
console.log(typeof myAge)

const boolean1 = 4 < 7
const boolean2 = 4 < 1
const boolean3 = !(6 < 9)
const boolean4 = 'stefano' === 'STEFANO'
console.log('boolean1:', boolean1)
console.log('boolean2:', boolean2)
console.log('boolean3:', boolean3)
console.log('boolean4:', boolean4)

const result1 = boolean1 && boolean2 //sarà false
