// const showPromo = (name, number) => {
//   const firstText = document.querySelector('#text-initial');
//   const secondText = document.querySelector('#text-final');
  
//   try {
//     checkName(name);
//     checkNumber(parseInt(number));
    checkValidRange(number);
//     const productObject = checkPromo(number);

//     firstText.innerHTML = `Boas-vindas, ${name}!`;
//     secondText.innerHTML = `A promoção do dia é: 
//       ${productObject.product} no valor de R$ ${productObject.price}`;
//   } catch(err) {
//     secondText.innerHTML = err.message;
//   }
// }

// Quarta parte
const checkValidRange = (number) => {
  if (number < 1 || number > 10) {
    throw new Error('É necessário digitar um número entre 1 e 10');
  }
}

const validateAverage = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('Atenção! Os valores devem ser numéricos');
  }
}

const calculateAverage = (n1, n2, n3, n4) => {
  let sum = n1 + n2 + n3 + n4;
  let media = sum / 4;
  return media;
}
console.log(calculateAverage(9, 8, 5, 8))

const calculateAverage = (n1, n2, n3, n4) => {
  try {
    validateAverage(n1, n2, n3, n4);
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return media;
  } catch (error) {
    return error.message;
  }  
}
console.log(calculateAverage(5, 6, 7, '8'))