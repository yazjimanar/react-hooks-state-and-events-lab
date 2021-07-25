import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All");
  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }
  const productToDisplay = items.filter((items) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return items.category === selectedCategory;
    }
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {productToDisplay.map((productToDisplay) => (
          <Item
            key={productToDisplay.id}
            name={productToDisplay.name}
            category={productToDisplay.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
