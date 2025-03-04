import React, { useState } from "react";
import "../styles/productStock.css"; // Import the CSS file for styling
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaRegEdit } from "react-icons/fa"; // Icons for edit and delete
import { HiOutlineTrash } from "react-icons/hi";
import aws4 from "../assets/aws4.png";
import cam from "../assets/cam.png";
import mh from "../assets/mh.png";
import sa50 from "../assets/sa50.png";
import wd from "../assets/wd.png";

const ProductStock = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState([
    {
      name: "Apple Watch Series 4",
      category: "Digital Product",
      price: "$690.00",
      stock: 63,
      image: aws4,
      colors: ["#000000", "#d0c8c0", "#f3d8e0"],
    },
    {
      name: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      stock: 13,
      image: mh,
      colors: ["#000000", "#0078d4", "#f0f0f0", "#ffd700"],
    },
    {
      name: "Women's Dress",
      category: "Fashion",
      price: "$640.00",
      stock: 635,
      image: wd,
      colors: ["#882853", "#000000", "#7a3b3b", "#3b4444"],
    },
    {
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      stock: 67,
      image: sa50,
      colors: ["#0000ff", "#ff0000", "#ffffff"],
    },
    {
      name: "Camera",
      category: "Electronic",
      price: "$420.00",
      stock: 52,
      image: cam,
      colors: ["#000000", "#808080", "#c0c0c0"],
    },
    {
      name: "Microsoft Headphones",
      category: "Digital Product",
      price: "$150.00",
      stock: 110,
      image: mh,
      colors: ["#000000", "#ff0000", "#ffff00"],
    },
    {
      name: "Women's Dress",
      category: "Fashion",
      price: "$640.00",
      stock: 635,
      image: wd,
      colors: ["#882853", "#000000", "#7a3b3b", "#3b4444"],
    },
  ]);

  // Delete product function
  const deleteProduct = (productName) => {
    setProducts(products.filter((product) => product.name !== productName));
  };

  return (
    <div className={`product-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`mainps-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="product-title">Product Stock</h1>

        <div className="product-stock-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Pieces</th>
                <th>Available Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img src={product.image} alt={product.name} width="50" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="color-options">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          style={{ backgroundColor: color }}
                          className="color-circle"
                        ></span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <button className="edit-btn">
                      <FaRegEdit size={20} />
                    </button>
                    <button className="delete-btn" onClick={() => deleteProduct(product.name)}>
                      <HiOutlineTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductStock;
