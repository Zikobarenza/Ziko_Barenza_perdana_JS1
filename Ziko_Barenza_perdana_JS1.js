// if,else,nested if
let X = 60;
if (X >= 80) {
    console.log("sangat baik");
}
else if (X >=70) {
    console.log("baik");
}
else { 
    console.log ("kurang baik");
}

//for statement
for (let k = 1; k <= 5; k++) {
    console.log("hari ke" + k);
}

//switch case
let (pakaian);
switch (pakaian) {
    case "kaos":
        console.log("pakaian kaos");
        break;
    case "kemeja":
        console.log("pakaian kemeja");
        break;
    case "switer":
        console.log("pakaian switer");
        break;
    default:
        console.log("pakaian tidak redy");
}

// while
let k = 15;
while (k > 0) {
    console.log("pakaian ready" +k);
    k--;
}

//do while
let jumlah = 1;
do{
    console.log(jumlah);
    jumlah++;
}
while (jumlah < 15)

//function
function kurangkanenam(jumlah){
    return jumlah - 6;
}
let hasil = kurangkanenam(9);
console.log("hasil pengurangan:" - hasil);