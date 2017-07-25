function myFunction() {
    var x = document.getElementById("navTop");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}