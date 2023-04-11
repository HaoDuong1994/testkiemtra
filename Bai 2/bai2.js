function numberOneTriangle(number){
    
    for(let i=1; i<=number; i++){
        let str=''
        for(let j=0; j<i; j++){
            str= str+'*'
           
        }
        console.log(str)
    }
}
numberOneTriangle(4)