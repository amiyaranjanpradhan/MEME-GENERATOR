const nextBtn = document.querySelector(
    ".main .btn "
);
const memeImage = document.querySelector(".main img");
const memeTitle = document.querySelector(".main .title");

const updateDetails = (url , title) => {
    memeImage.setAttribute("src", url );
    memeTitle.innerHTML = title;

};
const nextMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response ) => Response.json())
    .then((data) => {
        updateDetails(data.url, data.title);
    });
};
nextBtn.addEventListener("click", nextMeme)
nextMeme();



