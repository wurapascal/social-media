const form = document.querySelector("#form");
console.log(form);
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.querySelector("#posts");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  validateForm();
  console.log("form submitted");
}

function validateForm() {
  if (input.value === " ") {
    msg.innerHTML = "Sorry User, your input is empty";

    setTimeout(() => {
      msg.innerHTML = "";
    }, 1000);
  } else {
    console.log("success");
    createPost();
  }
}

function createPost() {
  let post = {};
  post["text"] = input.value;
  console.log(post.text);
  posts.innerHTML += `<div class="flex">
  <p>${post.text}</p>
  <div> <button onClick={editPost(this)}> edit </button>
  <button onClick={deletePost(this)}> delete </button>
  </div>
  </div>`;
  input.value = "";
}

function deletePost(e) {
  e.parentElement.parentElement.remove();
}

function editPost(e) {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}
