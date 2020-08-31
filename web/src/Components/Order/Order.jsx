import React from 'react';

import './style.css';


const Order = ({ onClose = () => { } }) => {

    return (
        <main className="modal-order">
            <div className="order-content">
                <div className="params-content">
                    <h2>Ordenar</h2>
                    <button className="close-button" onClick={onClose}>x</button>
                </div>
            </div>

            <div className="order-buttons-content">
                <button className="button-order">Mais recentes</button>
                <button className="button-order">Menor preço</button>
                <button className="button-order">Maior preço</button>
            </div>

        </main>
    )
};

export default Order;