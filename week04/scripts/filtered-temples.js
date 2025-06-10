const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  // Additional temples
  {
    templeName: "Atlanta Georgia Temple",
    location: "Sandy Springs ,Atlanta ,Georgia ,United states",
    dedicated: "1985, August, 24",
    area: 16484,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/800x500/Paris-Temple02.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("templeGallery");

    function displayTemples(filteredTemples) {
        gallery.innerHTML = ""; // Clear current display
        filteredTemples.forEach(temple => {
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let caption = document.createElement("figcaption");

            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";

            caption.innerHTML = `<strong>${temple.templeName}</strong><br>${temple.location}<br>Dedicated: ${temple.dedicated}<br>Area: ${temple.area} sq ft`;

            figure.appendChild(img);
            figure.appendChild(caption);
            gallery.appendChild(figure);
        });
    }

    // Display all temples initially
    displayTemples(temples);

    // Navigation filtering
    document.getElementById("home").addEventListener("click", () => displayTemples(temples));
    document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900)));
    document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000)));
    document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
    document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

    // Footer Date Updates
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
