//Sincrono executa linha por linha de forma linear
function step02(){
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

//Assincrono executa de forma assincrono sem ser de forma linear
console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
} , 2000)
console.log('Passo 06')
