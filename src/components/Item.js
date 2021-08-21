import React,{useState} from "react";

function Item({ name, category }) {

  const [setInCart, setIsInCart] = useState(false)

  function handleClick(){
    setIsInCart((setInCart) => !setInCart)
  }

  const buttonText = setInCart ? "Remove from Cart" : "Add to Cart"
  const listClass = setInCart ? "in-cart" : ""
  const buttonClass = setInCart ? "remove" : "add"
  // const spanClass = setInCart ? "category" : ""

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className={"category"}>{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
