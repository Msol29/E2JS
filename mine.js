const input = document.getElementById("input");
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");
const btn = document.getElementById("btn");
const imgg = document.querySelector("#imgg");
const form = document.querySelector("form");

class pizza {
    constructor(ID, nombre, ingredientes, precio, img) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
        this.img = img
    }

}

let pizzas = [muzzarella = new pizza(`1`, `Muzzarella`, ingredientes = [`tomate`, `muzzarella`, `oregano`], 800, `muzza.JPG`),
especial = new pizza(`2`, `Especial`, ingredientes = [`tomate`, `muzzarella`, `jamon`, `huevo`], 1000, `ezpecial.JPG`),
cuatroQuesos = new pizza(`3`, `Cuatro Quesos`, ingredientes = [`tomate`, `muzzarella`, `parmesano`, `provolone`, `barra`], 1200, `cuatroquesos.JPG`),
palmitos = new pizza(`4`, `Palmitos`, ingredientes = [`tomate`, `muzzarella`, `palmitos`, `salas golf`], 1300, `pizzapalmitos.JPG`),
anana = new pizza(`5`, `Anana`, ingredientes = [`tomate`, `muzzarella`, `anana`, `azucar morena`], 1500, `pizzaanana.JPG`),
sinQueso = new pizza(`6`, `Sin Queso`, ingredientes = [`tomate`, `oregano`], 500, `pizzatoma.JPG`),
]

// guardo el array en el localStorage
const saveLocalStorage = (pizzas) => {
    localStorage.setItem('pizzas2', JSON.stringify(pizzas))
};
saveLocalStorage(pizzas)

// Recupero el array del localStorage
let getPizzas = JSON.parse(localStorage.getItem('pizzas2'))

//recupero última busqueda
const getLS = JSON.parse(localStorage.getItem('search'))

// Estado inicial del programa
const init = () => {
    input.value = getLS;
    input.value <= pizzas.length && input.value > 0 ? renderPizza(input.value) : input.value == "" ? error("Debe ingresar un ID") : error("ID invalido");
    console.log(getLS);
    input.value = "";
}

init();

//  renderizar pizza
function renderPizza(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        h2.innerHTML = `${piza.nombre}`;
        h4.innerHTML = `$ ${piza.precio}`;
        h42.innerHTML = `${piza.ingredientes.join(", ")}`;
        imgg.setAttribute("src", `./muestra/${piza.img}`);
    }


}


// Función que se ejecuta si el resultado es erroneo
function error(mesage) {

    h2.innerHTML = mesage;
    h4.innerHTML = ``;
    h42.innerHTML = ``;
    imgg.setAttribute("src", `./mjerrore/mjeerror.JPG`);

}



// acción del boton
btn.addEventListener('click', button)

//Función que guarda la última busqueda en el localStorage
const saveLS = (searched) => {
    localStorage.setItem('search', JSON.stringify(searched))
};


function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? renderPizza(inputID) : inputID == "" ? error("Debe ingresar un ID") : error("ID invalido");
    saveLS(input.value);
    input.value = ""

}


