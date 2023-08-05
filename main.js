//   Mantiqiy amallar (if, else)

// 1-MISOL : A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat
let a1 = -7;
 console.log(a1);
if(a1 > 0) {
    console.log('musbat');
}
else{
    console.log('manfiy');
}
// 2-MISOL : A butun son berilgan. Jumlani rostlikka tekshiring: A toq son
let a2=11;
console.log(a2);
if(a2 % 2 != 0) {
   console.log('toq');
}
 else{
    console.log('juft');
 }
// 3-MISOL : A butun son berilgan. Junlani rostlikka tekshiring: A juft son
let a3=16;
console.log(a3);
if(a3 % 2 == 0) {
   console.log('juft');
}
 else{
    console.log('toq');
 }
// 4-MISOL : Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0
let a4=3;
let b4=6;
if(a4 > 0 && b4 > 0){
    console.log(true);
}
else{
    console.log(false);
}
// 5-MISOL : 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring
let a5=31;
let b5=21;
let c5=11;
    if(a5>b5 && b5>c5){
        console.log(true);
    }
    else{
        console.log(false);
    }
// 6-MISOL : a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
let a6=42;
let b6=10;
let c6=2;
if(a6>b6 && b6>c6){
    console.log(true);
}
else{
    console.log(false);
}
// 7-MISOL : a, b sonlar berilgan sonlarni toq songa tekshiring.
let a7=3;
let b7=5;
if(a7 %2 != 0 && b7 %2 !=  0){
    console.log(true);
}
else{
    console.log(false);
}
// 8-MISOL : a,b,c,d sonlar berilgan barchasi musbat
let a8=3;
let b8=6;
let c8=3;
let d8=6;
if(a8 > 0 && b8 > 0 && c8 > 0 && d8 > 0){
    console.log(true);
}
else{
    console.log(false);
}
// 9-MISOL : a,b,c sonlar berilgan kamida ikkitasi musbat berilgan
let a9=3;
let b9=-6;
let c9=3;
if(a9>=0 && b9>=0 && c9>=0){
    console.log( 'sonlar ichida 3 ala son ham musbat');
}
else if(a9>=0 && b9>=0 && c9<0){
    console.log( 'sonlar ichida 1-chi va 2-chi son musbat');
}
else if(a9>=0 && b9<0 && c9>=0){
    console.log( 'sonlar ichida 1-chi va 3-chi son musbat');
}
else if(a9<0 && b9>=0 && c9>=0){
    console.log( 'sonlar ichida 2-chi va 3-chi son musbat');
}
else{
    console.log('sonlar ichida kamida 2 tasi musbat emas');
}

// 10-MISOL : hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring
let kun= ['dushanba','seshanba','chorshanba','payshanba','juma','shanba','yakshanba'];
let a10=5;
if( a10==1){
    console.log(kun[0]);
}
else if (a10==2) {
    console.log(kun[1]);
}
else if (a10==3) {
    console.log(kun[2]);
}
else if (a10==4) {
    console.log(kun[3]);
}
else if (a10==5) {
    console.log(kun[4]);
}
else if (a10==6) {
    console.log(kun[5]);
}
else if (a10==7) {
    console.log(kun[6]);
}
else{
    console.log('haftada 7 kun bor');
}
// 11-MISOL : Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring
let a11=93;
if( a11==93 || a11==94 ){
    console.log('ucell');
}
else if (a11==99 || a11==95) {
    console.log('uzmobile');
}
else if (a11==90 || a11==91) {
    console.log('beeline');
}
else if (a11==97) {
    console.log('ums');
}
else if (a11==98) {
    console.log('perfectum');
}
else if (a11==33) {
    console.log('humans');
}
else{
    console.log('Bunday kodli kompaniya yuq');
}
// 12-MISOL : Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
let a12 = 7;
if(a12 > 0) {
    console.log(a12+1);
}
else{
    console.log(a12-1);
}
// 13-MISOL : Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring
let a13 = 7;
if(a13 > 0) {
    console.log(a13+3);
}
else{
    console.log(a13-2);
}
// 14-MISOL : Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing
let a14=22;
let b14=21;
if(a14>b14){
  console.log('birinchi son katta');
}
else{
    console.log('ikkinchi son katta');
}
// 15-MISOL : 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing
const num1 = 10;
const num2 = 25;
const num3 = 15;

let maxNumber;

if (num1 >= num2 && num1 >= num3) {
  maxNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maxNumber = num2;
} else {
  maxNumber = num3;
}
console.log("The maximum number is:", maxNumber);

