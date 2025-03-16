function getFromLocalStorageTemplate(storedLiked, likeButton, totalLikes, storedLikes, customComment){

  if (storedLiked !== null) {
    books[i].liked = storedLiked;
  }
  
  if (storedLikes !== null) {
    books[i].likes = storedLikes;
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
  
  if (customComment){
    books[i].comments = customComment;
  }
}