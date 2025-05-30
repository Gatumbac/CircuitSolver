const resistances = document.querySelectorAll(".resistance");
resistances.forEach(resistance => {
    resistance.addEventListener('input', (e) => {
        const value = document.querySelector("#rval" + e.target.dataset.id);
        value.textContent = e.target.value + " (Ω)";
    })
})

const form = document.querySelector("#form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
