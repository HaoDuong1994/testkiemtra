function numberOneTriangle(number){
    for(let i=1;i<=number;i++){
        let str = '';
        for(let j=0; j<i;j++){
            str += '*';
        }
        document.write(`<div>${str}</div>`)
    }

}


numberOneTriangle(3)

function numbertwoTringle(number1){
    for(let i=1; i<=number1;i++){
        let str1='';
        str1 = str1 + '*'
        console.log(str1)
        document.write(`<div>${str1}</div>`);
    }
 
}

numbertwoTringle(2)
console.log('****')