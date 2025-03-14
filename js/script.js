function renderBookWindow() {
  for (let i = 0; i < books.length; i++) {
    const commentID = `commentaryField_${i}`;
    let likedBook = books[i].liked;
    document.getElementById("bookWindow").innerHTML += renderBookWindowHTMLTemplate(i, commentID)

    if (likedBook == true) {
      document.getElementById(`likeButton${i}`).classList.add("heart_liked");
    }

    getFromLocalStorage(i);

    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById(commentID).innerHTML += renderBookWindowCommentSectionHTMLTemplate(i, j) 
    }
  }
}

function sendComment(i) {
  let inputValue = document.getElementById(`commentInput${i}`);
  let inputText = inputValue.value.trim();

  if (inputText !== "") {
    let newComment = { name: "Sascha", comment: inputText };
    let commentID = `commentaryField_${i}`;
    books[i].comments.unshift(newComment);
    document.getElementById(commentID).innerHTML = "";
    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById(commentID).innerHTML += sendCommentHTMLTemplate(i, j) 
    }
    inputValue.value = "";
    localStorage.setItem(`customComment${i}`, JSON.stringify(books[i].comments));
  }
}

function likeUnlike(i) {
  let likedBook = books[i].liked;
  if (likedBook == true) {
    books[i].liked = false;
    books[i].likes -= 1;
    document.getElementById(`likeButton${i}`).classList.remove("heart_liked");
  } else if (likedBook == false) {
    books[i].liked = true;
    books[i].likes += 1;
    document.getElementById(`likeButton${i}`).classList.add("heart_liked");
  }
  document.getElementById(`totalLikes${i}`).innerText = books[i].likes;
  localStorage.setItem(`Liked_${i}`, JSON.stringify(books[i].liked));
  localStorage.setItem(`Likes_${i}`, JSON.stringify(books[i].likes));
}

function getFromLocalStorage(i) {
  let storedLiked = JSON.parse(localStorage.getItem(`Liked_${i}`));
  let likeButton = document.getElementById(`likeButton${i}`);
  let totalLikes = document.getElementById(`totalLikes${i}`);
  let storedLikes = JSON.parse(localStorage.getItem(`Likes_${i}`));
  let customComment = JSON.parse(localStorage.getItem(`customComment${i}`));

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
    books[i].comments = customComment
  }
}
