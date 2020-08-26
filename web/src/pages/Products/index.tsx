import React, { useState } from 'react';

import logoImg from '../../assets/images/logo-m3.png';
import bagImg from '../../assets/images/bag.png';

import ProductBox from '../../Components/ProductBox/ProductBox';
import Filter from '../../Components/Filter/Filter';

import './style.css';

function Products() {
    const [modalFilter, setmodalFilter] = useState(false);

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
                <button onClick={() => setmodalFilter(true)}>Filtrar</button>
                {modalFilter ? <Filter /> : null}

                <button>Ordenar</button>
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