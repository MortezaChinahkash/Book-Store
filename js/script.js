function renderBookWindow(){
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
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
                    <p class="likes">${books[i].likes}</p>
                    <img class="heart"src="./assets/png/favorite_50dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png">
                </div>
            </div>
            <div class="book_info border_bottom">
                <table>
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

        
        
        </div>
        `
        
    }
}