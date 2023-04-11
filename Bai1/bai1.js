let inputA=document.getElementById('inputA');
let inputB=document.getElementById('inputB');
const $button=document.getElementById('button');
console.log($button)
function checkSNT(number){
    if(number <2){return false};
    for(i=2; i<number; i++){
        if(number%i===0){return false}
    }
    return true;
}
console.log(checkSNT(23))

if(true){console.log('3')};
let result=0
const tinhtoan=document.getElementById('tinhtoan')
$button.addEventListener('click',function(){
    let number1= Number(inputA.value);
    let number2= Number(inputB.value);
    console.log(typeof number1)
    if(!Number.isInteger(number1) & !Number.isInteger(number2)){
        tinhtoan.innerHTML=`Ban vừa nhập sai số A hoặc B`
        return;
    };
    if(number2<number1){
        tinhtoan.innerHTML=`Ban vừa nhập số B nhỏ hơn A mời nhập lại`
        return;
     };
     for(let i=number1; i<=number2;i++){
        if(checkSNT(i)){result=result+i}
     
     }
     tinhtoan.innerHTML=result;
})
