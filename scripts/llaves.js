import Llave from "./moldeKeys.js";
const audi = new Llave('Audi', 'A3', 2006, 'hu66', 'https://img.milanuncios.com/fg/2217/81/221781923_1.jpg');
const bmw = new Llave('Bmw', 'E46', 2001, 'hu92', 'https://www.reparamandos.com/wp-content/uploads/2017/08/Llave-Mando-a-Distancia-BMW-E83-300x300.jpg');


const elem = document.getElementById('curso')

function mostrarllaves(llaves) {
    const hijo = document.createElement('div')
    hijo.innerHTML = `
    <div>
        <img src="${llaves.imagen}"></img>
        <h3>${llaves.marca}</h3>
        <h3>${llaves.modelo}</h3>
        <h3>${llaves.perfil}</h3>
        <h3>${llaves.año}</h3>
    </div>
    `
    elem.appendChild(hijo)
}

const formulario = document.getElementById('formCursos')
formulario.addEventListener('submit', e => {
    e.preventDefault()
    const target = e.target
    const curso = new Llave(target.marcaCurso.value, target.modeloCurso.value, target.añoCurso.value, target.perfilCurso.value)
    mostrarllaves(curso)
    formulario.reset()
})