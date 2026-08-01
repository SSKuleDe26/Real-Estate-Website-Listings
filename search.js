class Property {

    constructor(name, type, city, bedrooms, bathrooms, garage, price, image) {

        this.name = name;
        this.type = type;
        this.city = city;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garage = garage;
        this.price = price;
        this.image = image;

    }

}

const properties = [

    new Property(
        "Cozy Family Home",
        "House",
        "Orlando",
        3,
        2,
        1,
        "$350,000",
        "images/cozy_family_home.jpg"
    ),

    new Property(
        "Modern Apartment",
        "Apartment",
        "Miami",
        2,
        1,
        1,
        "$250,000",
        "images/modern_apartment.jpg"
    ),

    new Property(
        "Luxury Villa",
        "Villa",
        "Orlando",
        5,
        4,
        3,
        "$1,250,000",
        "images/luxury_villa.jpg"
    ),

    new Property(
        "Country Cottage",
        "House",
        "Tampa",
        4,
        3,
        2,
        "$475,000",
        "images/cottage.jpg"
    ),

    new Property(
        "Modern Duplex",
        "Condo",
        "Miami",
        2,
        2,
        2,
        "$540,000",
        "images/duplex.jpg"
    )

];

function searchProperties() {

    const city =
        document.getElementById("city")?.value || "";

    const type =
        document.getElementById("type")?.value || "";

    const bedrooms =
        document.getElementById("bedrooms")?.value || "";

    const bathrooms =
        document.getElementById("bathrooms")?.value || "";

    const garage =
        document.getElementById("garage")?.value || "";

    const results =
        document.getElementById("results");

    if (!results) return;

    results.innerHTML = "";

    const filtered = properties.filter(property => {

        return (

            (city === "" || property.city === city)

            &&

            (type === "" || property.type === type)

            &&

            (bedrooms === "" || property.bedrooms == bedrooms)

            &&

            (bathrooms === "" || property.bathrooms == bathrooms)

            &&

            (garage === "" || property.garage == garage)

        );

    });

    if (filtered.length === 0) {

        results.innerHTML =

            "<h3 class='text-center text-danger'>No properties found.</h3>";

        return;

    }

    filtered.forEach(property => {

        results.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img src="${property.image}"

                class="card-img-top"

                alt="${property.name}">

                <div class="card-body">

                    <h4>${property.name}</h4>

                    <p><strong>Location:</strong> ${property.city}</p>

                    <p><strong>Type:</strong> ${property.type}</p>

                    <p>${property.bedrooms} Beds |
                    ${property.bathrooms} Baths |
                    ${property.garage} Garage</p>

                    <h5 class="text-success">${property.price}</h5>

                    <button
                     class="btn btn-primary mt-2"
                     onclick="viewProperty('${property.name}'); saveFavorite('${property.name}')">
                     Add to Favorites
                     </button>

                </div>

            </div>

        </div>

        `;

    });

}
function saveFavorite(propertyName) {

    const property = properties.find(p => p.name === propertyName);

    if (!property) return;

    localStorage.setItem(
        "favoriteProperty",
        JSON.stringify(property)
    );

    alert(propertyName + " added to favorites!");

}
function loadFavorite() {
    const savedProperty = localStorage.getItem("favoriteProperty");
    const image = document.getElementById("propertyImage");
    const title = document.getElementById("propertyName");
    const description = document.getElementById("propertyDescription");
    if (!savedProperty) {
        if (image) {

            image.src = "images/shrug.png";
            image.alt = "No Favorite Property";
            image.classList.add("placeholder-image");
            image.classList.remove("favorite-image");

        }
        if (title) {

            title.textContent = "No Favorite Saved";

        }
        if (description) {

            description.innerHTML =
                'Visit the Search page and click <strong>Add to Favorites</strong>.';
        }
        return;
    }
    const property = JSON.parse(savedProperty);
    if (image) {

        image.src = property.image;
        image.alt = property.name;
        image.classList.remove("placeholder-image");
        image.classList.add("favorite-image");
    }
    if (title) {

        title.textContent = property.name;

    }
    if (description) {

        description.innerHTML = `
            <strong>Location:</strong> ${property.city}<br>
            <strong>Type:</strong> ${property.type}<br>
            <strong>Bedrooms:</strong> ${property.bedrooms}<br>
            <strong>Bathrooms:</strong> ${property.bathrooms}<br>
            <strong>Garage:</strong> ${property.garage}<br>
            <strong>Price:</strong> ${property.price}
        `;
    }
}
function viewProperty(propertyName) {

    localStorage.setItem(
        "recentProperty",
        propertyName
    );

}

function loadRecentProperty() {

    const display = document.getElementById("recentProperty");

    if (!display) return;

    const recent = localStorage.getItem("recentProperty");

    display.textContent = recent
        ? "Recently Viewed: " + recent
        : "Recently Viewed: None";

}
function clearFavorite() {
    localStorage.removeItem("favoriteProperty");
    const image = document.getElementById("propertyImage");
    const title = document.getElementById("propertyName");
    const description = document.getElementById("propertyDescription");
    if (image) {
        image.src = "images/shrug.png";
        image.alt = "No Favorite Property";
        image.classList.add("placeholder-image");
        image.classList.remove("favorite-image");
    }
    if (title) {
        title.textContent = "No Favorite Saved";
    }
    if (description) {
        description.innerHTML =
            'Visit the Search page and click <strong>Add to Favorites</strong>.';
    }
}
window.addEventListener("DOMContentLoaded", function () {

    loadFavorite();

    loadRecentProperty();

});