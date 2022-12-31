export default function createBlog(formData) {
    const blogs = document.querySelector(".blogs");

    const column = document.createElement("div");
    column.className = "col-sm-6";

    const card = document.createElement("div");
    card.className = "card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = formData["title"];

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = formData["content"]

    const blogAuthor = document.createElement("div"); 
    blogAuthor.className = "btn btn-primary"; 
    blogAuthor.innerText = `Author : ${formData["authorName"]}`; 

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(blogAuthor); 
    card.appendChild(cardBody);
    column.appendChild(card);
    blogs.appendChild(column);
}