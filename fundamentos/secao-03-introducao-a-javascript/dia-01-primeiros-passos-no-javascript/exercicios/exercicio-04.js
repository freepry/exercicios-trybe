let fralda1 = 50;
let fralda2 = 40;
let fralda3 = 70;

if (fralda1 <= 0 || fralda2 <= 0 || fralda3 <= 0) {
  console.log("Erro: os ângulos devem ter valores positivos.");
} else {
  let sum = fralda1 + fralda2 + fralda3;
  if (sum === 180) {
    console.log("True: os ângulos representam um triângulo válido.");
  } else {
    console.log("False: os ângulos não representam um triângulo válido.");
  }
}