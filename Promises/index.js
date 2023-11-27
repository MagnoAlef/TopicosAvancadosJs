//Pendente - peding
//resolvida - resolved
//rejeitada - rejected

/**
const p = new Promise((resolve, reject) =>{
    console.log('A promise está sendo executada!')
    
    setTimeout(() => {
        //if(true){
            //reject(true) // Daria erro na execução
        //}
        console.log('Resolvendo a Promise...')
        resolve(true) // Parametro para resolver a promise 
    } , 2000)
})

console.log(p)

setTimeout(() => {
    console.log(p)
},3000)
 */

// Exemplo de uso  comum das Promises
function execute(){
    return new Promise((resolve , reject) => {
        console.log('A promise está sendo executada!')
        setTimeout(() => {
           
            console.log('Resolvendo a Promise...')
            resolve('Resultado') // Parametro para resolver a promise 
        } , 1000)
    })
}

const promise = execute()
console.log(promise)

setTimeout(() => {
    console.log(promise)
},3000)