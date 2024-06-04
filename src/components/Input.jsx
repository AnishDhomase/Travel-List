import { useState } from "react";

export default function Input({ onAddItem }) {
  const [itemCount, setItemCount] = useState(null);
  const [itemName, setItemName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!itemName || !itemCount) {
      if (!itemName && !itemCount) alert("Please enter Item Name and Count!");
      else if (!itemName) alert("Please enter Item Name!");
      else alert("Please enter Item Count!");
      return;
    }
    onAddItem({
      id: new Date(),
      description: itemName,
      quantity: itemCount,
      packed: false,
    });
    setItemCount(1);
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
