function getFromLocalStorageTemplate(i, likeButton, totalLikes, commentField){
  let storedBooks = JSON.parse(localStorage.getItem("Books-Data")) || [];
  
  if (storedBooks.length > 0) {
    books = storedBooks;
  }

  
  if (likeButton) {
    if (books[i].liked) {
      likeButton.classList.add("heart_liked");
    } else {
      likeButton.classList.remove("heart_liked");
    }
  }

  if (totalLikes) {
    totalLikes.innerText = books[i].likes;
  }
  if (commentField) {
    commentField.innerHTML = "";
    for (let j = 0; j < books[i].comments.length; j++) {
      commentField.innerHTML += renderBookWindowCommentSectionHTMLTemplate(i, j);
    }
  }
}