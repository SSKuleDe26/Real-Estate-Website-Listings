const galleryImages = [

    {
        title: "Luxury Villa",
        image: "images/luxury_villa.jpg"
    },

    {
        title: "Modern Apartment",
        image: "images/modern_apartment.jpg"
    },

    {
        title: "Cozy Family Home",
        image: "images/cozy_family_home.jpg"
    },

    {
        title: "Beach Condo",
        image: "images/beach_condo.jpg"
    },

    {
        title: "Country Cottage",
        image: "images/country_cottage.jpg"
    }

];
function openImage(image, title) {

    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");

    if (!modalImage || !modalTitle) return;

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;

    const galleryModal = document.getElementById("galleryModal");

    const modal = new bootstrap.Modal(galleryModal);

    modal.show();

}
function loadLastViewed() {

    const lastImage =
        localStorage.getItem("lastViewedImage");

    const lastTitle =
        localStorage.getItem("lastViewedTitle");

    const display =
        document.getElementById("lastViewed");

    if (display) {

        if (lastTitle) {

            display.innerHTML =
                "<strong>Last Viewed:</strong> " +
                lastTitle;

        } else {

            display.innerHTML =
                "<strong>Last Viewed:</strong> None";

        }

    }

}

let slideIndex = 0;

function startSlideshow() {

    const slideshow =
        document.getElementById("slideshowImage");

    if (!slideshow) return;

    setInterval(function () {

        slideIndex++;

        if (slideIndex >= galleryImages.length) {

            slideIndex = 0;

        }

        slideshow.src =
            galleryImages[slideIndex].image;

        slideshow.alt =
            galleryImages[slideIndex].title;

    }, 3000);

}
galleryImages.map(image => {

    console.log(image.title);

});

window.addEventListener("load", function () {

    loadLastViewed();

    startSlideshow();

});