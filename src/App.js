import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <List />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>Travel List ✈️</h1>
    </div>
  );
}

function Form() {
  const [itemNumber, setItemNumber] = useState(0);
  const [itemName, setItemName] = useState("");

  function handleSubmit(ev) {
    console.log(ev.target[0].value, ev.target[1].value);
    setItemNumber(0);
    setItemName("");
    ev.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Item Number ..."
        value={itemNumber}
        type="number"
        onChange={(ev) => setItemNumber(Number(ev.target.value))}
      />
      <input
        placeholder="Item Name ..."
        value={itemName}
        type="text"
        onChange={(ev) => setItemName(ev.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function List() {
  return (
    <div>
      <ul>
        <li>
          <span>Item 1</span>
          <span>❌</span>
        </li>
        <li>
          <span>Item 2</span>
          <span>❌</span>
        </li>
        <li>
          <span>Item 3</span>
          <span>❌</span>
        </li>
      </ul>
      <footer>List Summary</footer>
    </div>
  );
}

export default App;
