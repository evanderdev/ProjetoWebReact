import React, { useState } from 'react';

import InputColors from '../InputColors/InputColors'
import InputSizes from '../InputSizes/InputSizes'
import data from '../../data/data';

import './style.css';


const Filter = ({ onClose = () => { } }) => {

    /*/Adicionando cores no array e tirando valores duplicados para renderizar no modal/*/
    const colors = [...new Set(...[])];

    function getColors() {

        data.map(product =>
            colors.push(product.cor)
        )
    }
    getColors();

    const uniqueColors = [...new Set(...[colors])];

    const [colorsOption, setcolorsOption] = useState(false);

    /*/Adicionando tamanhos no array e tirando valores duplicados para renderizar no modal/*/
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

    const [sizesOption, setsizesOption] = useState(false);

    /*/Adicionando estado para renderizar a faixa de preços no modal/*/
    const [priceOption, setpriceOption] = useState(false);

    return (
        <main className="modal-filter">
            <div className="filter-content">
                <div className="params-content">
                    <h2>Filtrar</h2>
                    <button className="close-button" onClick={onClose}>x</button>
                </div>
            </div>

            <div className="title-filter">
                <h2>cores</h2>
                <button className="hidden-button" onClick={() => setcolorsOption(!colorsOption)}>{!colorsOption ? "+" : "-"}</button>
            </div>
            {colorsOption &&
                <div className="colors-content">
                    {uniqueColors.map(products =>
                        <InputColors key={products} name={products} classNameLabel="check-color-content" classNameSpan="checkmark" />)
                    }
                </div>
            }

            <div className="title-filter">
                <h2>tamanhos</h2>
                <button className="hidden-button" onClick={() => setsizesOption(!sizesOption)}>{!sizesOption ? "+" : "-"}</button>
            </div>
            {sizesOption &&
                <div className="sizes-content">
                    {uniqueSizes.map(products =>
                        <InputSizes key={products} name={products} classNameLabel="check-size-content" classNameSpan="checksize" />)
                    }
                </div>
            }

            <div className="title-filter">
                <h2>faixa de preço</h2>
                <button className="hidden-button" onClick={() => setpriceOption(!priceOption)}>{!priceOption ? "+" : "-"}</button>
            </div>
            {priceOption &&
                <div className="colors-content">
                    <InputColors key="0a50"
                        name="de R$ 0 até R$ 50"
                        classNameLabel="check-color-content"
                        classNameSpan="checkmark"
                    />
                    <InputColors key="51a150"
                        name="de R$ 51 até R$ 150"
                        classNameLabel="check-color-content"
                        classNameSpan="checkmark"
                    />
                    <InputColors key="151a300"
                        name="de R$ 151 até R$ 300"
                        classNameLabel="check-color-content"
                        classNameSpan="checkmark"
                    />
                    <InputColors key="301a500"
                        name="de R$ 301 até R$ 500"
                        classNameLabel="check-color-content"
                        classNameSpan="checkmark"
                    />
                    <InputColors key="501mais"
                        name="a partir de R$ 501"
                        classNameLabel="check-color-content"
                        classNameSpan="checkmark"
                    />
                </div>
            }

            {priceOption || sizesOption || colorsOption ?
                <div className="buttons-filter-content">
                    <button className="button-to-apply">aplicar</button>
                    <button className="button-clear">limpar</button>
                </div>
                : null
            }
        </main>
    )
};

export default Filter;