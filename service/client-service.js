const listClients = () =>
fetch('http://localhost:3000/client').then((response) => response.json()).catch((err) => console.log(err));


const createClient = ( email, message) => {
return fetch("http://localhost:3000/client", {
    /* POST crear nuevo recurso, si no se especifica por default se implementa el metodo GET */
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email,
    message,
    id: uuid.v4(), /* se implementa función del script importado de la pàg uuid para generar un id único automáticamente */
    }),
});
}
      

/* se exportan los módulos creados */
      export const clientServices = {
        listClients,
        createClient
      };