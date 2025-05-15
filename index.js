const  titleEl = document.getElementById("book-title");
const authorEl = document.getElementById("book-author");
const yearEl = document.getElementById("book-year");


fetch("https://andrii-nehrii.github.io/book/book.json").then((res) => {
    if(!res.ok){
        throw new Error("-vibe")
    }
    return res.json
}).then((data)=>{
    const {title, author,year} = data;
titleEl.innerText= title;
authorEl.innerText = author;
yearEl.innerText =  year;
})
.catch((err) => {
    console.log(err.message);
})