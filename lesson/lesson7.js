var arr=[1,2,3,4,5]

function traverse(arr,lastIndex){
    if(lastIndex<0){
        return 0
    }
    return arr[lastIndex] + traverse(arr,lastIndex-1)
}

var result=traverse(arr,arr.length-1)
result

function sayHi(n){
    if(n==0){
        return
    }
    console.log('Hi,I am calling')
    sayHi(n-1)
}
sayHi(5)
