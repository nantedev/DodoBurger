import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import {isAvailableOptions, isPublicisedOptions} from '../../../../../../../enums/select'
import { FiPackage } from 'react-icons/fi';
import { GoMegaphone } from 'react-icons/go';

export const getTextInputConfig = (newProduct) => [
    {
      id: "0",
      name: "title" ,
      value: newProduct.title ,
      type: "text" ,
      placeholder:"Nom du produit (ex: Super Dodo Burger)" ,
      Icon:<FaHamburger />,
      version:"minimalist",
      className: "title"
    },
    {
      id: "1",
      name:"imageSource" ,
      value: newProduct.imageSource ,
      type:"text" ,
      placeholder:"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon:<BsFillCameraFill />,
      version:"minimalist",
      className: "image-Source"
    },
    {
      id: "2",
      name:"price" ,
      value: newProduct.price ? newProduct.price : "" ,
      type:"text",
      placeholder:"Prix",
      Icon:<MdOutlineEuro />,
      version:"minimalist",
      className: "price"
    }
   ]

   export const getSelectInputConfig = (newProduct) => [
    {
      id: "3",
      name: "isAvailable" ,
      value: newProduct.isAvailable ,
      options: isAvailableOptions,
      Icon: <FiPackage/>,
      className: "is-available",
    },
    {
      id: "4",
      name:"isPublicised" ,
      value: newProduct.isPublicised ,
      options: isPublicisedOptions,
      Icon: <GoMegaphone/>,
      className: "is-publicised",
    },
  ]

