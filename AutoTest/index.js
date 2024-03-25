//Задача номер 1 ================================================

const factorial = (n) => {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(10))

//Задача номер 2 ================================================

function stringLength(str) {
    if(typeof(str) !== 'string') {
        return false
    }
    let newArr = str.split(' ')
    let max = 0

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > max) {
            max = newArr[i].length
        }
    }
    return max
}

console.log(stringLength('adfsds sss ww'))

//Задача номер 3 ================================================

const subArrayMax = (arr) => Array.isArray(arr) ? arr.map(i => Math.max(...i)) : false

console.log(subArrayMax([[1, 2, 3], [4, 5], [6, 7, 8, 9]]))

//Задача номер 4 ================================================

function maxLengthString(str, num) {
    if(typeof(str) !== 'string') {
        return false
    }
    return str.length > num ? str.slice(0, num) + '...' : str
}

console.log(maxLengthString('sdsdsds', 6))

//Задача номер 5 ====================================================

function upRegister(str) {
    if(typeof(str) !== 'string') {
        return false
    }
    return str.trim().split(/\s+/).map(w => {
        return w[0].toUpperCase() + w.substring(1).toLowerCase()
    }).join(' ')
}

console.log(upRegister('привЕт мирРРРРРРР'))

//Задача номер 6 ========================================================

const copyElByArray = (arr1, arr2, n) => Array.isArray(arr1 && arr2) ? arr2.toSpliced(n, 0, ...arr1) : false

console.log(copyElByArray([1, 2, 3], [4, 5], 1))


//Задача номер 7 =========================================================

const arrFalseValue = ['hello', 0, '', false, 54, undefined ,'Egor', -0, 77, null, NaN]

const removeFalseValue = (arr) => {
    if(!Array.isArray(arr)) {
        return false
    }
    let trueValue = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            trueValue.push(arr[i])
        }
    }
    return trueValue
}

console.log(removeFalseValue([-1, 'hello', 23]))

//Задача номер 8 =========================================================
const arrStr = ["amry", "army"]

const arrStrComparsion = (arr) => Array.isArray(arr) ? arr[1].toLowerCase() == arr[1].toLowerCase().split('').map(i => {return arr[0].toLowerCase().split('').find(j => j === i)}).join('') : false

console.log(arrStrComparsion(arrStr))


// Задача номер 10  ====================================================

const arrPushNum = (n, arr) => {
    if (n <= 0) {
       return arr
    } else {
       arr.push(n)
       return arrPushNum(n - 1, arr)
    }
 }
 
 console.log(arrPushNum(5, []))
 
 // Задача номер 9 ====================================================

 const arr = [1, 2, 3, 4, 5, 6]

 const arrSmashFunc = (arr, n) => {
    let  ff = []
    for(let i = 0; i < arr.length / n; i++) {
        ff.push(arr.slice(0, n))
    }
    return ff
}
console.log(arrSmashFunc(arr, 2))
