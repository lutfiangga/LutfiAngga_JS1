// if else statement
let a=50

if (a>=70) {
    console.log('Kamu Lulus')
} else {
    console.log('Belajar Lagi')
}

// nested if statement
let x = 75

if (x > 85){
    console.log("Lulus")
} else if ( x < 65){
    console.log ("Tidak Lulus")
} else {
    console.log ("Tingkatkan di kesempatan yang ada") 
}

// switch case
const hari = "Kamis"
switch(hari){
    case 'Senin':
        console.log ('Semoga harimu bahagia')
        break;
    case 'Jumat':
        console.log ('Semangat, besok weekend')
        break;
    default:
        console.log ('Semoga harimu senin terus')
}

// for statement
let z = 'semoga harimu senin terus'

for (let i = 0 ; i <= 5 ; i++){
    console.log (`Selamat pagi, ${z}`);
    };

// while
let p = 0;
let text = '*';

while (p <= 5 ){
  console.log(text += '*')
  p++
    };

// do while
let pesan = 'senang'
let m = 'diterima'
let n = 0;

do{
    console.log(pesan)
    n++;
} while(n < 5 && m == 'diterima')

//function
function salam(){
    console.log(`Assalamu'alaikum wr. wb`);
    };
    salam();