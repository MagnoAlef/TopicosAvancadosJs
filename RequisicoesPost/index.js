//Requisição GET
function renderArticle(articleData){
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article - ${articleData.id}`

    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = articleData.title

    const content = document.createElement('div')
    content.classList.add('article-content')
    content.innerHTML = articleData.content

    const author = document.createElement('div')
    author.classList.add('article-author')
    author.textContent = articleData.author
    
    article.append(title,author,content)
    document.querySelector('#articles').appendChild(article)
}

async function fetchArticles(){

    const articles = await fetch('http://localhost:3000/articles').then(res => res.json)
articles.forEach(renderArticle)

}

document.addEventListener('DOMContentLoaded' , () => {
    fetchArticles()
})
//Requisição Post

const form = document.querySelector('form')

form.addEventListener('submit' , async (ev) => {
    ev.preventDefault()

    const articleData = {
        title : document.querySelector('#title').value, // Pegando o valor do input
        author : document.querySelector('#author').value, // Pegando o valor do input
        content : document.querySelector('#content').value // Pegando o valor do input
    }

    //Enviar esse objeto na requisição

    const response = await fetch('http://localhost:3000/articles' , {
        method: 'POST',
       //Cabecalho da requisicao serve para passar informações para o servidor 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(articleData)
    })

    const savedArticle = await response.json()
    form.reset()
    //Funcao que renderizar os artigos
    renderArticle(savedArticle)

    console.log('savedArticle',savedArticle)

})