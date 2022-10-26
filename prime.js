function identifyPrime(num) {

    let flag=" ";
    for(let i=2;i<num;i++){
        if(num%i===0){
            flag=" ";
            break;
        }
    }
    console.log(flag);
 }