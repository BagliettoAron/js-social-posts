

// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.





const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },

    {
        "id": 2,
        "content": "Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=172",
        "author": {
            "name": "Phil Magro",
            "image": "https://unsplash.it/300/300?image=16"
        },
        "likes": 100,
        "created": "2021-06-27"
    },

    {
        "id": 3,
        "content": "Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": " ",
        "author": {
            "name": "Elon Musk",
            "image": "https://unsplash.it/300/300?image=17"
        },
        "likes": 100,
        "created": "2021-06-29"
    }
];

const postsContainer = document.getElementById("container");

posts.forEach(post => {
    // creo elemento dom (funzione sotto)
    const createdPost = createPosts(post);
    console.log(createdPost );

    // metto tutta sta roba sotto dentro al container appena prelevato
    postsContainer.innerHTML += createdPost
});

const likeButtons = document.querySelectorAll(".js-like-button");

likeButtons.forEach( (button, index) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        // aggiungo il colore quando clicco
        this.classList.add("like-button--liked");

        // aggiungo il counter
        const clickedPost = posts[index];
        const clickedPostId = clickedPost.id;
        const likeCounter = document.getElementById(`like-counter-${clickedPostId}`)

        let likesNumber = parseInt(likeCounter.textContent);
        likesNumber = likesNumber + 1;
        likeCounter.innerHTML = likesNumber;

        // salvo in un array
        likedPosts.push(clickedPostId);




    });
});

/**
 * variabile che crea un elemento DOM
 * @param {any} containerDom
 * @param {any} postObject
 * @returns {any}
 */
function createPosts(postObject) {
    // destrutturo
    const {id, content, author, media, likes, created} = postObject;
    const postElement = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;

    return postElement
};










``


   

