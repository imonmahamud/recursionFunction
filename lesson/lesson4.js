function calculationOfGcd(a,b){
    console.log('A = '+a+' B = '+b+' A%B = '+a%b);
    if(a%b==0){
        return b
    }
    return calculationOfGcd(b,a%b)
}
var result =calculationOfGcd(45,7)
result