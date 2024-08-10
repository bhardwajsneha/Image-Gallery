function filterImages(category) {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// function openModal(image) {
//     const modal = document.getElementById("modal");
//     const modalImg = document.getElementById("modal-img");
    
//     modal.style.display = "flex";
//     modalImg.src = image.src;
// }

// function closeModal() {
//     const modal = document.getElementById("modal");
//     modal.style.display = "none";
// }
    const galleryItems = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
    const leftArrow = document.querySelector(".lightbox .left-arrow");
    const rightArrow = document.querySelector(".lightbox .right-arrow");

    let currentIndex = 0;

    function openLightbox(index) {
        lightboxImg.src = galleryItems[index].src;
        lightbox.style.display = "block";
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightbox(currentIndex);
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentIndex);
    }

    galleryItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener("click", closeLightbox);
    leftArrow.addEventListener("click", showPreviousImage);
    rightArrow.addEventListener("click", showNextImage);

    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxImg && event.target !== leftArrow && event.target !== rightArrow) {
            closeLightbox();
        }
    });


