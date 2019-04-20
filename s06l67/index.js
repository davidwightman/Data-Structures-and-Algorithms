function reverseString(str){
    let newWord = ''
    for (let i = 0; i < str.length +1; i++){
        newWord = newWord.concat(str.charAt(str.length -i))
    }
    return newWord
    }
    

console.log(reverseString('This is crazy'))