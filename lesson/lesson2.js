function add(m,n){
    if(m>n){
        return 0
    }
    return n+add(m,n-1)
}
var result=add(2,5)
result