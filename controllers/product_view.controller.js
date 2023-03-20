import { productsServices } from "../service/products-service.js";

const divhero = document.querySelector("[data-hero]");
const containerProducts = document.querySelector("[data-products-index]");
const divProducts = document.querySelector("[data-products-body]");
const sectionDescriptionProduct = document.querySelector("[data-product-description]");
const sectionSimilarProduct = document.querySelector("[data-product-similar]");
const listSimilarProduct = document.querySelector("[data-product-list]");

sectionDescriptionProduct.style.display = 'none';
sectionSimilarProduct.style.display = 'none';


 const modelProducts = (imageUrl, name, price, id, description) => {
    const card = document.createElement("div");
    const content = `
      <div class="category__card none">
          <img
          src="${imageUrl}"
          alt="Imagen Product"
          class="card__img"
          data-imgUrl
          />
          <h3 class="card__title" data-name>${name}</h3>
          <p class="card__price" data-price>$ ${price}</p>
          <div>
          <h3 class="card__title" data-id id="${id}"> Ref: ${id}</h3>
          </div>        
          <div display="none" data-description>${description}</div> 
          <a href="·" class="card__link" data-icon-view id="${id}" >Ver Producto</a>    
      </div>`;
  
    card.innerHTML = content;
    const textDescription = card.querySelector('[data-description]')
    const iconView = card.querySelector('[data-icon-view]')
  
    textDescription.style.display = 'none';

    iconView.addEventListener("click", (e) => {
            e.preventDefault();
            
            const id = card.querySelector("[data-id]").id;   
            console.log("Se ha clickeado el id "+id);

            productsServices.detailProduct(id).then((response) => {

                console.log(response)
                    

                        const imageUrl = response.imageUrl;
                        const name = response.name;
                        const price = response.price;
                        const description = response.description;
                        const id = response.id;

                console.log (imageUrl, name,price,description,id) 
                
                        const cardProduct = document.createElement("div");
                        const contentProduct = `
                        <div class="container container_star">
                            <div class="product__img">                
                                <img
                                src=${imageUrl}
                                alt="Imagen Product"
                                />
                            </div>
                            <div class="product__content">
                                    <h2 class="product__title">${name}</h2>
                                    <p class="product__price"> $ ${price}</p>
                                    <p class="product__description">${description}</p>
                                    <h3 class="card__title"><strong>Ref:</strong> ${id}</h3>
                            </div>      
                        </div>`;
                    
                        cardProduct.innerHTML = contentProduct;

                        console.log (cardProduct) 

                        divhero.style.display = 'none';
                        containerProducts.style.display = 'none';
                        sectionDescriptionProduct.style.display = 'block';
                        sectionSimilarProduct.style.display = 'block';

                        
                    const divProductDescrip = document.querySelector("[data-product-description"); 

                    console.log (divProductDescrip)
                        
                    divProductDescrip.appendChild(cardProduct); 

                    productsServices
                    .listProducts()
                    .then((data) => {
                        data.forEach(({ imageUrl, name, price, id, description }) => {
                        const newCards = modelProducts(imageUrl, name, price, id, description);
                        listSimilarProduct.appendChild(newCards); 
                        });
                    })
                    .catch((error) => alert("Ocurrió un error"));

                  }).catch((err) => console.log(err));
                   
        })
    return card;
  }


  productsServices
      .listProducts()
      .then((data) => {
        data.forEach(({ imageUrl, name, price, id, description }) => {
          const newCards = modelProducts(imageUrl, name, price, id, description);
          divProducts.appendChild(newCards); 
        });
      })
      .catch((error) => alert("Ocurrió un error"));
  

/* const productSimilar = document.querySelector("[data-product-list]")

productsServices
    .listProducts()
    .then((data) => {
        data.forEach(({ imageUrl, name, price, id, description }) => {
        const newCards = modelProducts(imageUrl, name, price, id, description);
        productSimilar.appendChild(newCards);
        });
    })
    .catch((error) => alert("Ocurrió un error")); */