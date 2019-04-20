function mergeSortedArrays(arr1, arr2){
    const sortByNumber = (a, b) => a - b 

    let newArr = arr1.concat(arr2)
    return newArr.sort(sortByNumber)
}
console.log(mergeSortedArrays([0,3,4,31],[4,6,30]))