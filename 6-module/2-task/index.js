export default class ProductCard {
  constructor(product) {
    let rootCard = document.createElement('div');
    rootCard.className = 'card';
    ////////////////////////TOP////////////////////
    let cardTop = document.createElement('div');
    cardTop.className = 'card__top';
    let topImg = document.createElement('img');
    topImg.src = `/assets/images/products/${product.image}`;
    topImg.alt = "product";
    topImg.className = 'card__image';
    let topSpan = document.createElement("span");
    topSpan.className = 'card__price';
    topSpan.innerText = `€${product.price.toFixed(2)}`;
    ////////////////////////////////////////////////
    cardTop.appendChild(topImg);
    cardTop.appendChild(topSpan);
    ////////////////////////BODY///////////////////
    let cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    let bodyTitle = document.createElement("div");
    bodyTitle.className = 'card__title';
    bodyTitle.innerText = product.name;
    let bodyImage = document.createElement("img");
    bodyImage.src = "/assets/images/icons/plus-icon.svg";
    bodyImage.alt = "icon";
    let bodyButton = document.createElement("button");
    bodyButton.className = "card__button";
    bodyButton.type = 'button';
    bodyButton.onclick = (event) => {
      event.target.dispatchEvent(new CustomEvent("product-add", {
        detail: product.id,
        bubbles: true
      }));
    };
    bodyButton.appendChild(bodyImage);
    cardBody.appendChild(bodyTitle);
    cardBody.appendChild(bodyButton);
    ///////////////////////////////////////////////
    rootCard.appendChild(cardTop);
    rootCard.appendChild(cardBody);
    this.elem = rootCard;
  }
}
