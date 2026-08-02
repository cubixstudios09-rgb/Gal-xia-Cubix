
const planetas = document.querySelectorAll(".planeta");

planetas.forEach((planeta) => {
    planeta.addEventListener("click", () => {
        alert("Abrindo o portal...");
    });
});
