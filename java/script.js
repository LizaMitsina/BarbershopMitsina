var link = Document.querySelector("login");
var popup = Document.querySelector("popup-bg");
var close = Document.querySelector("cross-small");

link.addEventListner( "click", (evt) => {
        evt.preventDefault();
        popup.style.display = "block";
    });

close.addEventListner( "click", (evt) => {
        evt.preventDefault();
        popup.style.display = "none";
    });
