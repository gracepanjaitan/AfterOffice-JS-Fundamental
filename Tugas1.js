const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function kategoriUmur(umur) {
  if (umur >= 0 && umur <= 12) {
    return "Anak-anak";
  } else if (umur >= 13 && umur <= 17) {
    return "Remaja";
  } else if (umur >= 18 && umur <= 59) {
    return "Dewasa";
  } else {
    return "Lansia";
  }
}

let anak = 0,
  remaja = 0,
  dewasa = 0,
  lansia = 0;

rl.question("Jumlah data yang ingin kamu di cek: ", (jumlah) => {
  jumlah = parseInt(jumlah);
  let count = 0;

  function inputUsia() {
    if (count < jumlah) {
      rl.question(`Masukkan usia orang ke-${count + 1}: `, (umur) => {
        usia = parseInt(umur);
        const kategori = kategoriUmur(umur);

        switch (kategori) {
          case "Anak-anak":
            anak++;
            break;
          case "Remaja":
            remaja++;
            break;
          case "Dewasa":
            dewasa++;
            break;
          default:
            lansia++;
            break;
        }

        count++;
        inputUsia();
      });
    } else {
      console.log(`Anak-anak: ${anak}`);
      console.log(`Remaja   : ${remaja}`);
      console.log(`Dewasa   : ${dewasa}`);
      console.log(`Lansia   : ${lansia}`);
      rl.close();
    }
  }

  inputUsia();
});
