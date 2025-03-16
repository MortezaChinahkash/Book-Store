function renderBookWindow() {
  document.getElementById("bookWindow").innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const commentID = `commentaryField_${i}`;
    
    document.getElementById("bookWindow").innerHTML += renderBookWindowHTMLTemplate(i, commentID);

    getFromLocalStorage(i);
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
    localStorage.setItem(`Books-Data`, JSON.stringify(books));
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
  localStorage.setItem(`Books-Data`, JSON.stringify(books));
}

function getFromLocalStorage(i) {
  let likeButton = document.getElementById(`likeButton${i}`);
  let totalLikes = document.getElementById(`totalLikes${i}`);
  let commentField = document.getElementById(`commentaryField_${i}`);
  getFromLocalStorageTemplate(i, likeButton, totalLikes, commentField);
}
