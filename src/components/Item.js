import React, { useState } from "react";

function Item({ name, category }) {
  let [add, setAdd] = useState("");

  function changeStatus() {
    setAdd((add) => (add === "" ? "in-cart" : ""));
  }

  return (
    <li className={add}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeStatus}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
