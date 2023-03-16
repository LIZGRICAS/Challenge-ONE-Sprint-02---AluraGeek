/* los controladores reciben los datos arrojados por la API, para trabajar la interaccion entre el html y el js, tiene la estructura de los datos que serán almacenados en el servidor, en este caso para exhibir los atributos del producto */

import { productsServices } from "../service/products-service.js";
/* se importan la llamada (variable y el método), que permitirá manipular los datos generados en la API con el CRUD */

const divProduct = document.querySelector("[data-product]");

const newProduct = (imageUrl, name, price, id) => {
  const card = document.createElement("div");
  const content = `
    <div class="category__card none">
        <img
        src="${imageUrl}"
        alt="Imagen Product"
        class="card__img"
        />
        <h3 class="card__title">${name}</h3>
        <p class="card__price">${price}</p>
        <div class="card_id-delete">
        <h3 class="card__title">Ref:${id}</h3>
        <i class="fa fa-pencil-square-o editicon icon" aria-hidden="true"></i>
        <i class="fas fa-trash-alt trashIcon icon" data-delete id="${id}"></i>
        </div>      
    </div>`;

  card.innerHTML = content;
  card.dataset.id = id;
  const iconDelete = card.querySelector('[data-delete]')
    /* ingresamos al método delete creado en el módulo productservices */
    iconDelete.addEventListener("click", () => {
      const id = iconDelete.id;
      productsServices
        .deleteProduct(id)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((err) => consolelog("Ocurrió un error"));
    });
  
  return card;
};

productsServices
.listProducts()
  .then((data) => {
    data.forEach(({ imageUrl, name, price, id }) => {
      const newCard = newProduct(imageUrl, name, price, id);
      divProduct.appendChild(newCard);
    });
  })
  .catch((error) => alert("Ocurrió un error"));