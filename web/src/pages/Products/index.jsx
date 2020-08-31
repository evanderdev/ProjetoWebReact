import React, { useState } from 'react';

import logoImg from '../../assets/images/logo-m3.png';
import bagImg from '../../assets/images/bag.png';

import ProductBox from '../../Components/ProductBox/ProductBox';
import Filter from '../../Components/Filter/Filter';
import Order from '../../Components/Order/Order';

import './style.css';

function Products() {
    const [modalFilter, setmodalFilter] = useState(false);
    const [modalOrder, setmodalOrder] = useState(false);

    return (
        <main id="page-products" className="container">

            <header id="page-header">
                <div className="top-bar-container">
                    <img src={logoImg} alt="Agência M3" />
                    <img className="bag-content" src={bagImg} alt="Carrinho de Compras" />
                </div>
            </header>

            <legend><h2>Blusas</h2></legend>

            <div className="buttons-content">
                <button className="button-product" onClick={() => setmodalFilter(true)}>Filtrar</button>
                {modalFilter ? 
                (<Filter onClose={() => setmodalFilter(false)}/>) 
                : null}

                <button className="button-product" onClick={() => setmodalOrder(true)}>Ordenar</button>
                {modalOrder ? 
                (<Order onClose={() => setmodalOrder(false)}/>) 
                : null}
            </div>

            <div className="product-main">
                <ProductBox />
            </div>

            <div className="button-main-content">
                <button className="more-button">CARREGAR MAIS</button>
            </div>

            <footer>Agência M3 - Agência de Performance Digital</footer>
        </main>
    )
}

export default Products;