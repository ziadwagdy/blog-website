const formData = {}

export default function validateForm(titleInput, contentInput, authorNameInput, id) {
    const validTitle = isTitleValid(titleInput);
    const validAuthor = isAuthorValid(authorNameInput);
    const validContent = isContentValid(contentInput);
    if (validTitle && validContent && validAuthor) {
        formData["id"] = id.value;
        return formData;
    } else {
        return null;
    }
}

function isTitleValid(titleInput) {
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


function isContentValid(contentInput) {
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

function isAuthorValid(authorNameInput) {
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