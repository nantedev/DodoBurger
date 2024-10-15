export const EMPTY_PRODUCT = Object.freeze({
    id: "", 
    title: "",
    imageSource: "",
    price: 0,
    isAvailable: true,
    isPublicised: false,
  })

export const DEFAULT_TITLE = "NEW PRODUCT";
export const DEFAULT_IMAGE = "/public/images/coming-soon.png";
export const NO_STOCK_IMAGE = "/public/images/stock-epuise.png";

export const BASKET_MESSAGE = {
  EMPTY : "Votre commande est vide.",
  LOADING : "Chargement en cours... ",
}