const input = document.getElementById("input");
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");
const btn = document.getElementById("btn");


class pizza {
    constructor(ID, nombre, ingredientes, precio) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }

}

let pizzas = [muzzarella = new pizza(`1`, `Muzzarella`, ingredientes = [`tomate`, `muzzarella`, `oregano`], 800),
    especial = new pizza(`2`, `Especial`, ingredientes = [`tomate`, `muzzarella`, `jamon`, `huevo`], 1000),
    cuatroQuesos = new pizza(`3`, `Cuatro Quesos`, ingredientes = [`tomate`, `muzzarella`, `parmesano`, `probolone`, `barra`], 1200),
    palmitos = new pizza(`4`, `Palmitos`, ingredientes = [`tomate`, `muzzarella`, `palmitos`, `salas golf`], 1300),
    anana = new pizza(`5`, `Anana`, ingredientes = [`tomate`, `muzzarella`, `anana`, `azucar morena`], 1500),
    sinQueso = new pizza(`6`, `Sin Queso`, ingredientes = [`tomate`, `oregano`], 500),
]


const saveLocalStorage = (pizzas) => {
    localStorage.setItem('pizzas2', JSON.stringify(pizzas))
};
saveLocalStorage(pizzas)

let getPizzas = JSON.parse(localStorage.getItem('pizzas2'));


btn.addEventListener('click', button)


function filtro(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        h2.innerHTML = `${piza.nombre}`;
        h4.innerHTML = `${piza.precio}`;
    }
}

function error() {

    h2.innerHTML = `Sin stock`;
    h4.innerHTML = ``;

}

function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? filtro(inputID) : error();
}