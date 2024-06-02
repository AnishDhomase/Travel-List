import { useState } from "react";
import Data from "./Data";
import Header from "./Header";
import Input from "./Input";
import Summary from "./Summary";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }
  function handleDeleteItem(itemIdToDelete) {
    setItemList((itemList) =>
      itemList.filter((item) => item.id !== itemIdToDelete)
    );
  }
  function handleItemToggle(itemId) {
    setItemList((itemList) =>
      itemList.map((item) =>
        item.id !== itemId
          ? item
          : {
              ...item,
              packed: !item.packed,
            }
      )
    );
  }
  function handleClearItemList() {
    const confirm = Boolean(
      window.confirm("Are you sure to delete all items in the list?")
    );
    window.preventDefault();
    console.log(confirm);
    if (confirm) setItemList([]);
  }

  return (
    <div className="app">
      <Header />
      <Input onAddItem={handleAddItem} />
      <Data
        itemList={itemList}
        onDeleteItem={handleDeleteItem}
        onItemtoggle={handleItemToggle}
        onClearItemList={handleClearItemList}
      />
      <Summary itemList={itemList} />
    </div>
  );
}
