import React, { useState} from 'react';

import Input from '../Input/Input.tsx';
import data from '../../data/data';

import './style.css';

const Filter = () => {

    const colors = [...new Set(...[])];

    function getColors() {

        data.map(product =>
            colors.push(product.cor)
        )
    }
    getColors();

    const uniqueColors = [...new Set(...[colors])];

    const sizes = [];

    function getSizes() {

        data.map(product =>
            sizes.push(product.tamanho)
        )
    }
    getSizes();

    const uniqueSizes = [...new Set(...[sizes.reduce((last, current) => current
        .concat(last), [])
    ])];

    const [colorsOption, setcolorsOption] = useState(false);

    return (
        <main className="modal-filter">
            <div className="filter-content">
                <div className="items-content">
                    <h2>Filtrar</h2>
                    <button className="close-button"></button>
                </div>
            </div>

            <div className="title-filter-colors">
                <h2>cores</h2>
                <button className="hidden-button" onClick={() => setcolorsOption(!colorsOption)}></button>
            </div>
            {colorsOption &&
                <fieldset className="colors-content">
                {uniqueColors.map(products =>
                    <Input key={products} name={products}/>
                )}
                </fieldset> 
                }
        </main>
    )
};

export default Filter;