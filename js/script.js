function renderBookWindow(){
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
        document.getElementById("bookWindow").innerHTML += /*html*/`
        <div class="book_ui"></div>
        `
        
    }
}