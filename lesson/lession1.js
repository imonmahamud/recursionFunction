function print(n){
    if(n<0){
        return
    }   
    print(n-2)
    console.log(n)
}
print(10)