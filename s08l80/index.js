function firstRecurringCharacter (arr) {
    let character = undefined;
    let tracker = {}
    for (let i = 0; i < arr.length; i++){
        if (tracker[arr[i]]) {
            character = arr[i]
            break
        } else {
            tracker[arr[i]] = arr[i]
        }
    }
    return character
}
console.log(firstRecurringCharacter([2,5,1,2,3,5]))
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter([2,3,4,5]))