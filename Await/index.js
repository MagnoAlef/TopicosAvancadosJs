//await
async function soma(a,b){

        if(typeof a !== 'number' || typeof b !== 'number'){
           return Promise.reject('Erro no tipo de dados')
        }

    return a + b
}
// Sem usar o await
// async function execute(){
//     soma(30,55).then((resultado) => {
//         console.log(resultado)
//     })
// }
//Usando await ele so funciona dentro de funcoes assincronas 
async function execute(){
    try{     
        const result = await soma(50,null) // ele espera o procedimento concluir para seguir abaixo
        console.log(result)
    }catch(e){
        console.log(e)
    }
}
execute()

