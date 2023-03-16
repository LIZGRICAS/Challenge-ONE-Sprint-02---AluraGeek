const login = () =>
fetch('http://localhost:3000/login').then((response) => response.json()).catch((err) => console.log(err));


const searchLogin = ( email, password ) => {
return fetch(`http://localhost:3000/login/${id}`, {
    /* GET obtener nuevo recurso */
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email,
    password,
    id,
    }),
});
}

/* buscar producto */
const detailProduct = async (id) => {
    fetch(`http://localhost:3000/products/${id}`).then((response) =>
        response.json()
    );
    };
      