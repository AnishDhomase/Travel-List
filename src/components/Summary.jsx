export default function Summary({ itemList }) {
  const numberOfItems = itemList.length;
  const numberOfCheckedItems = itemList.filter((item) => item.packed).length;
  const percentagePacked =
    numberOfItems === 0
      ? 0
      : Math.round((numberOfCheckedItems / numberOfItems) * 100);
  return (
    <footer>
      {percentagePacked === 100 && "You have checked all the items!"}
      {numberOfItems === 0 && "Start adding the items!"}
      {percentagePacked !== 100 &&
        numberOfItems !== 0 &&
        `You have added ${numberOfItems} items, out of them ${numberOfCheckedItems}
      are checked (${percentagePacked} %)`}
    </footer>
  );
}
