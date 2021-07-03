function fact(n){
    if(n==1){
        return 1
    }
    return n*fact(n-1)
}
var result=fact(3)
result