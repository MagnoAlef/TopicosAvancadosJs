//async 
 async function soma(a,b){
    return a+b
}

function sub(a,b){
    //Usando sem a async
    // return new Promise((resolve, reject) => {
    //     if(typeof a !== 'number' || typeof b !== 'number'){
    //         reject('Erro no tipo de dados')
    //     }else{
    //         resolve(a-b)
    //     }
    // })
    //Usando async
    return a -b
}

const sumResult =  soma(50,33)
const subResult = sub(50,33)
console.log(sumResult)

Promise.all([sumResult,subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

//Outro exemplo

const numbers = [4,9,5,13,77]

function asyncSquare(x){
   return x*x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})