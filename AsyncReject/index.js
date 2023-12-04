async function soma(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
           return Promise.reject('Erro no tipo de dados soma')
        }else{
            return a+b
        }
}

 async function sub(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
          return   Promise.reject('Erro no tipo de dados subtração')
        }else{
            return a-b
        }
    
}

const sumResult = soma(50,33)
const subResult = sub(50,null)


Promise.all([sumResult,subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

