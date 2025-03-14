





function renderBookWindow(){
    for (let i = 0; i < books.length; i++) {
        const commentID = `commentaryField_${i}`
        let likedBook = books[i].liked
        document.getElementById("bookWindow").innerHTML += /*html*/`
        <div class="book_ui">
            <div class="border_bottom">
                <h2 class="title_of_book">${books[i].name}<h2>
            </div>
            <div class="border_bottom book_pic_box">
                <img class="book_pic" src="./assets/png/book-306468_640.png">
            </div>
            <div class="price_likes">
                <h2 class="price">${books[i].price.toFixed(2)} €</h2> 
                <div class="likebox">
                    <p id="totalLikes${i}"class="likes">${books[i].likes}</p>
                    <img id="likeButton${i}" onclick="likeUnlike(${i})" class="heart"src="./assets/png/favorite_50dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png">
                </div>
            </div>
            <div class="book_info border_bottom">
                <table >
                    <tr>
                        <td class="td_left">Author:</td>
                        <td class="td_right">${books[i].author}</td>
                    </tr>
                    <tr>
                        <td class="td_left">Erscheinungsjahr:</td>
                        <td class="td_right">${books[i].publishedYear}</td>
                    </tr>
                    <tr>
                        <td class="td_left">Genre:</td>
                        <td class="td_right">${books[i].genre}</td>
                    </tr>
                </table>
            </div>

                <h3 class="commentary_header">Kommentare:</h3>
                <div class="scrollable_div">
                    <table class="comment_window" id="${commentID}">
                    </table>
                </div>
                <div class="input_window">
                    <input class="input_comment" placeholder="Schreibe deinen Kommentar..." id="commentInput${i}" type="text">
                    <img class="send_comment" onclick="sendComment(${i})" src="./assets/png/send_40dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png"
                </div>
                
                
        </div>
        `
        if(likedBook == true){
            document.getElementById(`likeButton${i}`).classList.add("heart_liked")
        }
           
        for (let j = 0; j < books[i].comments.length; j++) {
            document.getElementById(commentID).innerHTML += /*html*/ `
            <tr class="comment_table">
                <td class="comment_name">[${books[i].comments[j].name}]:</td>
                <td class="comment">${books[i].comments[j].comment}</td>
            </tr>
            `;
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
            document.getElementById(commentID).innerHTML = ""
            for (let j = 0; j < books[i].comments.length; j++) {
                document.getElementById(commentID).innerHTML += /*html*/ `
                <tr class="comment_table">
                    <td class="comment_name">[${books[i].comments[j].name}]:</td>
                    <td class="comment">${books[i].comments[j].comment}</td>
                </tr>
                `;
            }
            inputValue.value = "";
        }
    }
    
    function likeUnlike(i) {
        let likedBook = books[i].liked
        if(likedBook == true){
            books[i].liked = false
            books[i].likes -= 1
            document.getElementById(`likeButton${i}`).classList.remove("heart_liked")
            localStorage.setItem("Liked", JSON.stringify(books[i].liked));
        }
        else if (likedBook == false){
            books[i].liked = true
            books[i].likes += 1
            document.getElementById(`likeButton${i}`).classList.add("heart_liked")
        }
        document.getElementById(`totalLikes${i}`).innerText = books[i].likes;
    }
        
        
    
        
    