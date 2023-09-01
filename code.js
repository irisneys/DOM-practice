
const h1 =  document.querySelector('h1');

const form = document.querySelector('#form')

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector("#calculo2");

const btn = document.querySelector('#btnCalcular');

const pResult = document.querySelector("#result");

//la propiedad o metodo y debes pasarle dos argumento: 1. nombre del evento 2. el codigo JS que queremos ejecutar en este caso la funcion btnOnClick sin ()

btn.addEventListener('click', btnOnClick)

function btnOnClick() {
const sumaInput = +input1.value + +input2.value;

pResult.innerText = "El resultado es " + sumaInput;

}

/*
form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();// para que no se ejecute el tema de recargar la pagina y cambiar la url por ser un form si no que haga el resto que necesitamos
    const sumaInput = +input1.value + +input2.value;
    pResult.innerText = "El resultado es " + sumaInput;
}*/