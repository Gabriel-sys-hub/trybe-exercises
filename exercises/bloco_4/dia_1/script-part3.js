let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId); // Number
console.log(typeof isEnrolled); // Boolean
console.log(typeof patientInfo); // Object
console.log(typeof patientEmail); // String

patientId = '50';
console.log(typeof patientId);  // String


let base = 5;
let altura = 8;
let area = base * altura;
console.log(area);

let perimetro = (base + altura) * 2;
 // Duas opções de calculo;
let perimetro2 = (base * 2 ) + (altura * 2);

console.log(perimetro);