document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });
    const propertyForm = document.getElementById("propertyForm");

    if (propertyForm) {

        propertyForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your information has been submitted.");

        });

    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Your message has been sent successfully!");

        });

    }

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (name) {

        name.value = localStorage.getItem("customerName") || "";

        name.addEventListener("input", function () {

            localStorage.setItem("customerName", name.value);

        });

    }

    if (email) {

        email.value = localStorage.getItem("customerEmail") || "";

        email.addEventListener("input", function () {

            localStorage.setItem("customerEmail", email.value);

        });

    }

    const message = document.getElementById("message");

    const selectedAgent = localStorage.getItem("selectedAgent");

    if (message && selectedAgent) {

        message.value =
            "Hello " +
            selectedAgent +
            ", I would like more information about one of your properties.";

    }

    displayRecentProperty();

});

function changeHeading() {

    const heading = document.getElementById("welcome");

    if (heading) {

        heading.innerHTML = "Today's Featured Properties";

    }

}

class Property {

    constructor(name, price, city) {

        this.name = name;
        this.price = price;
        this.city = city;

    }

    display() {

        return `${this.name} located in ${this.city} for ${this.price}`;

    }

}
const homes = [

    new Property(
        "Studio Apartment",
        "$250,000",
        "Miami"
    ),

    new Property(
        "Country Cottage",
        "$450,000",
        "Tampa"
    ),

    new Property(
        "Modern Mansion",
        "$950,000",
        "Orlando"
    ),

    new Property(
        "Luxury Villa",
        "$1,250,000",
        "Kissimmee"
    )

];

homes.forEach(home => {

    console.log(home.display());

});

function viewProperty(propertyName) {

    localStorage.setItem(
        "recentProperty",
        propertyName
    );

    displayRecentProperty();

}

function displayRecentProperty() {

    const display =
        document.getElementById("recentProperty");

    const recent =
        localStorage.getItem("recentProperty");

    if (display) {

        if (recent) {

            display.innerHTML =
                "<strong>Recently Viewed:</strong> " +
                recent;

        } else {

            display.innerHTML =
                "<strong>Recently Viewed:</strong> None";

        }

    }

}


function clearRecentProperty() {

    localStorage.removeItem("recentProperty");

    displayRecentProperty();

}
function savePreference() {

    const preference =
        document.getElementById("propertyPreference");

    if (!preference) return;

    localStorage.setItem(
        "favoritePropertyType",
        preference.value
    );

    const output =
        document.getElementById("savedPreference");

    if (output) {

        output.innerHTML =
            "Saved Preference: " +
            preference.value;

    }

}

function loadPreference() {

    const preference =
        document.getElementById("propertyPreference");

    const output =
        document.getElementById("savedPreference");

    if (!preference || !output) return;

    const saved =
        localStorage.getItem("favoritePropertyType");

    if (saved) {

        preference.value = saved;

        output.innerHTML =
            "Saved Preference: " + saved;

    }

}

window.addEventListener(
    "load",
    loadPreference
);
function welcomeUser() {

    const name =
        localStorage.getItem("customerName");

    if (name) {

        console.log(
            "Welcome back, " + name + "!"
        );

    }

}

window.addEventListener(
    "load",
    welcomeUser
);

function updateYear() {

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}

window.addEventListener(
    "load",
    updateYear
);

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}