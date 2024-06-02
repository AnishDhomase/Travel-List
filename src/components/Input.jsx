import { useState } from "react";

export default function Input({ onAddItem }) {
  const [itemCount, setItemCount] = useState(0);
  const [itemName, setItemName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!itemName) {
      alert("Please enter Item Name!");
      return;
    }
    onAddItem({
      id: new Date(),
      description: itemName,
      quantity: itemCount,
      packed: false,
    });
    setItemCount(0);
    setItemName("");
  }

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Item Count"
        className="count"
        value={itemCount}
        onChange={(ev) => setItemCount(Number(ev.target.value))}
      />
      <input
        type="text"
        placeholder="Item Name"
        className="name"
        value={itemName}
        onChange={(ev) => setItemName(ev.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
