function fibonacci(n){
    if(n<=1){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}

var result=fibonacci(3)
result //0 1 1 2 3 5 8