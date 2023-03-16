import { clientServices } from "../service/client-service";


const formulario = document.querySelector("[data-form]")

formulario.addEvenListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("[data-email]").value; /* capturar el valor de este input */
    const password = document.querySelector("[data-password").value;
    /* creacion de la promesa-promise */
    clientServices
    .searchLogin (email,password)
    .then((response) => {
        return window.location.href = "../screens/new_product.html"
    })
    .cathc((err) => console.log(err));
})