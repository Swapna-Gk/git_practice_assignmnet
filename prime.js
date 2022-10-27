function identifyPrime(num) {

    let flag="Yes";
    for(let i=2;i<num;i++){
        if(num%i===0){
            flag="No";
            break;
        }
    }
    console.log(flag);
 }