// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.


const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

    let activeItem = 0;


    const imagesContainer = document.querySelector('.images-container');
    const thumbnailsContainer = document.querySelector('.thumbnails-container');
    // va a popolare dinamicamente il container principale del carosello con le immagini.
    images.forEach((image, index) => {

        // crea un elemento div per l'immagine  del carosello.
        const imageElement = document.createElement('div');
        imageElement.classList.add('image');
        imageHTML =`<img src="${image.image}"></img>`;
        // crea l'elemento div per il titolo dell'immagine del carosello.
        const titleImage = document.createElement('div')
        titleImage.classList.add('title-txt');
        titleHTML = `<div>${image.title}</div>`;
        // crea l'elemento div per il testo dell'immagine del carosello.
        const textImage = document.createElement('div')
        textImage.classList.add('txt');
        textHTML = `<div>${image.text}</div>`;
        // Aggiunge il titolo e il testo all'elemento dell'immagine
        titleImage.innerHTML = titleHTML;
        imageElement.innerHTML = imageHTML;
        textImage.innerHTML = textHTML;
        // aggiunge immagine, titolo e testo dell'immagine  al div principale del carosello.
        imagesContainer.appendChild(imageElement);
        imageElement.appendChild(titleImage);
        imageElement.appendChild(textImage);


        

        // va a riempire la sezione delle miniature con le immagini
        const thumbnailElement = document.createElement('div');
        thumbnailElement.classList.add('thumbnail');
        thumbnailElement.innerHTML = `<img src="${image.image}">`;
        // Aggiunge l'elemento della miniatura al container delle miniature
        thumbnailsContainer.appendChild(thumbnailElement);
        // Aggiungi un evento di click alla sezione Thumbnail per impostare l'elemento attivo.
        thumbnailElement.addEventListener('click', () => {
            setActiveItem(index);
        });
    });


    // Imposta l'elemento iniziale principale 

        const allImages = document.querySelectorAll('.image');
        allImages[activeItem].classList.add('active');
        const allThumbnails = document.querySelectorAll('.thumbnail');
        allThumbnails[activeItem].classList.add('active');
    // Aggiunge  un evento listner che resta in ascolto fino al click per portare avanti l'immagine del carosello
        const nextArrow = document.querySelector('.arrow.next');
            nextArrow.addEventListener('click', function() {
            // Rimuove la classe "active" dall'elemento attualmente attivo
            document.querySelector('.image.active').classList.remove('active');
            document.querySelector('.thumbnail.active').classList.remove('active');
            
            // Incrementa l'elemento attivo o reimposta a 0 se si raggiunge la fine
            if(activeItem < allImages.length - 1) {
                activeItem++;
            } else {
                activeItem = 0;
            }
            // Imposta l'elemento successivo come attivo
            allImages[activeItem].classList.add('active');
            allThumbnails[activeItem].classList.add('active');
    });
     // Aggiunge  un evento listner che resta in ascolto fino al click per portare avanti l'immagine del carosello
        const previousArrow = document.querySelector('.arrow.previous');
            previousArrow.addEventListener('click', function() {
             // Rimuove la classe "active" dall'elemento attualmente attivo
            document.querySelector('.image.active').classList.remove('active');
            document.querySelector('.thumbnail.active').classList.remove('active');
             // Incrementa l'elemento attivo o reimposta a 0 se si raggiunge la fine
            if(activeItem > 0) {
                activeItem--;
            } else {
                activeItem = allImages.length - 1;
            }
            // Imposta l'elemento successivo come attivo
            allImages[activeItem].classList.add('active');
            allThumbnails[activeItem].classList.add('active');
    });
 


