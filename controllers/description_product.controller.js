/* los controladores reciben los datos arrojados por la API, para trabajar la interaccion entre el html y el js, tiene la estructura de los datos que serán almacenados en el servidor, en este caso para exhibir los atributos del producto */

import { productsServices } from "../service/products-service.js";
/* se importan la llamada (variable y el método), que permitirá manipular los datos generados en la API con el CRUD */

const loadProduct = (imageUrl, name, price, description, id) => {
  const card = document.createElement("div");
  const content = `
    <div class="container container_star">
        <div class="product__img">                
            <img
            src="${imageUrl}"
            alt="Imagen Product"
            />
        </div>
        <div class="product__content">
                <h2 class="product__title">${name}</h2>
                <p class="product__price">${price}</p>
                <p class="product__description">${description}</p>
                <h3 class="card__title">Ref:${id}</h3>
        </div>      
    </div>`;

  card.innerHTML = content;
  
  return card;
}

const btnView = document.querySelector('[data-View]');

btnView.addEventListener('click', (e)=> {
    /* método preventDefault indica que el elemento (en este caso el btnSubmit) no funcione como deberia */
    e.preventDefault();

    const IdProduct = document.getElementsByClassName('card_id').id;   

    location.replace('../screens/product.htm');

const divProductDescrip = document.querySelector("[data-productDescripton]");

productsServices
.detailProduct(id)
  .then((data) => {
    data.forEach(({ id }) => {
      const dateCard = loadProduct(imageUrl, name, price, description, id);
      divProductDescrip.appendChild(dateCard);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
});
