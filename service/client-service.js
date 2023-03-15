/* recibe la respuesta del controlador y la genera en un json; realiza la comunicacion con el servidor */

const listProducts = () =>
    fetch('http://localhost:3000/products').then((respuesta) => respuesta.json());

    /* los Fetch API, nos permiten conectarnos con el servidor, optener y enviar informacion */

    const createProduct = (name, price, image, category, description, id) => {
        return fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            image,
            category,
            description,
            id,
          }),
        });
      };
      
      const deleteProduct = (id) => {
        return fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        });
      };
      
      const detailProduct = async (id) => {
        return fetch(`http://localhost:3000/products/${id}`).then((resp) =>
          resp.json()
        );
      };
      
      const updateProduct = (name, price, image, id, category, description) => {
        return fetch(`http://localhost:3000/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            image,
            category,
            description,
          }),
        })
          .then((resp) => resp)
          .catch((err) => console.log(err));
      };
      
      export const clientServices = {
        listProducts,
        createProduct,
        deleteProduct,
        detailProduct,
        updateProduct,
      };