//16-MISOL : 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing
const a16 = 10;
const b16 = 25;
const c16 = 15;

let minNumber;

if (a16 <= b16 && a16 <= c16) {
  minNumber = a16;
} else if (b16 <= a16 && b16 <= c16) {
  maxNumber = b16;
} else {
  minNumber = c16;
}
console.log("The minimum number is:", minNumber);

// Shartiga tushinmadim 17-MISOL : Jinsga qarab log chiqivchi dastur tuzing!
let jinsi='ayol';

// 18-MISOL : Bahoga qarab stependiyani aniqlovchi dastur tuzing
const ball=90;
if(ball >0 && ball<60){
    console.log(' siz stipendiya olmaysiz');
}
else if(ball >=60 && ball<70){
    console.log(' siz 3 lik stipendiya olasiz');
}
else if(ball >=70 && ball<90){
    console.log(' siz 4 lik stipendiya olasiz');
}
else if(ball >=90 && ball<=100){
    console.log(' siz 5 lik stipendiya olasiz');
}
// 19-MISOL : Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing
let a17=-8;
if(a17 %2 !=0 && a17>0){
    console.log('toq musbat');
}
else if(a17 %2 !=0 && a17<0){
    console.log('toq manfiy');
}
else if(a17 %2 ==0 && a17>0){
    console.log('juft musbat');
}
else if(a17 %2 ==0 && a17<0){
    console.log('juft manfiy');
}
// 20-MISOL : Yilga qarab yoshin aniqlovchi dastur tuzing
let TugilganYili=1990;
let HozirgiYil=2023;
if ( HozirgiYil>TugilganYili){
    console.log(HozirgiYil-TugilganYili);
}
else{
    console.log('u hali 1 yoshga tolmagan yoki hali tugilmagan');
}
// 21-MISOL : 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C
let a21=12;
let b21=47;
let c21=89;
if(a21 <= b21 && a21 <= c21 && b21<= c21){
    console.log(true);
}
else{
    console.log(false);
}

// 22-MISOL : ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi
let a22=60;
let b22=25;
if(a22 %2 != 0 && b22 %2 == 0){
    console.log(true);
}
else if(a22 %2 == 0 && b22 %2 != 0) {
    console.log(true);
}
else{
    console.log(false);
}
// 23-MISOL : a,b,c sonlar berilgan har biri musbat son
let a23=32;
let b23=54;
let c23=-56;
if(a23>=0 && b23>=0 && c23>=0){
    console.log('kiritiligan sonlarning har biri musbat son ');
}
else{
    console.log('kiritiligan sonlarning har biri musbat son emas!!! ');
}
// 24-MISOL : a,b,c sonlardan biri musbat son
let a24=-2; 
let b24=-24; 
let c24=76; 
if(a24>=0 && b24>=0 && c24>=0){
    console.log('sonlar ichida biri musbat son');
}
else if(a24>=0 && b24>=0 && c24<0){
    console.log('sonlar ichida biri musbat son');
}
else if(a24<0 && b24>=0 && c24>=0){
    console.log('sonlar ichida biri musbat son');
}
else if(a24>=0 && b24<0 && c24>=0){
    console.log('sonlar ichida biri musbat son');
}
else if(a24>=0 && b24<0 && c24<0){
    console.log('sonlar ichida biri musbat son');
}
else if(a24<0 && b24>=0 && c24<0){
    console.log('sonlar ichida biri musbat son');
}
else if(a24<0 && b24<0 && c24>=0){
    console.log('sonlar ichida biri musbat son');
}
else{
    console.log('sonlar ichida hech biri musbat son emas!!!');
}

// 25-MISOL : 3 xonali son berilgan har bir raqamlari har xil
let son=124;

// 26-MISOL : 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan

// 27-MISOL : Kompyuter nomiga qarab kompyuter summasini chiqaruvchi dastur yarating
let nomi='lenevo';
if(nomi='lenevo'){
    console.log('lenevo ning narxi 950$');
}
else if(nomi='hp'){
    console.log('hp ning narxi 900$');
}
else if(nomi='asus'){
    console.log('asus ning narxi 970$');
}
else if(nomi='macbook'){
    console.log('macbook ning narxi 1500$');
}
else if(nomi='acer'){
    console.log('acer ning narxi 930$');
}
else{
    console.log('Dokonimizda bunday kompyuter qolmagan');
}
// 28-MISOL : Sonlar berilgan shu sonlar ichidan faqat murakkab sonlarni chiqaruvchi dastur tuzing (for)!

