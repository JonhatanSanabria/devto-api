import { fetchAllPosts } from "../modules/postsApi.js"

document.getElementById("create-post-form").addEventListener("click", () => {
  window.open("../views/postForm.html")
})

let createPostBtn = document.getElementById("create-post-btn");

createPostBtn.addEventListener("click", () => {
  window.open("../views/postForm.html", "_self");
});

const createPostCard = (postObject) => {
  let { title, tags, author, date, picture, key } = postObject;
  let cardHTML = `<div id="post-wrapper" class="card mb-3">
  <!--Container-->
  <a href="../views/postDetails.html?productKey=${key}">
  <div class="card-body" id="${title}">
    <!--Form-->
    <img src="${picture}" class="card-img-top mb-3 ${
    picture ? "d-block" : "d-none"
  }
  }" alt="..." />
    <div class="d-flex flex-row">
      <!--Body-->
      <img
        width="40px"
        class="mx-2 rounded-circle"
        src="https://xsgames.co/randomusers/avatar.php?g=male"
      />
      <div class="text ms-2">
        <!--User Body-->
        <h6 class="m-0">${author}</h6>
        <!--Author-->
        <span class="date">${date}</span
        ><!--Date-->
      </div>
    </div>
    <h5 class="card-title mt-2">${title}</h5>
    <!--title-->
    <div class="d-flex flex-row justify-content-between">
      <!--Tags Body-->
      <div class="d-flex flex-row">
        <!--Tags Wrapper-->
        <p class="card-text">${tags}</p>
        <!--Tags-->
      </div>
    </div>
    <div class="d-flex flex-row justify-content-evenly">
    <div class="d-flex flex-row">
      <p>❤️</p>
      <p>🦄</p>
      <p>🤯</p>
      <p>🙌</p>
      <p>🔥</p>
      <p>212 reactions</p>
      <p>52 comments</p>
    </div>
    <div class="d-flex flex-row">
      <p>10 min read</p>
    </div>
  </div>
  </div>
  </a>
</div>
    `;
  return cardHTML;
};

const printPost = (postArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  postArray.forEach((post) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createPostCard(post);
  });
};

const printAllPost = async () => {
  let postArray = await fetchAllPosts();
  printPost(postArray, "post-wrapper");
};

const filterByCategory = () => {
  let inputFilter = document.getElementById("filterInput");
  console.log(inputFilter);
  inputFilter.addEventListener("keyup", (event) => {
    let post = document.querySelectorAll("#post-wrapper div.card-body");
    console.log(post);
    post.forEach((post) => {
      if (event.target.value == "") {
        post.classList.replace("d-none", "d-block");
      } else if (post.id.includes(inputFilter.value)) {
        let match = document.getElementById(post.id);
        match.classList.replace("d-none", "d-block");
        return match;
      } else {
        let notMatch = document.getElementById(post.id);
        notMatch.classList.add("d-none");
      }
    });
  });
};

filterByCategory();
printAllPost();