/* los controladores reciben los datos arrojados por la API, para trabajar la interaccion entre el html y el js, tiene la estructura de los datos que serán almacenados en el servidor, en este caso para exhibir los atributos del producto */

import { productsServices } from "../service/products-service.js";
/* se importan la llamada (variable y el método), que permitirá manipular los datos generados en la API con el CRUD */

const divProduct = document.querySelector("[data-product]");


const modelProduct = (imageUrl, name, price, id) => {
  const card = document.createElement("div");
  const content = `
    <div class="category__card none">
        <img
        src="${imageUrl}"
        alt="Imagen Product"
        class="card__img"
        />
        <h3 class="card__title">${name}</h3>
        <p class="card__price">$ ${price}</p>
        <div class="card_id-delete">
        <h3 class="card__title">Ref:${id}</h3>
        <i class="fa fa-pencil-square-o editicon icon" aria-hidden="true"></i>
        <i class="fas fa-trash-alt trashIcon icon" data-delete id="${id}"></i>
        </div>      
    </div>`;

  card.innerHTML = content;
  const iconDelete = card.querySelector('[data-delete]')
    /* ingresamos al método delete creado en el módulo productservices */
    iconDelete.addEventListener("click", () => {
      const id = iconDelete.id;
      Swal.fire({
        title: "Estas seguro?",
        text: `Estás seguro de eliminar el producto ${name}? Esta acción es irreversible!`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo!",
      }).then((result) => {
        if (result.isConfirmed) {
          productsServices
            .deleteProduct(id)
            .then((respuesta) => {
              console.log(respuesta);
            })
            .catch((error) => alert("Ocurrio un error al momento de eliminar"));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto ha sido eliminado",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(function () {
            const clearContent = ``;
            products.innerHTML = clearContent;
            showProducts();
          }, 1700);
        }
      });
    });
  
  return card;
};

productsServices
.listProducts()
  .then((data) => {
    data.forEach(({ imageUrl, name, price, id }) => {
      const newCard = modelProduct(imageUrl, name, price, id);
      divProduct.appendChild(newCard);
    });
  })
  .catch((error) => alert("Ocurrió un error"));