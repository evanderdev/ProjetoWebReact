import React, { InputHTMLAttributes} from 'react';

import './style.css'

const InputSizes = ({name, classNameLabel, classNameSpan}) =>{
 
    return (
        <div>
            <label className={classNameLabel}>
                    <input type="checkbox"></input>
                <span className={classNameSpan}>{name}</span>
            </label>
        </div>
    )
}

export default InputSizes;