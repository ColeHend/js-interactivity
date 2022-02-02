const message = document.querySelector("#message");
const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    let deleteBtn = document.createElement("button");

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click",crossOffMovie)
    movie.appendChild(movieTitle);
    
    deleteBtn.textContent="X"
    deleteBtn.addEventListener("click",deleteMovie)
    movie.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(movie);
    inputField.value = "";
}
const deleteMovie = (event)=>{
    event.target.parentNode.remove()
    let title = event.target.parentNode.firstChild.textContent
    message.textContent = `${title} Deleted!`
    revealMessage()
}
const crossOffMovie = (event)=>{
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} Unwatched!`
    }
    revealMessage()
}
const revealMessage = ()=>{
    message.classList.remove("hide")
    setTimeout(()=>{message.classList.add("hide")},1000)
}
document.querySelector("form").addEventListener("submit",addMovie)