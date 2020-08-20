import React from 'react';

import logoImg from '../../assets/images/logo-m3.png';
import bagImg from '../../assets/images/bag.png';

import './style.css';
import ProductBox from '../../Components/ProductBox/ProductBox';

function Products() {
    return (
        <div id="page-products" className="container">
            <header id="page-header">
                <div className="top-bar-container">
                    <img src={logoImg} alt="Agência M3" />
                    <img className="bag-content" src={bagImg} alt="Carrinho de Compras" />
                </div>
            </header>

            <legend><h2>Blusas</h2></legend>

            <div className="buttons-content">
                <button>Filtrar</button>
                <button>Ordenar</button>
            </div>

            <main>
                <ProductBox />
                <button className="more">CARREGAR MAIS</button>
            </main>

            <footer>Agência M3 - Agência de Performance Digital</footer>
        </div>
    )
}

export default Products;