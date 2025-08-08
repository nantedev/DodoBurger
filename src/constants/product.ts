import { MenuProduct } from "@/types/Product";

export const EMPTY_PRODUCT: MenuProduct = {
    id: "", 
    title: "",
    imageSource: "",
    price: 0,
    isAvailable: true,
    isPublicised: false,
  }
  

export const DEFAULT_TITLE = "NEW PRODUCT";
export const DEFAULT_IMAGE = "/images/coming-soon.png";
export const NO_STOCK_IMAGE = "/images/stock-epuise.png";


export const BASKET_MESSAGE = {
  EMPTY : "Votre commande est vide.",
  LOADING : "Chargement en cours... ",
  NOT_AVAILABLE: "Non disponible"
} as const  


export const DEFAUT_SUM_TO_PAY = 0;