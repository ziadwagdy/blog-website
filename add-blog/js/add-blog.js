const form = document.querySelector("form");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorNameInput = document.getElementById("authorName");

let formData = {};

function validate(e) {
  e.preventDefault();

  let ContentValid = isContentValid(); 
  let AuthorValid = isAuthorValid(); 
  let TitleValid  = isTitleValid(); 
  if (ContentValid && AuthorValid && TitleValid) { 
    // todo : submit
    console.log(formData);
    sessionStorage.setItem("formData", JSON.stringify(formData));
    window.location.assign("./list-blogs.html");
  }
  // form.classList.add('was-validated');
  // todo : check form but it skips white spaces !

}


function isTitleValid() {
  const title = titleInput.value;
  if (title !== "" && title.trim().length >= 3) {
    formData["title"] = title;
    showValid(titleInput);
    return true;
  } else {
    showInvalid(titleInput);
    return false;
  }
}


function isContentValid() {
  const content = contentInput.value;
  if (content !== "" && content.trim().length >= 15) {
    formData["content"] = content;
    showValid(contentInput);
    return true;
  } else {
    showInvalid(contentInput);
    return false;
  }
}


function isAuthorValid() {
  const authorName = authorNameInput.value;
  if (authorName !== "" && authorName.trim().length >= 5) {
    formData["authorName"] = authorName;
    showValid(authorNameInput);
    return true;
  } else {
    showInvalid(authorNameInput);
    return false;
  }
}


function showValid(node) {
  node.parentElement.querySelector(".invalid-feedback").style.display = "none";
  node.parentElement.querySelector(".valid-feedback").style.display = "block";
}


function showInvalid(node) {
  node.parentElement.querySelector(".invalid-feedback").style.display = "block";
  node.parentElement.querySelector(".valid-feedback").style.display = "none";
}