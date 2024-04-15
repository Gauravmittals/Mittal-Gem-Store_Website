// header gemstone button ->Gemstone page


document.getElementById('navbarDropdownMenuLink').addEventListener('click', function() {
    window.location.href = 'gemstone.html';
});



// When the function is called, it adds the flip class if it's not present, and removes it if it's already present.
function flipCard(card) {
    card.classList.toggle('flip');
}




// picture toogling 
 const bigImage = document.getElementById("bigImage");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', function() {
        thumbnail.style.border = '2px solid green';
    });

    thumbnail.addEventListener('mouseout', function() {
        thumbnail.style.border = 'none';
    });

    thumbnail.addEventListener('click', function() {
        bigImage.src = thumbnail.src;
    });
});