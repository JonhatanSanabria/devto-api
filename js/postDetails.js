import { fetchPostByKey } from "../modules/postsApi.js"

//Extraer parametros de la url
//1.- Guardamos la url en una variable
const url = window.location.href
//2.- Creamos una instancia del objeto URLSearch params
const params = new URLSearchParams(new URL(url).search)
//3.- Extraemos el parametro que deseamos
let postKey = params.get("postKey")
console.log(postKey)

const printPostData = async (postKey) => {
    let postData = await fetchPostByKey(postKey)
    let {title, content, tags, author, date, picture, reactions} = postData

    document.getElementById("post-picture").setAttribute("src", picture)
    document.getElementById("post-date").setAttribute(new Date()) = date
    document.getElementById("post-tags").innerText = tags
    document.getElementById("post-title").innerText = title
    document.getElementById("post-author").innerText = author
    document.getElementById("post-content").innerText = content
    document.getElementById("post-reactions").innerText = reactions
}

printPostData(postKey)