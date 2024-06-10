import {createPostCard} from "../modules/postsApi.js"

let createPostBtn = document.getElementById("save-comment");
createPostBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let fields = document.querySelectorAll("#create-post-form input");
  let postObject = {};
  fields.forEach((field) => {
    let property = field.name;
    let value = field.value;

    postObject[property] = value;
  });
  const fecha = new Date();
  postObject["date"] = fecha.toDateString();
  await createPostCard(postObject);
  window.open("../views/home.html", "_self");
});