const temaOscuro = () => {
    document.querySelector('body').setAttribute("data-bs-theme", "dark")
    document.querySelector('#dl-icon').setAttribute("class", "bi  bi-sun-fill text-warning")
    document.querySelector('#flexSwitchCheckDefault').setAttribute("checked", "checked")

}

const temaClaro = () => {
    document.querySelector('body').setAttribute("data-bs-theme", "light")
    document.querySelector('#dl-icon').setAttribute("class", "bi  bi-moon-stars-fill text-info")
    document.querySelector('#flexSwitchCheckDefault').removeAttribute("checked")
}



// const cambiarTema = () => {
//     if (document.querySelector('#flexSwitchCheckDefault').checked) {
//         temaOscuro()
//     } else {
//         temaClaro()
//     }
// }


// variable para guardar el estado del tema
let tema = localStorage.getItem('tema')

// conservar el estado del tema aun que haga refresh
if (tema === 'oscuro') {
    temaOscuro()
} else {
    temaClaro()
}

// cambiar el tema
const cambiarTema = () => {
    if (document.querySelector('#flexSwitchCheckDefault').checked) {
        temaOscuro()
        localStorage.setItem('tema', 'oscuro')
    } else {
        temaClaro()
        localStorage.setItem('tema', 'claro')
    }
}

// Path: index.html




