import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loader from '../Loader/Loader';

export default function Api() {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);
    let [searchTerm, setSearchTerm] = useState("");
    let navigate = useNavigate();

    async function getProducts() {
        try {
            let { data } = await axios.get('https://fakestoreapi.com/products');
            setProducts(data);
            setLoading(false);
        } catch (e) {
            console.log("Erorr:", e);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    let filterProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>

            {loading ? <Loader /> : (
                <div className="container">
                    <h1 className="my-4 text-center"><i className="fa-solid fa-box-open" /> Products </h1>
                    <div className="mb-4">
                        <input type="text" placeholder="Search products..." className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <div className="row">
                        {filterProducts.length > 0 ? (
                            filterProducts.map((product) => (
                                <div className="col-md-3 mb-4" key={product.id}>
                                    <div className="card h-100 card-hover">
                                        <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text"><strong>${product.price}</strong></p>
                                            <button className="api-btn" onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center">
                                <h4>No products found</h4>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
