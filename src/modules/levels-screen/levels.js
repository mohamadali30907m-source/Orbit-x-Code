const home = document.getElementById('home');

home.addEventListener('click', () => {
  document.querySelectorAll("#title-screen").forEach(section => section.style.display = "block");
  document.querySelectorAll("#levels").forEach(section => section.style.display = "none");
});

const tooltip = document.getElementById("tooltip");

const lockedPlanets = document.querySelectorAll(".locked-planet");

lockedPlanets.forEach(planet => {

    planet.addEventListener("mouseenter", () => {
        tooltip.textContent = "This planet is locked!";
        tooltip.style.display = "block";
    });

    planet.addEventListener("mousemove", (event) => {
        tooltip.style.left = `${event.clientX + 15}px`;
        tooltip.style.top = `${event.clientY + 15}px`;
    });

    planet.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});