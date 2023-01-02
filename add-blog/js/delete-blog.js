const deleteBlogButton = document.querySelector(".deleteBtn");
if (deleteBlogButton != null) { 
    deleteBlogButton.addEventListener("click" , () => {
        deleteBlog(1);
    });
}

export default function deleteBlog(key){ 
    sessionStorage.removeItem(key);
    window.location.reload(); 
}