const planetas = document.querySelectorAll(".planeta");

planetas.forEach((planeta) => {
    planeta.addEventListener("click", () => {
        alert("Portal iniciado.");
    });
});
