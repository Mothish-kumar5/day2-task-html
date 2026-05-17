import React, { useState } from "react";
import "./styles.css";

function ProductList4() {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Keyboard" },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          className={hoveredId === product.id ? "active" : ""}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {product.name}
        </li>
      ))}
    </ul>
  );
}

export default ProductList4;