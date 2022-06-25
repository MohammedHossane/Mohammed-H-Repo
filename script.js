function myFunction(){
    var x = document.getElementById("togglediv");
    if (x.innerHTML === "HELLOO") {
        x.innerHTML = "NOW THIS IS DIFFERENT BECAUSE JAVASCRIPT";
    } else {
        x.innerHTML = "HELLOO";
    }
}