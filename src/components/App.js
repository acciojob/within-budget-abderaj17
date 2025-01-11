
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [budget, setBudget] = useState(0);

  const items = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Nutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "Sound Bar", price: 50 },
    { name: "iPhone", price: 80 },
  ];


  const handleInput = (e)=>{
   let value = parseInt(e.target.value, 10);
    setBudget(value || 0);
  }
  return (
    <div className="container">
     <h2>Enter your budget to check available items:</h2>
     <input type="number" placeholder="Enter your budget" onChange={handleInput} />

     <h4>Items you can buy are in Green color</h4>
     <br/>
     <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index)=>(
          <tr key={index}
          style={{
            color: item.price<= budget ? "green" : "red",
          }}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
  )
}

export default App
