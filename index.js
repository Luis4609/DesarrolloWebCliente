function myFun(str){

    const newStr = ""

    for(let i = 0; i < str.length; i++){
        newStr[i] = str[i]++
    }

    console.log(newStr)
    console.log(str[0]+1)

}

myFun('abcdef')
