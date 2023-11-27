function execute(){
    return new Promise((resolve , reject) => {
        console.log('A promise está sendo executada!')
        setTimeout(() => {
           if(true){
            reject('A promise foi rejeitada')
           }else{
               console.log('Resolvendo a Promise...')
               resolve(42) // Parametro para resolver a promise 
           }
        } , 1000)
    })
}

execute().then((result) => { // Ela recebe como parametro o resultado
console.log(`A promise foi resolvida e o resultado foi : ${result} `)
}).catch((reject) => { // Ela recebe como parametro o erro 
    console.log(`A promise foi rejeitada : ${reject} `)
}).finally(() => { // codigo ira executa em ambos os casos
    console.log('A promise foi finalizada.')
})

