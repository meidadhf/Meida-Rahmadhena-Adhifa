var panggilUntukInput = require('readline-sync');
var panjang = panggilUntukInput.questionInt("Masukkan Panjang Persegi Panjang: ");
var lebar = panggilUntukInput.questionInt("Masukkan Lebar Persegi Panjang: ");
console.log("Rumus Luas Persegi Panjang Adalah P x L. Maka, Luas Persegi Panjang Tersebut Adalah: ");
console.log(panjang*lebar);
