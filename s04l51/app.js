
// O(a*b)
function commonArr(arr1, arr2){
    // //solution1
    // for (let item1 of arr1) {
    //     for (let item2 of arr2){
    //         if (item1 === item2){
    //             return true
    //         }
    //     }
    // }
    // return false


    //solution 2 O(a+b)
    let containObj = {}

    for (let item1 of arr1) {
        if (containObj[item1] === undefined) {
            containObj[item1] = 1
        } else containObj++
    }
    for (let item2 of arr2) {
        if (containObj[item2] !== undefined) {
            return true
        }
    }
    return false

}
console.log(commonArr(['a', 'b', 'c', 'x'], ['x', 'y', 'z'])) // true
console.log(commonArr(['a', 'b', 'c', 'd'], ['x', 'y', 'z'])) // false