import createBlog from "./components/BlogPost.js";

const formData = JSON.parse(sessionStorage.getItem("formData"));
createBlog(formData); 
