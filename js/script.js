var link = document.querySelector(".open");
var popup = document.querySelector(".popup-bg");
var close = document.querySelector(".cross-small");

console.log(link);

link.addEventListener( "click", (evt) => {
        evt.preventDefault();
        popup.style.display = "block";
    
    });

close.addEventListener( "click", (evt) => {
        evt.preventDefault();
        popup.style.display = "none";
    });
