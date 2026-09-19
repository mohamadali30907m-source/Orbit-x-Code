const homeButton = document.getElementById("home2");

homeButton.addEventListener("click", () => {
    document.getElementById("about").style.display = "none";
    document.getElementById("title-screen").style.display = "flex";
    console.log("works");
});