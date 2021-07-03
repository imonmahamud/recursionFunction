function power(n,b){
    if(b==0){
        return 1
    }
    var result=n* power(n,b-1)
    console.log('N = '+n+' B = '+b+' Result = '+result);
    return result
}
var result=power(5,4)
result