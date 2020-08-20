import React from 'react';

import data from '../../data/data.jsx'

import './style.css'

export default () => {

    return (
        <>
        {data.map(product =>
            <div className="product-box">
                <img src={product.img} alt={product.nome} />

                <div className="product-name">
                    {product.nome}
                </div>

                <div className="product-price">
                    <div>{product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>

                    {product.preco > 300 ?
                        <span>até 5x de {product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        :
                        <span>até 3x de {product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    }
                </div>

                <button>COMPRAR</button>
            </div>
        )}
        </>
    )
}