document.addEventListener('DOMContentLoaded', start);
const resistances = document.querySelectorAll(".resistance");
const volt = document.querySelector("#volt");

function start() {
    addResistancesListener();
    addVoltageListener();
    addFormListener();
}

function addResistancesListener() {
    resistances.forEach(resistance => {
        resistance.addEventListener('input', (e) => {
            const value = document.querySelector("#rval" + e.target.dataset.id);
            value.textContent = (parseFloat(e.target.value) / 1000).toFixed(1) + " (kΩ)";
        })
    })
}

function addVoltageListener() {
    volt.addEventListener('input', (e) => {
        const value = document.querySelector("#vval");
        value.textContent = e.target.value + " (V)";
    })
}

function addFormListener() {
    const form = document.querySelector("#form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const totalCurrent = calculateTotalCurrent();
        Swal.fire({
            title: `Resultado: ${totalCurrent}(mA)`,
            text: "Corriente Total Calculada!",
            imageUrl: "/CircuitSolver/img/ampere1.png",
            //imageUrl: "../img/ampere1.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Imagen de corriente"
        });
    })
}

function getResistancesArray() {
    const resistancesArray = Array.from(resistances);
    return resistancesArray.map(resistance => parseInt(resistance.value));
}

function calculateTotalCurrent() {
    const resistancesArray = getResistancesArray();
    resEq1 = resistancesArray[0] + resistancesArray[1];
    resEq2 = resistancesArray[2] + resistancesArray[3];
    resEq3 = resistancesArray[5] + resistancesArray[6];
    resEq4 = (resistancesArray[7] * resistancesArray[8]) / (resistancesArray[7] + resistancesArray[8]);
    resEq5 = (resistancesArray[4] * resEq3) / (resistancesArray[4] + resEq3);
    resEq6 = resEq5 + resEq4;
    resEq7 = (resEq2 * resEq6) / (resEq2 + resEq6);
    resEq8 = resEq1 + resEq7;
    totalCurrent = parseInt(volt.value) / resEq8;
    return convertToMiliamperes(totalCurrent);
}

function convertToMiliamperes(amperes) {
    const miliamperes = amperes * 1000;
    return miliamperes.toFixed(2);
}


