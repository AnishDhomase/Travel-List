import { useState } from "react";

export default function Data({
  itemList,
  onDeleteItem,
  onItemtoggle,
  onClearItemList,
}) {
  const [sortOption, setSortOption] = useState("default");
  let sortedItems;
  if (sortOption === "default") sortedItems = itemList;
  else if (sortOption === "name") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="data">
      <ul className="list">
        {sortedItems.map((i) => (
          <li key={i.id}>
            <input
              type="checkbox"
              value={i.packed}
              onChange={() => onItemtoggle(i.id)}
            />
            <div className="rightSec">
              <span className={`itemName ${i.packed ? "line-through" : ""}`}>
                {i.quantity} {i.description}
              </span>
              <button onClick={() => onDeleteItem(i.id)} className="cross">
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form className="dataFormat">
        <select
          className="sort"
          value={sortOption}
          onChange={(ev) => setSortOption(ev.target.value)}
        >
          <option value="default">Sort by Default</option>
          <option value="name">Sort by Name</option>
          <option value="checked">Sort by Checked Status</option>
        </select>
        <button className="clear" onClick={onClearItemList}>
          Clear List
        </button>
      </form>
    </div>
  );
}
