function validate(e) {
  e.preventDefault();

  let errorMessages = {};
  let formData = {};

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageInp = document.getElementById("image");
  const imageUrl = imageInp.value;

  if (title !== "" && title.trim().length >= 3) {
    formData["title"] = title;
  } else {
    errorMessages["titleError"] = "Not a valid Title!";
  }

  if (content !== "" && content.trim().length >= 15) {
    formData["content"] = content;
  } else {
    errorMessages["contentError"] = "Not a valid Content!";
  }

  if (checkURL(imageUrl)) {
    formData["imageUrl"] = imageUrl;
  } else {
    errorMessages["imageError"] = "Not a valid Image url!";
  }

  if (JSON.stringify(errorMessages) === "{}") {
    console.log(`No error found data is ${JSON.stringify(formData)}`);
    // submit data .addnew 
    if(submit){
      // go to list page 
      // todo : get all data in list page 
    } 
  } else {
    console.log(`Errors found: ${JSON.stringify(errorMessages)}`);
    // show errors
  }
}

function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

const imageInp = document.getElementById("image");

imageInp.onchange = (evt) => {
  if (checkURL(imageInp.files[0].name)) {
    const [file] = imageInp.files;
    if (file) {
      document.querySelector("img").src = URL.createObjectURL(file);
    }
  }
};
