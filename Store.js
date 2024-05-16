import React, { useState, useEffect } from 'react'
import "./Store.css"

function Store() {

    /* 
    In this problem i did some research to find a functionality in react called slice
    What it does: It changes contents of an array by either removing or replacing existing elements and/or adding new elements in place
    Its general syntax is as follows: array.splice(start, deleteCount, item1, item2, item3, ...)
    start is the starting index at which we want to start changing the array
    deletCount is how many elements we want to remove from start
    item1,item2...  are the elements to add to the array starting at the start index
    In my approach:
    I used the .splice() to insert the dragged prducts into a new position in the array of products 
    */

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error in fetching: ', err));
    }, []);

    const handleDragStart = (e, product) => {
        e.dataTransfer.setData("product", JSON.stringify(product));
    };

    const handleDrop = (e, dropProduct) => {
        e.preventDefault();
        const draggedProduct = JSON.parse(e.dataTransfer.getData("product"));
        const updatedProducts = products.filter(p => p.id !== draggedProduct.id);
        const index = updatedProducts.findIndex(p => p.id === dropProduct.id);
        updatedProducts.splice(index, 0, draggedProduct);
        setProducts(updatedProducts);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="store-container">
            {products.map(product => (
                <div key={product.id}
                    className="product-card"
                    draggable
                    onDragStart={(e) => handleDragStart(e, product)}
                    onDrop={(e) => handleDrop(e, product)}
                    onDragOver={handleDragOver}
                    onClick={() => openModal(product)}>
                    <h4>{product.title}</h4>
                    <img src={product.image} alt={product.title} />
                    <p>${product.price}</p>
                </div>
            ))}
            {selectedProduct && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>{selectedProduct.title}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.title} />
                        <p>${selectedProduct.price}</p>
                        <p>{selectedProduct.category}</p>
                        <p>Rating: {selectedProduct.rating.rate}</p>
                        <button className="close-button" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Store