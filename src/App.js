import { useState } from "react";
//import "styled-components/macro";
import "./App.css";

import { Item } from "./Item";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Kiwi",
  "Lemon",
  "Pear",
  "Pineapple"
];



function App() {
  const [isVisible, setVisible] = useState(false)
  return (
    <>
    <div
      style={{
        width: '350px',
        margin: 'auto',
        overflow: 'hidden',
        color: '#1c1c1c',
        background: '#aaccde'
      }}
    >
      {console.log(isVisible)}
      
        {fruits.map((fruit, index) => {
          return (
            <Item
              isVisible={isVisible}
              index={index}
              name={fruit}
            />
          )
        })}
    </div>
    <div style={{textAlign: 'center'}}>
      <button style={{width: '350px', padding: '10px', marginTop: '15px'}} onClick={() => setVisible(!isVisible)}>
          TOGGLE
        </button>
        </div>
        </>
  );
}

export default App;
