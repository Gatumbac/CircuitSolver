const resistances = document.querySelectorAll(".resistance");
resistances.forEach(resistance => {
    resistance.addEventListener('input', (e) => {
        const value = document.querySelector("#rval" + e.target.dataset.id);
        value.textContent = e.target.value + " (Ω)";
    })
})

const volt = document.querySelector("#volt");
volt.addEventListener('input', (e) => {
    const value = document.querySelector("#vval");
    value.textContent = e.target.value + " (V)";
})

const form = document.querySelector("#form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Resultado: 5000(A)",
        text: "Corriente Total Calculada!",
        imageUrl: "../img/ampere1.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Imagen de corriente"
    });
})
