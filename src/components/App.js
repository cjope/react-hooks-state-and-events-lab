import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isOn, setIsOn] = useState(false)
  
  
  const appClass = isOn ? "App dark" : "App light"
  const darkButton = isOn ? "Light" : "Dark"

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Switch to {darkButton} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
