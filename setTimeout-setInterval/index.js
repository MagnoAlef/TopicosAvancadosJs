console.log('Programa iniciado')

const timeoutId = setTimeout(() => {
    console.log('3 segundos se passaram desde que o programa foi iniciado.')
} , 3000) //tempo em milisegundos

clearTimeout(timeoutId) // Ele para o setTimeout


// setInterval

let seconds = 0

 const intervalId = setInterval(() => { //criar um intervalo e executa repetida vezes, criar um loop de chamadas
   seconds+=3
   console.log(`Se passaram ${seconds} segundos.`)
   if(seconds > 10){
    clearInterval(intervalId)
    console.log('Tempo esgotado! Encerrando...')
   }
},3000)

// modo de encerrar

