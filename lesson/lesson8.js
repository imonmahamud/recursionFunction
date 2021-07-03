var arr=[1,2,3,4,5,6]

function reverseArray(arr,firstIndex,lastIndex){
    if(firstIndex>lastIndex){
        return 
    }
    var temp=arr[firstIndex]
    arr[firstIndex]=arr[lastIndex]
    arr[lastIndex]=temp
    reverseArray(arr,firstIndex+1,lastIndex-1)
}
var result=reverseArray(arr,0,arr.length-1)
console.log(result) 