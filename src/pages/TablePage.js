import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/tablePage.css';
import { FaRegEdit } from "react-icons/fa"; // Icons for edit and delete
import { HiOutlineTrash } from "react-icons/hi";
import aws4 from "../assets/aws4.png";
import mh from "../assets/mh.png";
import wd from "../assets/wd.png";

const TablePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Example order data
  const orders = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2024', type: 'Electric', status: 'Completed' },
    { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2024', type: 'Book', status: 'Processing' },
    { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2024', type: 'Medicine', status: 'Rejected' },
    { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2025', type: 'Mobile', status: 'Completed' },
    { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2023', type: 'Watch', status: 'Processing' },
    // Add more order data...
  ];

  // Example product data
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
    // Add more products data...
  ]);

// Delete product function
const deleteProduct = (productName) => {
    setProducts(products.filter((product) => product.name !== productName));
  };


  return (
    <div className={`order-list-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? '' : 'margin-closed'}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="table-page-title">Tables</h1>

        {/* Order List Table */}
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.type}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Product Table */}
        <table className="product-table">
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
  );
};

export default TablePage;
