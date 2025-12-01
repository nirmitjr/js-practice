// wap to check odd even
let num=Number(prompt(`enter a number`));
if ((num<0)||(num=="")){
    console.log(`invalid`)
}
else if (num %2===0){
    console.log(`even`)
}   
else  {
    console.log(`odd`)
}