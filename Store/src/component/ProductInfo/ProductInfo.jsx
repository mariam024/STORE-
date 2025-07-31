import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function ProductInfo() {
    let { id } = useParams();
    let [product, setProduct] = useState(null);
    let [loading, setLoading] = useState(true);

    async function getProductsInfo() {
        try {
            let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);
        } catch (e) {
            console.log("Error:", e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductsInfo();
    }, []);

    return (
        <>
            {loading ? <Loader /> : (
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid"
                                style={{ objectFit: "contain", maxHeight: "400px" }}
                            />
                        </div>
                        <div className="col-md-7">
                            <h2>{product.title}</h2>
                            <p className="text-muted">{product.description}</p>
                            <h4 className="text-success">${product.price}</h4>
                            <button className="api-btn"><i className="fa-solid fa-cart-shopping" />  Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
