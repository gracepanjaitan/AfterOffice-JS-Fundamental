const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Penjumlahan(a, b) {
  return a + b;
}

function Pengurangan(a, b) {
  return a - b;
}

function Perkalian(a, b) {
  return a * b;
}

function Pembagian(a, b) {
  if (b == 0) {
    return "Undefined!";
  }

  return a / b;
}
console.log(`---------------------------------`);
console.log(`Pilih operasi yang diinginkan!`);
console.log(`a. Penjumlahan = 1`);
console.log(`b. Pengurangan = 2`);
console.log(`c. Perkalian = 3`);
console.log(`d. Pembagian = 4`);
console.log(`---------------------------------`);

rl.question("Operasi = ", (operasi) => {
  rl.question("Angka 1 = ", (angka1) => {
    rl.question("Angka 2 = ", (angka2) => {
      
      angka1 = parseInt(angka1);
      angka2 = parseInt(angka2);
      let total;
      switch (operasi) {
        case "1":
          total = Penjumlahan(angka1,angka2);
          break;
        case "2":
          total = Pengurangan(angka1,angka2);
          break;
        case "3":
          total = Perkalian(angka1,angka2);
          break;
        case "3":
          total = Pembagian(angka1, angka2);
          break;
        default:
          console.log(`Periksa lagi operasi yang diinput!`);
      }
      console.log(`Hasil = ${total}`);
      rl.close();
    });
  });
});
