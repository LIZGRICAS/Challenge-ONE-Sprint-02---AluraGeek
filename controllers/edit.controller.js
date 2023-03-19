
const textDescription = card.querySelector('[data-description]')

textDescription.style.display = 'none';

 /* editar producto */
 iconEdit.addEventListener("click", () => {
    const id = iconEdit.id;
    
    productsServices.detailProduct(id)
    .then((data) => {
      data.forEach(({ imageUrl, name, price, description}) => {
        Swal.fire({
          title: 'Edit Form',
          html: `<form class="main__form">
          <h3 class="main__title">Editar Producto</h3>
          <div class="main__field" type="url"
          required
          data-imgUrl>
              ${imageUrl}
          </div>
          <div class="main__field">
            <select name="Categoria" id="lang" class="main__input"
            required
            data-category>
              <option selected >Categoria</option>
              <option value="Star Wars">Star Wars</option>
              <option value="Consolas">Consolas</option>
              <option value="Diversos">Diversos</option>
            </select>
          </div>
          <div class="main__field"type="text"
          required
          data-name>
              ${name}
          </div>
          <div class="main__field" type="number"
          step="any"
          required
          data-price>
              ${price}
          </div>
          <div class="main__field">  
            <textarea
            class="main__input"
            name="message"
            id="message"
            cols="30"
            rows="3"
            required
            data-description
            > ${description}</textarea>
          </div>
        </form>`,
          confirmButtonText: 'Editar producto',
          focusConfirm: false,
          preConfirm: () => {
            const imageUrL = Swal.getPopup().querySelector('[data-imageUrL]').value
            const name = Swal.getPopup().querySelector('[data-name]').value
            const price = Swal.getPopup().querySelector('[data-price]').value
            const description = Swal.getPopup().querySelector('[data-description]').value
            if (!imageUrL || !name || !price || !description) {
              Swal.showValidationMessage(`Por favor rellene todos los campos`)
            }
            return { imageUrL: imageUrL, name: name, price: price, description: description }
          }
        }).then((result) => {
          if (result.isConfirmed) {
              productsServices
              .updateProduct(imageUrL, name, price, description).then(respuesta => {
              console.log(respuesta);
              window.location.href = "../screens/products.html"
            }).catch((error) => console.log("Ocurrió un error"));}
          });
      })
    });
  })

  /* editar producto */
  iconEdit.addEventListener("click", () => {
    const id = iconEdit.id;

    Swal.fire({
      title: "Editar Producto",
      htmlPosition: "center",
      showCancelButton: true,
      html: `<form class="main__form" style="width:100%;">
                <div class="main__field">
                  <textarea
                  class="main__input"
                  id="nombre"
                  type="url"
                  required
                  data-imgUrl
                  >${imageUrl}</textarea>
                </div>
          <div class="main__field">
            <select name="Categoria" id="lang" class="main__input"
            required
            data-category>
              <option selected >Categoria</option>
              <option value="Star Wars">Star Wars</option>
              <option value="Consolas">Consolas</option>
              <option value="Diversos">Diversos</option>
            </select>
          </div>
          <div class="main__field">
            <textarea
            class="main__input"
            id="nombre"
            type="text"
            required
            data-name
            >${name}</textarea>
          </div>
          <div class="main__field">
            <textarea
            class="main__input"
            id="nombre"
            type="number"
            step="any"
            required
            data-price
            >${price}</textarea>
          </div>
          <div class="main__field">  
            <textarea
            class="main__input"
            name="message"
            id="message"
            cols="30"
            rows="3"
            placeholder=""
            required
            data-description
            >${description}</textarea>
          </div>
      </form>`,
      confirmButtonText: "Editar producto",
      focusConfirm: false,
      preConfirm: () => {
        const imageUrl = Swal.getPopup().querySelector("[data-imgUrl]").value;
        const name = Swal.getPopup().querySelector("[data-name]").value;
        const price = Swal.getPopup().querySelector("[data-price]").value;
        const description = Swal.getPopup().querySelector("[data-description]").value;
        if (!imageUrl || !name || !price || !description) {
          Swal.showValidationMessage(`Por favor rellene todos los campos`);
        }
        return {
          imageUrl: imageUrl,
          name: name,
          price: price,
          description: description,
              };
        },
      }).then((result) => {
        Swal.fire(`
          imageUrl: ${result.value.imageUrl}
          name: ${result.value.name}
          price: ${result.value.price}
          description: ${result.value.description}
        `.trim())
      })
  })

    /* editar producto */
 iconEdit.addEventListener("click", () => {
  const id = iconEdit.id;
  
  productsServices.detailProduct(id)
  .then((data) => {
    data.forEach(({ imageUrl, name, price, description}) => {
      Swal.fire({
        title: 'Editar Producto',
        html: `<form class="main__form">
        <h3 class="main__title">Editar Producto</h3>
        <div class="main__field" type="url"
        required
        data-imgUrl>
            ${imageUrl}
        </div>
        <div class="main__field">
          <select name="Categoria" id="lang" class="main__input"
          required
          data-category>
            <option selected >Categoria</option>
            <option value="Star Wars">Star Wars</option>
            <option value="Consolas">Consolas</option>
            <option value="Diversos">Diversos</option>
          </select>
        </div>
        <div class="main__field"type="text"
        required
        data-name>
            ${name}
        </div>
        <div class="main__field" type="number"
        step="any"
        required
        data-price>
            ${price}
        </div>
        <div class="main__field">  
          <textarea
          class="main__input"
          name="message"
          id="message"
          cols="30"
          rows="3"
          required
          data-description
          > ${description}</textarea>
        </div>
      </form>`,
        confirmButtonText: 'Editar producto',
        focusConfirm: false,
        preConfirm: () => {
          const imageUrL = Swal.getPopup().querySelector('[data-imageUrL]').value
          const name = Swal.getPopup().querySelector('[data-name]').value
          const price = Swal.getPopup().querySelector('[data-price]').value
          const description = Swal.getPopup().querySelector('[data-description]').value
          if (!imageUrL || !name || !price || !description) {
            Swal.showValidationMessage(`Por favor rellene todos los campos`)
          }
          return { imageUrL: imageUrL, name: name, price: price, description: description }
        }
      }).then((result) => {
        if (result.isConfirmed) {
            productsServices
            .updateProduct(imageUrL, name, price, description).then(respuesta => {
            console.log(respuesta);
            window.location.href = "../screens/products.html"
          }).catch((error) => console.log("Ocurrió un error"));}
        });
    })
  });
})

then((result) => {
  if (result.isConfirmed) {
    const editProduct = JSON.parse({imageUrl, name, price, id, description})
    productsServices.updateProduct(editProduct)
  } else if (result.isDenied) {
    Swal.fire("Cambios no fueron guardados")
  }
}


then((data) => {
  data.forEach((imageUrl, name, price, id, description)=>{
    const editProduct = JSON.parse({imageUrl, name, price, id, description})
    productsServices.updateProduct(editProduct)
  })
})