const product = (a, b) => {
    return a * b
}

const result1 = product(33, 33)
//product (33, 33)kekkano shiji nashi
console.log(result1)


const sum = (n) =>{
    let result  = 0
    for(i = 1; i <= n; i = i + 1){
        result = result + i
    }
    return result
}
const result2 = sum(500)
console.log(result2)